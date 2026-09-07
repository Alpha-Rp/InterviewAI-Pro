# InterviewAI Pro

AI-powered voice interview platform for job seekers. Practice with realistic interviews, get instant AI feedback, and ace your next job opportunity.

**Live Demo:** https://interview-ai-pro.vercel.app

## Overview

InterviewAI Pro is a platform that helps candidates prepare for job interviews through AI-powered voice interactions. It generates realistic, role-specific interview questions, conducts the interview via real-time voice conversation, and gives instant feedback so users can track their improvement over time.

## Key Features

- Real-time voice interviews powered by the Vapi Web SDK.
- AI interviewer driven by Google Gemini 2.5 Flash.
- Automatic, role-tailored interview question generation.
- Personalized feedback and performance assessment after each session.
- Secure user authentication via Firebase.
- Interview history and performance dashboard.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS, Shadcn UI, Radix UI |
| Auth | Firebase Authentication |
| Database | Cloud Firestore |
| AI Model | Google Gemini 2.5 Flash (via @ai-sdk/google) |
| Voice | Vapi Web SDK |
| Forms/Validation | React Hook Form, Zod |
| Deployment | Vercel |

## Project Structure

```
InterviewAI-Pro/
├── app/
│   ├── (auth)/       # Sign-in / sign-up routes
│   ├── (root)/        # Main authenticated app routes (dashboard, interviews)
│   ├── api/vapi/       # Vapi voice-webhook API route
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/             # Shadcn UI primitives
│   ├── Agent.tsx        # Voice interview agent component
│   ├── AuthForm.tsx
│   ├── DisplayTechIcons.tsx
│   ├── FormField.tsx
│   └── InterviewCard.tsx
├── constants/
├── firebase/           # Firebase client/admin config
├── lib/
├── types/
└── public/
```

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm
- A Firebase account/project
- A Vapi account
- A Google AI Studio (Gemini) API key

### Installation

```bash
git clone https://github.com/Alpha-Rp/InterviewAI-Pro.git
cd InterviewAI-Pro
npm install
```

### Environment Setup

Create a .env.local file in the project root:

```
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin SDK (backend)
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# Vapi
NEXT_PUBLIC_VAPI_API_URL=https://api.vapi.ai
NEXT_PUBLIC_VAPI_PUBLIC_KEY=

# Gemini
GEMINI_API_KEY=
```

**Obtaining credentials:**

- **Firebase** - Create a project in the Firebase Console, copy the web app config for the NEXT_PUBLIC_ variables, then generate an Admin SDK private key under Project Settings -> Service Accounts.
- **Vapi** - Sign up at the Vapi Dashboard and copy your Public Key from the Developers section.
- **Gemini** - Get an API key from Google AI Studio.

### Running Locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build & Lint

```bash
npm run build   # production build
npm run start   # run production build
npm run lint     # lint the codebase
```

## Deployment

The app is deployed on Vercel, with production and preview deployments configured per branch/PR.

## Contributing

Contributions are welcome - feel free to open an issue or submit a pull request.

## Author

Created and maintained by Prajwal R P ([@Alpha-Rp](https://github.com/Alpha-Rp)).
