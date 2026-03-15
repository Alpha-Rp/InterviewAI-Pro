'use client'

import { cn } from "@/lib/utils";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {vapi} from '@/lib/vapi.sdk'
import { createGeneratorConfig, interviewer } from "@/constants";
import { createFeedback } from "@/lib/actions/general.action";




enum CallStatus{
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED'
}

interface SavedMessage{
    role: 'user' | 'system' | 'assistant'
    content: string;
}

const Agent = ({userName, userId, type, interviewId, questions}: AgentProps) => {
    const router = useRouter();

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [messages, setMessages] = useState<SavedMessage[]>([]);

    

    useEffect(() => {
  // 🧠 Async function to create the workflow
    

  // 🧩 Event handlers
  const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
  const onCallEnd = () => setCallStatus(CallStatus.FINISHED);

    const onMessage = (message: any) => {
    if (message.type === "transcript" && message.transcriptType === "final") {
      const newMessage = { role: message.role, content: message.transcript };
      setMessages((prev) => [...prev, newMessage]);
      
      // Check if AI said goodbye - auto end call after 3 seconds
      if (message.role === "assistant" && 
          (message.transcript.toLowerCase().includes("goodbye") || 
           message.transcript.toLowerCase().includes("good luck"))) {
        console.log("AI said goodbye, ending call in 3 seconds...");
        setTimeout(() => {
          console.log("Auto-ending call now");
          vapi.stop();
        }, 3000);
      }
    }

        if (message.type === "status-update" && message.status === "ended") {
            setCallStatus(CallStatus.FINISHED);
        }
  };

  const onSpeechStart = () => setIsSpeaking(true);
  const onSpeechEnd = () => setIsSpeaking(false);
    const onError = (error: Error) => {
        console.log("Error", error);
        if (callStatus === CallStatus.CONNECTING) {
            setCallStatus(CallStatus.INACTIVE);
        }
    };

    const onCallStartFailed = (event: any) => {
        console.error("Vapi call start failed:", event);
        setCallStatus(CallStatus.INACTIVE);
    };

  // 📞 Register Vapi event listeners
  vapi.on("call-start", onCallStart);
  vapi.on("call-end", onCallEnd);
  vapi.on("message", onMessage);
  vapi.on("speech-start", onSpeechStart);
  vapi.on("speech-end", onSpeechEnd);
  vapi.on("error", onError);
    vapi.on("call-start-failed", onCallStartFailed);

  // 🧹 Cleanup
  return () => {
    vapi.off("call-start", onCallStart);
    vapi.off("call-end", onCallEnd);
    vapi.off("message", onMessage);
    vapi.off("speech-start", onSpeechStart);
    vapi.off("speech-end", onSpeechEnd);
    vapi.off("error", onError);
        vapi.off("call-start-failed", onCallStartFailed);
  };
}, [callStatus]);

    const handleGenerateFeedback = async (messages: SavedMessage[]) => {
        console.log ('Generate feed back here')

        const { success, feedbackId: id } = await createFeedback({
        interviewId: interviewId!,
        userId: userId!,
        transcript: messages,
        
      });


        if(success && id){
            router.push(`/interview/${interviewId}/feedback`)
        } else {
            console.log('Error saving feedback')
            router.push('/')
        }
    }
  
    useEffect(()=>{

        if(callStatus=== CallStatus.FINISHED){
            if(type === 'generate'){
                // Process the conversation to extract interview parameters
                handleGenerateInterview(messages);
            } else{
                handleGenerateFeedback(messages)
            }
        }
        
    }, [messages, callStatus, type, userId] )

    const handleGenerateInterview = async (messages: SavedMessage[]) => {
        console.log('Processing interview generation from transcript...');
        
        // Combine all messages into a single transcript
        const fullTranscript = messages.map(m => `${m.role}: ${m.content}`).join('\n');
        
        console.log('Full transcript:', fullTranscript);
        
        // Use AI to extract the parameters from the conversation
        try {
            // Use relative URL for same-origin requests
            const apiUrl = '/api/vapi/extract';
            console.log('Calling API:', apiUrl);
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    transcript: fullTranscript,
                    userId: userId,
                }),
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('API error response:', errorText);
                throw new Error(`API returned ${response.status}: ${errorText}`);
            }
            
            const data = await response.json();
            console.log('Extraction result:', data);
            
            if (data.success) {
                console.log('Interview generated successfully!');
                // Small delay then redirect
                setTimeout(() => {
                    router.push('/');
                }, 1000);
            } else {
                console.error('Failed to generate interview:', data);
                router.push('/');
            }
        } catch (error) {
            console.error('Error generating interview:', error);
            // Still redirect even on error
            setTimeout(() => {
                router.push('/');
            }, 1000);
        }
    }

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);

    if (type === "generate") {
      try {
                const call = await vapi.start(createGeneratorConfig(userName ?? "there"));

                if (!call) {
                    setCallStatus(CallStatus.INACTIVE);
                }
      } catch (error: any) {
        console.error("Vapi start error:", error);
        setCallStatus(CallStatus.INACTIVE);
      }
    } else {
      let formattedQuestions = "";
      if (questions) {
        formattedQuestions = questions
          .map((question) => `- ${question}`)
          .join("\n");
      }

            const call = await vapi.start(interviewer, {
        variableValues: {
          questions: formattedQuestions,
        }
      });

            if (!call) {
                setCallStatus(CallStatus.INACTIVE);
            }
    }
  };

    const handleDisconnect = async () => {
        setCallStatus(CallStatus.FINISHED);

        vapi.stop()
    }

    const latestMessage = messages[messages.length -1]?.content;
    const isCallInactiveOrFinished =  callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED;

    

  return (
    <>
    <div className='call-view'>
        <div className='card-interviewer'>
            <div className='avatar'>
                <Image src="/ai-avatar.png" alt="vapi" width={65} height={54}
                className="object-cover" />
                {isSpeaking && <span className="animate-speak"/>}
            </div>
            <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
            <div className="card-content">
                <Image src="/user-avatar.png" alt="user avatar" width={540} height={540} className="rounded-full object-cover size-[120px] " />
                <h3>{userName}</h3>
            </div>
        </div>
    </div>

        {messages.length > 0 && (
            <div className="transcript-border">
                <div className="transcript">
                    <p key={latestMessage} className={cn('transition-opacity duration-500 opacity-0', 
                        'animate-fadeIn opacity-100'
                    )}>
                        {latestMessage}
                    </p>
                </div>
            </div>

        )}

        <div className="w-full flex justify-center">
            {callStatus !== 'ACTIVE'?(
                <button className="relative btn-call " onClick={handleCall}>
                    <span className={cn(' absolute animate-ping rounded-full opacity-75', callStatus !== 'CONNECTING' && 'hidden'  )}
                        />

                        <span>
                            { isCallInactiveOrFinished?'Call': ". . ." } 
                        </span>
                    
                </button>
            ):(
                <button className="btn-disconnect" onClick={handleDisconnect}>
                    End
                    </button>
            ) }
        </div>
    </>
    
  )
}

export default Agent