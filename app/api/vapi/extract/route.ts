import { generateObject, generateText } from "ai";
import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";
import { google } from "@ai-sdk/google";
import { z } from "zod";

export async function POST(request: Request) {
    const { transcript, userId } = await request.json();

    try {
        // Use AI to extract structured data from the conversation transcript
        const { object: extractedData } = await generateObject({
            model: google('models/gemini-2.5-flash'), // Using Gemini 2.5 Flash (higher quota)
            schema: z.object({
                role: z.string().describe('The job role mentioned (e.g., Frontend Developer, Backend Engineer)'),
                level: z.string().describe('Experience level mentioned (e.g., Junior, Mid, Senior)'),
                techstack: z.string().describe('Technologies mentioned as comma-separated (e.g., React, Node.js, TypeScript)'),
                type: z.string().describe('Interview type mentioned (e.g., Technical, Behavioral, Mixed)'),
                amount: z.string().describe('Number of questions mentioned (e.g., 5, 10, 15)'),
            }),
            prompt: `Extract interview preparation parameters from this conversation transcript:

${transcript}

Extract:
- role: The job position they're preparing for
- level: Their experience level (Junior/Mid/Senior)
- techstack: Technologies they want to focus on (comma-separated)
- type: Type of interview questions (Technical/Behavioral/Mixed)
- amount: Number of questions they want (as a number string like "5", "10", or "15")

If any information is unclear or missing, make a reasonable assumption based on the context.`,
        });

        console.log('Extracted data:', extractedData);

        // Generate interview questions using simple text generation (faster)
        const { text: questionsText } = await generateText({
            model: google('models/gemini-2.5-flash'), // Using Gemini 2.5 Flash
            prompt: `Generate ${extractedData.amount} interview questions for a job interview.

Role: ${extractedData.role}
Experience Level: ${extractedData.level}
Tech Stack: ${extractedData.techstack}
Interview Type: ${extractedData.type}

Return ONLY a JSON array of question strings. No other text.
Do not use special characters like "/" or "*".

Example format:
["Question 1", "Question 2", "Question 3"]

Generate the questions now:`,
        });

        console.log('Generated questions text:', questionsText);

        // Parse the questions
        const questions = JSON.parse(questionsText.trim());

        // Save the interview
        const interview = {
            role: extractedData.role,
            type: extractedData.type,
            level: extractedData.level,
            techstack: extractedData.techstack.split(",").map(t => t.trim()),
            questions: questions,
            userId: userId,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString()
        };

        await db.collection('interviews').add(interview);

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Extract API error:', error);
        return Response.json({ success: false, error: String(error) }, { status: 500 });
    }
}
