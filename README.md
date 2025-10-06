<p align="center">
  <img src="public/logo.svg" alt="InterviewAI Pro Logo" width="180"/>
</p>

<h1 align="center">InterviewAI Pro</h1>

<p align="center">
  AI-powered voice interview platform for job seekers. Practice with realistic interviews, get instant AI feedback, and ace your next job opportunity.
  <br />
  <b>Master Your Interview Skills with AI-Powered Voice Interviews</b>
</p>

<p align="center">
  <a href="https://interview-ai-pro.vercel.app"><strong>✨ Live Demo</strong></a> •
  <a href="#-key-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-environment-setup">Environment Setup</a>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" alt="Next.js"></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React"></a>
  <a href="https://firebase.google.com"><img src="https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-orange?style=flat-square&logo=firebase" alt="Firebase"></a>
  <a href="https://ai.google.dev"><img src="https://img.shields.io/badge/Gemini-2.5_Flash-green?style=flat-square&logo=google" alt="Google Gemini"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind"></a>
  <a href="https://vapi.ai"><img src="https://img.shields.io/badge/Vapi-Web_SDK-purple?style=flat-square" alt="Vapi"></a>
</p>

<br>

<p align="center">
  <img src="public/pattern.png" alt="InterviewAI Pro Screenshot" width="80%"/>
</p>

---

## 🎯 Overview

**InterviewAI Pro** is a cutting-edge platform that revolutionizes interview preparation through AI-powered voice interactions. Perfect your interview skills with realistic simulations, receive instant expert feedback, and track your improvement—all in one sleek, modern application.

### Why InterviewAI Pro?

- **Realistic Practice**: Face challenging interview questions tailored to your industry and role
- **Instant Feedback**: Get detailed assessments of your responses to improve fast
- **Convenience**: Practice anytime, anywhere, as many times as you need
- **Progress Tracking**: Monitor your improvement over time with detailed analytics

---

## 🚀 Key Features

- **Real-time voice interviews** powered by Vapi Web SDK
- **AI interviewer** using Google Gemini 2.5 Flash
- **Automatic question generation** & personalized feedback
- **Secure user authentication** (Firebase)
- **Interview history & performance dashboard**

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 15
- **Library**: [React](https://react.dev) 19
- **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth)
- **Database**: [Cloud Firestore](https://firebase.google.com/docs/firestore)
- **AI Model**: [Google Gemini 2.5 Flash](https://ai.google.dev)
- **Voice SDK**: [Vapi](https://vapi.ai)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Deployment**: [Vercel](https://vercel.com)

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [pnpm](https://pnpm.io/installation)
- [Firebase](https://firebase.google.com/) account for backend services

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Prajwal-R-P/InterviewAI-Pro.git
    cd InterviewAI-Pro
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add the required Firebase and Vapi credentials. See the Environment Setup section for more details.

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🔑 Environment Setup

You'll need to create a `.env.local` file in the root of your project and add the following environment variables:

```env
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin SDK (for backend functions)
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# Vapi Configuration
NEXT_PUBLIC_VAPI_API_URL=https://api.vapi.ai
NEXT_PUBLIC_VAPI_PUBLIC_KEY=

# Gemini API Key
GEMINI_API_KEY=
```

### Obtaining Credentials

- **Firebase**:
    1.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    2.  In your project settings, find your web app's configuration details for the `NEXT_PUBLIC_` variables.
    3.  Generate a new private key for the Admin SDK (`FIREBASE_` variables) under **Project settings > Service accounts**.

- **Vapi**:
    1.  Sign up on the [Vapi Dashboard](https://vapi.ai).
    2.  Find your Public Key in the "Developers" section.

- **Gemini**:
    1.  Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

---

## 🧑‍💻 Created by

This project was created and is maintained by **Prajwal R P**.

- **GitHub**: [@Prajwal-R-P](https://github.com/Prajwal-R-P)
- **LinkedIn**: [Prajwal R P](https://www.linkedin.com/in/prajwal-r-p/)

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


<table>

  <tr>- **Modern, responsive UI** (Next.js 15, Tailwind CSS)- **Modern, responsive UI** (Next.js 15, Tailwind CSS)

    <td width="50%" valign="top">

      <h3>🎤 Real-time Voice Interviews</h3><br>

      <p>Engage in natural, conversational interviews with our AI interviewer powered by Vapi Web SDK.</p>

    </td>

    <td width="50%" valign="top">

      <h3>🤖 Advanced AI Interviewer</h3><p align="center">

      <p>Benefit from Google Gemini 2.5 Flash AI, which provides realistic and challenging interview experiences.</p>

    </td>  <img src="public/pattern.png" alt="InterviewAI Pro Screenshot" width="80%"/>## 🛠️ Tech Stack## 🛠️ Tech Stack

  </tr>

  <tr></p>

    <td width="50%" valign="top">

      <h3>📊 Dynamic Question Generation</h3>

      <p>Receive tailored questions based on your resume, role, and previous responses.</p>

    </td>---

    <td width="50%" valign="top">

      <h3>📝 Personalized Feedback</h3>- **Next.js 15** (App Router, Server Actions)- **Next.js 15** (App Router, Server Actions)

      <p>Get comprehensive assessments of your responses with specific improvement suggestions.</p>

    </td>## 🎯 Overview

  </tr>

  <tr>- **React 19**- **React 19**

    <td width="50%" valign="top">

      <h3>🔐 Secure Authentication</h3>**InterviewAI Pro** is a cutting-edge platform that revolutionizes interview preparation through AI-powered voice interactions. Perfect your interview skills with realistic simulations, receive instant expert feedback, and track your improvement—all in one sleek, modern application.

      <p>Enjoy peace of mind with Firebase authentication and secure data storage.</p>

    </td>- **Tailwind CSS**- **Tailwind CSS**

    <td width="50%" valign="top">

      <h3>📱 Responsive Design</h3>### Why InterviewAI Pro?

      <p>Use the application seamlessly across all your devices with a modern, responsive UI.</p>

    </td>- **Vapi Web SDK** (voice calls)- **Vapi Web SDK** (voice calls)

  </tr>

</table>- **Realistic Practice**: Face challenging interview questions tailored to your industry and role



---- **Instant Feedback**: Get detailed assessments of your responses to improve fast- **Google Gemini AI** (2.5 Flash)- **Google Gemini AI** (2.5 Flash)



## 🛠️ Tech Stack- **Convenience**: Practice anytime, anywhere, as many times as you need



Our platform is built with modern, cutting-edge technologies:- **Progress Tracking**: Monitor your improvement over time with detailed analytics- **Firebase** (Auth, Firestore)- **Firebase** (Auth, Firestore)



### Frontend

- **Next.js 15** - App Router architecture with server components

- **React 19** - Latest React features and optimizations---- **Zod** (validation)- **Zod** (validation)

- **Tailwind CSS** - Utility-first styling for responsive design

- **Zod** - Type-safe form validation



### AI & Voice## 🌟 Key Features

- **Vapi Web SDK** - Enterprise-grade voice interface

- **Google Gemini 2.5 Flash** - State-of-the-art AI language model



### Backend & Data<table>---

- **Firebase Authentication** - Secure user management

- **Firestore Database** - Real-time data storage  <tr>

- **Next.js Server Actions** - Secure API endpoints

    <td width="50%" valign="top">## ⚡ Quick Start

---

      <h3>🎤 Real-time Voice Interviews</h3>

## 🚀 Getting Started

      <p>Engage in natural, conversational interviews with our AI interviewer powered by Vapi Web SDK.</p>## ⚡ Quick Start

### Prerequisites

    </td>

- Node.js 18.x or higher

- npm 8.x or higher    <td width="50%" valign="top">### 1. Clone the repository

- A Firebase project

- Google Gemini API access      <h3>🤖 Advanced AI Interviewer</h3>

- Vapi account

      <p>Benefit from Google Gemini 2.5 Flash AI, which provides realistic and challenging interview experiences.</p>### 1. Clone the repository```bash

### Installation

    </td>

1. **Clone the repository**

   ```bash  </tr>```bashgit clone https://github.com/Alpha-Rp/InterviewAI-Pro.git

   git clone https://github.com/Alpha-Rp/InterviewAI-Pro.git

   cd InterviewAI-Pro  <tr>

   ```

    <td width="50%" valign="top">git clone https://github.com/Alpha-Rp/InterviewAI-Pro.gitcd InterviewAI-Pro

2. **Install dependencies**

   ```bash      <h3>📊 Dynamic Question Generation</h3>

   npm install

   ```      <p>Receive tailored questions based on your resume, role, and previous responses.</p>cd InterviewAI-Pro```



3. **Set up environment variables** (see [Environment Setup](#-environment-setup))    </td>

   ```bash

   cp .env.example .env.local    <td width="50%" valign="top">```

   # Edit .env.local with your credentials

   ```      <h3>📝 Personalized Feedback</h3>



4. **Start the development server**      <p>Get comprehensive assessments of your responses with specific improvement suggestions.</p>### 2. Install dependencies

   ```bash

   npm run dev    </td>

   ```

  </tr>### 2. Install dependencies```bash

5. **Open your browser**

   ```  <tr>

   http://localhost:3000

   ```    <td width="50%" valign="top">```bashnpm install



---      <h3>🔐 Secure Authentication</h3>



## 🔑 Environment Setup      <p>Enjoy peace of mind with Firebase authentication and secure data storage.</p>npm install```



Create a `.env.local` file in the root directory with the following variables:    </td>



### Vapi Voice Interface    <td width="50%" valign="top">```



```env      <h3>📱 Responsive Design</h3>

NEXT_PUBLIC_VAPI_WEB_TOKEN="your_vapi_web_token"

NEXT_PUBLIC_VAPI_WORKFLOW_ID="your_vapi_workflow_id"      <p>Use the application seamlessly across all your devices with a modern, responsive UI.</p>### 3. Set up environment variables

```

    </td>

<details>

<summary><b>How to get Vapi credentials</b></summary>  </tr>### 3. Set up environment variables

<ol>

  <li>Sign up at <a href="https://vapi.ai">Vapi.ai</a></li></table>

  <li>Create a new workflow</li>

  <li>Navigate to API Keys section</li>Create a `.env.local` file in the root directory and add the following variables:

  <li>Generate a new Web SDK token</li>

  <li>Copy the Workflow ID from your workflow settings</li>---

</ol>

</details>Create a `.env.local` file in the root directory and add the following variables:



### Google Gemini AI## 🛠️ Tech Stack



```env#### **Vapi Configuration** (Voice Interview Service)

GOOGLE_GENERATIVE_AI_API_KEY="your_google_gemini_api_key"

```Our platform is built with modern, cutting-edge technologies:



<details>#### **Vapi Configuration** (Voice Interview Service)```bash

<summary><b>How to get Gemini API key</b></summary>

<ol>### Frontend

  <li>Visit <a href="https://makersuite.google.com/app/apikey">Google AI Studio</a></li>

  <li>Sign in with your Google account</li>- **Next.js 15** - App Router architecture with server components```bashNEXT_PUBLIC_VAPI_WEB_TOKEN="your_vapi_web_token"

  <li>Create a new API key</li>

  <li>Copy the key to your .env.local file</li>- **React 19** - Latest React features and optimizations

</ol>

</details>- **Tailwind CSS** - Utility-first styling for responsive designNEXT_PUBLIC_VAPI_WEB_TOKEN="your_vapi_web_token"NEXT_PUBLIC_VAPI_WORKFLOW_ID="your_vapi_workflow_id"



### Firebase Configuration- **Zod** - Type-safe form validation



#### Client-side (Authentication & Firestore)NEXT_PUBLIC_VAPI_WORKFLOW_ID="your_vapi_workflow_id"```



```env### AI & Voice

NEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"- **Vapi Web SDK** - Enterprise-grade voice interface```Get your Vapi credentials from [Vapi Dashboard](https://vapi.ai/)

NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_project_id.appspot.com"- **Google Gemini 2.5 Flash** - State-of-the-art AI language model

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"

NEXT_PUBLIC_FIREBASE_APP_ID="your_firebase_app_id"Get your Vapi credentials from [Vapi Dashboard](https://vapi.ai/)

```

### Backend & Data

#### Server-side (Admin SDK)

- **Firebase Authentication** - Secure user management#### **Google Gemini AI** (Question Generation & Feedback)

```env

FIREBASE_PROJECT_ID="your_project_id"- **Firestore Database** - Real-time data storage

FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your_project_id.iam.gserviceaccount.com"

FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"- **Next.js Server Actions** - Secure API endpoints#### **Google Gemini AI** (Question Generation & Feedback)```bash

```



<details>

<summary><b>How to set up Firebase</b></summary>---```bashGOOGLE_GENERATIVE_AI_API_KEY="your_google_gemini_api_key"

<ol>

  <li>Go to <a href="https://console.firebase.google.com/">Firebase Console</a></li>

  <li>Create a new project</li>

  <li>Enable Authentication (Email/Password provider)</li>## 🚀 Getting StartedGOOGLE_GENERATIVE_AI_API_KEY="your_google_gemini_api_key"```

  <li>Create a Firestore Database</li>

  <li>In Project Settings > General, scroll to "Your apps" section and add a Web app</li>

  <li>Copy the Firebase config values to your .env.local file</li>

  <li>For Admin SDK, go to Project Settings > Service Accounts</li>### Prerequisites```Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

  <li>Click "Generate New Private Key" and download the JSON file</li>

  <li>Copy the values to your .env.local file</li>

</ol>

</details>- Node.js 18.x or higherGet your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)



### Application URL (for production)- npm 8.x or higher



```env- A Firebase project#### **Firebase Client Configuration** (Authentication & Database)

NEXT_PUBLIC_BASE_URL="https://your-production-url.vercel.app"

```- Google Gemini API access



---- Vapi account#### **Firebase Client Configuration** (Authentication & Database)```bash



## 📂 Project Structure



```### Installation```bashNEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"

app/                # Next.js app directory (routes & layouts)

├── (auth)/         # Authentication pages

│   ├── sign-in/    # Sign in page

│   └── sign-up/    # Sign up page1. **Clone the repository**NEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"

├── (root)/         # Main application routes

│   ├── interview/  # Interview experience pages   ```bash

│   └── page.tsx    # Landing page

└── api/            # API routes   git clone https://github.com/Alpha-Rp/InterviewAI-Pro.gitNEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"

    └── vapi/       # Voice API integration

   cd InterviewAI-Pro

components/         # Reusable UI components

├── ui/             # Core UI components (buttons, inputs, etc.)   ```NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_project_id.appspot.com"

└── ...            # Feature-specific components



firebase/           # Firebase configuration

├── admin.ts        # Admin SDK setup (server-side)2. **Install dependencies**NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_project_id.appspot.com"NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"

└── client.ts       # Client SDK setup (client-side)

   ```bash

lib/               # Utility functions and shared logic

├── actions/       # Server actions for data operations   npm installNEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"NEXT_PUBLIC_FIREBASE_APP_ID="your_firebase_app_id"

├── utils.ts       # Helper functions

└── vapi.sdk.ts    # Voice API integration logic   ```



public/            # Static assetsNEXT_PUBLIC_FIREBASE_APP_ID="your_firebase_app_id"```

├── covers/        # Company logos and covers

└── ...            # Icons and images3. **Set up environment variables** (see [Environment Setup](#-environment-setup))



types/             # TypeScript type definitions   ```bash```

```

   cp .env.example .env.local

---

   # Edit .env.local with your credentials#### **Firebase Admin SDK** (Server-side operations)

## 🔐 Security Best Practices

   ```

- **Never commit** `.env.local` to version control

- Add `.env.local` to your `.gitignore` file#### **Firebase Admin SDK** (Server-side operations)```bash

- For production deployments, set environment variables in your hosting platform (Vercel, Netlify, etc.)

- Keep your Firebase Admin SDK credentials secure4. **Start the development server**



---   ```bash```bashFIREBASE_PROJECT_ID="your_project_id"



## 🌐 Deployment   npm run dev



### Deploy on Vercel (Recommended)   ```FIREBASE_PROJECT_ID="your_project_id"FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your_project_id.iam.gserviceaccount.com"



The easiest way to deploy InterviewAI Pro is with [Vercel](https://vercel.com):



1. Push your code to a GitHub repository5. **Open your browser**FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your_project_id.iam.gserviceaccount.com"FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"

2. Import your repository to Vercel

3. Configure all environment variables in Vercel dashboard   ```

4. Deploy!

   http://localhost:3000FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Alpha-Rp/InterviewAI-Pro)

   ```

---

```Get Firebase credentials from:

## 🤝 Contributing

---

Contributions are welcome! Please feel free to submit a Pull Request.

Get Firebase credentials from:1. Go to [Firebase Console](https://console.firebase.google.com/)

1. Fork the project

2. Create your feature branch (`git checkout -b feature/amazing-feature`)## 🔑 Environment Setup

3. Commit your changes (`git commit -m 'Add some amazing feature'`)

4. Push to the branch (`git push origin feature/amazing-feature`)1. Go to [Firebase Console](https://console.firebase.google.com/)2. Select your project

5. Open a Pull Request

Create a `.env.local` file in the root directory with the following variables:

---

2. Select your project3. Go to **Project Settings** > **Service Accounts**

## 📄 License

### Vapi Voice Interface

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

3. Go to **Project Settings** > **Service Accounts**4. Click **Generate New Private Key**

---

```env

<p align="center">

  <b>Built with ❤️ by Prajwal</b>NEXT_PUBLIC_VAPI_WEB_TOKEN="your_vapi_web_token"4. Click **Generate New Private Key**

</p>

NEXT_PUBLIC_VAPI_WORKFLOW_ID="your_vapi_workflow_id"

<p align="center">

  <a href="https://github.com/Alpha-Rp">GitHub</a> •```#### **Application URL** (Optional for production)

  <a href="https://interview-ai-pro.vercel.app">Live Demo</a>

</p>

<details>#### **Application URL** (Optional for production)```bash

<summary><b>How to get Vapi credentials</b></summary>

<ol>```bashNEXT_PUBLIC_BASE_URL="http://localhost:3000"

  <li>Sign up at <a href="https://vapi.ai">Vapi.ai</a></li>

  <li>Create a new workflow</li>NEXT_PUBLIC_BASE_URL="http://localhost:3000"```

  <li>Navigate to API Keys section</li>

  <li>Generate a new Web SDK token</li>```

  <li>Copy the Workflow ID from your workflow settings</li>

</ol>### 4. Run the development server

</details>

### 4. Run the development server```bash

### Google Gemini AI

```bashnpm run dev

```env

GOOGLE_GENERATIVE_AI_API_KEY="your_google_gemini_api_key"npm run dev```

```

```

<details>

<summary><b>How to get Gemini API key</b></summary>### 5. Open the application

<ol>

  <li>Visit <a href="https://makersuite.google.com/app/apikey">Google AI Studio</a></li>### 5. Open the applicationNavigate to [http://localhost:3000](http://localhost:3000) in your browser.

  <li>Sign in with your Google account</li>

  <li>Create a new API key</li>Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

  <li>Copy the key to your .env.local file</li>

</ol>## 📁 Project Structure

</details>

---

### Firebase Configuration



#### Client-side (Authentication & Firestore)

## 📁 Project Structure

```env

NEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"```

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"

NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"```

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_project_id.appspot.com"

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"app/            # Next.js app directory (routes, layouts, API)app/            # Next.js app directory (routes, layouts, API)1. **Clone the repo:**1. **Clone the repo:**

NEXT_PUBLIC_FIREBASE_APP_ID="your_firebase_app_id"

```  ├── (auth)/   # Authentication pages (sign-in, sign-up)



#### Server-side (Admin SDK)  ├── (root)/   # Main application pagescomponents/     # React UI components



```env  ├── api/      # API routes for Vapi integration

FIREBASE_PROJECT_ID="your_project_id"

FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your_project_id.iam.gserviceaccount.com"  └── layout.tsxconstants/      # Static data and config   ```bash	```bash

FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"

```components/     # Reusable React UI components



<details>constants/      # Static data and configurationfirebase/       # Firebase admin/client setup

<summary><b>How to set up Firebase</b></summary>

<ol>firebase/       # Firebase admin/client setup

  <li>Go to <a href="https://console.firebase.google.com/">Firebase Console</a></li>

  <li>Create a new project</li>

  <li>Enable Authentication (Email/Password provider)</li>

  <li>Create a Firestore Database</li>  └── client.ts # Firebase Client SDK (client-side)

  <li>In Project Settings > General, scroll to "Your apps" section and add a Web app</li>

  <li>Copy the Firebase config values to your .env.local file</li>lib/            # Utilities and server actionspublic/         # Static assets (images, icons)

  <li>For Admin SDK, go to Project Settings > Service Accounts</li>

  <li>Click "Generate New Private Key" and download the JSON file</li>  ├── actions/  # Server actions for auth and data

  <li>Copy the values to your .env.local file</li>

</ol>

</details>

public/         # Static assets (images, icons)

### Application URL (for production)

types/          # TypeScript type definitions```

```env

NEXT_PUBLIC_BASE_URL="https://your-production-url.vercel.app"```

```

   ```	```

---

---

## 📂 Project Structure

## 📝 Environment Variables

```

app/                # Next.js app directory (routes & layouts)## 🔐 Important Notes

├── (auth)/         # Authentication pages

│   ├── sign-in/    # Sign in page2. **Install dependencies:**2. **Install dependencies:**

│   └── sign-up/    # Sign up page

├── (root)/         # Main application routes### Environment Variables Security

│   ├── interview/  # Interview experience pages

│   └── page.tsx    # Landing page- **Never commit** `.env.local` to version controlSee `.env.local.example` for all required variables.

└── api/            # API routes

    └── vapi/       # Voice API integration- Add `.env.local` to your `.gitignore` file



components/         # Reusable UI components- For production, set environment variables in your hosting platform (Vercel, Netlify, etc.)   ```bash	```bash

├── ui/             # Core UI components (buttons, inputs, etc.)

└── ...            # Feature-specific components- The `measurementId` in `firebase/client.ts` can remain hardcoded as it's not sensitive



firebase/           # Firebase configuration---

├── admin.ts        # Admin SDK setup (server-side)

└── client.ts       # Client SDK setup (client-side)### Firebase Setup



lib/               # Utility functions and shared logic1. Create a new Firebase project   npm install	npm install

├── actions/       # Server actions for data operations

├── utils.ts       # Helper functions2. Enable **Authentication** (Email/Password provider)

└── vapi.sdk.ts    # Voice API integration logic

3. Create a **Firestore Database****© 2025 Prajwal. All rights reserved.**

public/            # Static assets

├── covers/        # Company logos and covers4. Generate service account credentials for admin SDK    AI-powered voice interview platform for job seekers. Practice with realistic interviews, get instant AI feedback, and ace your next job opportunity.

└── ...            # Icons and images

   ```	```

types/             # TypeScript type definitions

```### Vapi Setup



---1. Sign up at [Vapi.ai](https://vapi.ai/)



## 🔐 Security Best Practices2. Create a new assistant/workflow   ```bash	npm run dev



- **Never commit** `.env.local` to version control3. Copy your Web Token and Workflow ID

- Add `.env.local` to your `.gitignore` file

- For production deployments, set environment variables in your hosting platform (Vercel, Netlify, etc.)   npm run dev	```

- Keep your Firebase Admin SDK credentials secure

---

---

   ```5. **Open:** [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

## 🚀 Deployment

### Deploy on Vercel (Recommended)

5. **Open:** [http://localhost:3000](http://localhost:3000)

The easiest way to deploy InterviewAI Pro is with [Vercel](https://vercel.com):

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository

2. Import your repository to Vercel## 📁 Folder Structure

3. Configure all environment variables in Vercel dashboard

4. Deploy!1. Push your code to GitHub



[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Alpha-Rp/InterviewAI-Pro)2. Import project in [Vercel](https://vercel.com)## 📁 Folder Structure



---3. Add all environment variables in Vercel dashboard



## 🤝 Contributing4. Deploy!```



Contributions are welcome! Please feel free to submit a Pull Request.



1. Fork the project[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Alpha-Rp/InterviewAI-Pro)```app/            # Next.js app directory (routes, layouts, API)

2. Create your feature branch (`git checkout -b feature/amazing-feature`)

3. Commit your changes (`git commit -m 'Add some amazing feature'`)

4. Push to the branch (`git push origin feature/amazing-feature`)

5. Open a Pull Request---app/            # Next.js app directory (routes, layouts, API)components/     # React UI components



---



## 📄 License## 🤝 Contributingcomponents/     # React UI componentsconstants/      # Static data and config



This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



---Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.constants/      # Static data and configfirebase/       # Firebase admin/client setup



<p align="center">

  <b>Built with ❤️ by Prajwal</b>

</p>1. Fork the projectfirebase/       # Firebase admin/client setuplib/            # Utilities and server actions



<p align="center">2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

  <a href="https://github.com/Alpha-Rp">GitHub</a> •

  <a href="https://interview-ai-pro.vercel.app">Live Demo</a>3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)lib/            # Utilities and server actionspublic/         # Static assets (images, icons)

</p>
4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Requestpublic/         # Static assets (images, icons)types/          # TypeScript types



---types/          # TypeScript types```



## 📄 License```



This project is open source and available under the [MIT License](LICENSE).

## 📝 Environment Variables

---See `.env.local.example` for all required variables.



**Built with ❤️ by Prajwal**See `.env.local.example` for all required variables.



For questions or support, please open an issue on GitHub.## 🤝 Contributing


---Pull requests welcome! For major changes, open an issue first to discuss what you’d like to change.



**Built by Prajwal**## 📄 License

