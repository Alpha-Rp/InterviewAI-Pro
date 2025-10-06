# InterviewAI Pro

AI-powered voice interview platform for job seekers. Practice with realistic interviews, get instant AI feedback, and ace your next job opportunity.

**Live Demo:** [https://interview-ai-pro.vercel.app](https://interview-ai-pro.vercel.app)



------



## 🚀 Features## 🚀 Features



- **Real-time voice interviews** powered by Vapi Web SDK- **Real-time voice interviews** powered by Vapi Web SDK

- **AI interviewer** using Google Gemini 2.5 Flash- **AI interviewer** using Google Gemini 2.5 Flash

- **Automatic question generation** & personalized feedback- **Automatic question generation** & personalized feedback

- **Secure user authentication** (Firebase)- **Secure user authentication** (Firebase)

- **Interview history & performance dashboard**- **Interview history & performance dashboard**

- **Modern, responsive UI** (Next.js 15, Tailwind CSS)- **Modern, responsive UI** (Next.js 15, Tailwind CSS)



## 🛠️ Tech Stack## 🛠️ Tech Stack



- **Next.js 15** (App Router, Server Actions)- **Next.js 15** (App Router, Server Actions)

- **React 19**- **React 19**

- **Tailwind CSS**- **Tailwind CSS**

- **Vapi Web SDK** (voice calls)- **Vapi Web SDK** (voice calls)

- **Google Gemini AI** (2.5 Flash)- **Google Gemini AI** (2.5 Flash)

- **Firebase** (Auth, Firestore)- **Firebase** (Auth, Firestore)

- **Zod** (validation)- **Zod** (validation)



---

## ⚡ Quick Start

## ⚡ Quick Start

### 1. Clone the repository

### 1. Clone the repository```bash

```bashgit clone https://github.com/Alpha-Rp/InterviewAI-Pro.git

git clone https://github.com/Alpha-Rp/InterviewAI-Pro.gitcd InterviewAI-Pro

cd InterviewAI-Pro```

```

### 2. Install dependencies

### 2. Install dependencies```bash

```bashnpm install

npm install```

```

### 3. Set up environment variables

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add the following variables:

Create a `.env.local` file in the root directory and add the following variables:

#### **Vapi Configuration** (Voice Interview Service)

#### **Vapi Configuration** (Voice Interview Service)```bash

```bashNEXT_PUBLIC_VAPI_WEB_TOKEN="your_vapi_web_token"

NEXT_PUBLIC_VAPI_WEB_TOKEN="your_vapi_web_token"NEXT_PUBLIC_VAPI_WORKFLOW_ID="your_vapi_workflow_id"

NEXT_PUBLIC_VAPI_WORKFLOW_ID="your_vapi_workflow_id"```

```Get your Vapi credentials from [Vapi Dashboard](https://vapi.ai/)

Get your Vapi credentials from [Vapi Dashboard](https://vapi.ai/)

#### **Google Gemini AI** (Question Generation & Feedback)

#### **Google Gemini AI** (Question Generation & Feedback)```bash

```bashGOOGLE_GENERATIVE_AI_API_KEY="your_google_gemini_api_key"

GOOGLE_GENERATIVE_AI_API_KEY="your_google_gemini_api_key"```

```Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

#### **Firebase Client Configuration** (Authentication & Database)

#### **Firebase Client Configuration** (Authentication & Database)```bash

```bashNEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"

NEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"

NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_project_id.appspot.com"

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_project_id.appspot.com"NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"NEXT_PUBLIC_FIREBASE_APP_ID="your_firebase_app_id"

NEXT_PUBLIC_FIREBASE_APP_ID="your_firebase_app_id"```

```

#### **Firebase Admin SDK** (Server-side operations)

#### **Firebase Admin SDK** (Server-side operations)```bash

```bashFIREBASE_PROJECT_ID="your_project_id"

FIREBASE_PROJECT_ID="your_project_id"FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your_project_id.iam.gserviceaccount.com"

FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your_project_id.iam.gserviceaccount.com"FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"

FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"```

```Get Firebase credentials from:

Get Firebase credentials from:1. Go to [Firebase Console](https://console.firebase.google.com/)

1. Go to [Firebase Console](https://console.firebase.google.com/)2. Select your project

2. Select your project3. Go to **Project Settings** > **Service Accounts**

3. Go to **Project Settings** > **Service Accounts**4. Click **Generate New Private Key**

4. Click **Generate New Private Key**

#### **Application URL** (Optional for production)

#### **Application URL** (Optional for production)```bash

```bashNEXT_PUBLIC_BASE_URL="http://localhost:3000"

NEXT_PUBLIC_BASE_URL="http://localhost:3000"```

```

### 4. Run the development server

### 4. Run the development server```bash

```bashnpm run dev

npm run dev```

```

### 5. Open the application

### 5. Open the applicationNavigate to [http://localhost:3000](http://localhost:3000) in your browser.

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

---



## 📁 Project Structure

```

```

app/            # Next.js app directory (routes, layouts, API)app/            # Next.js app directory (routes, layouts, API)1. **Clone the repo:**1. **Clone the repo:**

  ├── (auth)/   # Authentication pages (sign-in, sign-up)

  ├── (root)/   # Main application pagescomponents/     # React UI components

  ├── api/      # API routes for Vapi integration

  └── layout.tsxconstants/      # Static data and config   ```bash	```bash

components/     # Reusable React UI components

constants/      # Static data and configurationfirebase/       # Firebase admin/client setup

firebase/       # Firebase admin/client setup

  ├── admin.ts  # Firebase Admin SDK (server-side)lib/            # Utilities and server actions   git clone https://github.com/faizansh123/MockMate-AI-Interviewer.git	git clone https://github.com/faizansh123/MockMate-AI-Interviewer.git

  └── client.ts # Firebase Client SDK (client-side)

lib/            # Utilities and server actionspublic/         # Static assets (images, icons)

  ├── actions/  # Server actions for auth and data

  └── vapi.sdk.tstypes/          # TypeScript types   cd MockMate-AI-Interviewer	cd MockMate-AI-Interviewer

public/         # Static assets (images, icons)

types/          # TypeScript type definitions```

```

   ```	```

---

## 📝 Environment Variables

## 🔐 Important Notes

2. **Install dependencies:**2. **Install dependencies:**

### Environment Variables Security

- **Never commit** `.env.local` to version controlSee `.env.local.example` for all required variables.

- Add `.env.local` to your `.gitignore` file

- For production, set environment variables in your hosting platform (Vercel, Netlify, etc.)   ```bash	```bash

- The `measurementId` in `firebase/client.ts` can remain hardcoded as it's not sensitive

---

### Firebase Setup

1. Create a new Firebase project   npm install	npm install

2. Enable **Authentication** (Email/Password provider)

3. Create a **Firestore Database****© 2025 Prajwal. All rights reserved.**

4. Generate service account credentials for admin SDK    AI-powered voice interview platform for job seekers. Practice with realistic interviews, get instant AI feedback, and ace your next job opportunity.

   ```	```

### Vapi Setup

1. Sign up at [Vapi.ai](https://vapi.ai/)

2. Create a new assistant/workflow   ```bash	npm run dev

3. Copy your Web Token and Workflow ID

   npm run dev	```

---

   ```5. **Open:** [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

5. **Open:** [http://localhost:3000](http://localhost:3000)

### Deploy to Vercel (Recommended)

## 📁 Folder Structure

1. Push your code to GitHub

2. Import project in [Vercel](https://vercel.com)## 📁 Folder Structure

3. Add all environment variables in Vercel dashboard

4. Deploy!```



[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Alpha-Rp/InterviewAI-Pro)```app/            # Next.js app directory (routes, layouts, API)



---app/            # Next.js app directory (routes, layouts, API)components/     # React UI components



## 🤝 Contributingcomponents/     # React UI componentsconstants/      # Static data and config



Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.constants/      # Static data and configfirebase/       # Firebase admin/client setup



1. Fork the projectfirebase/       # Firebase admin/client setuplib/            # Utilities and server actions

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)lib/            # Utilities and server actionspublic/         # Static assets (images, icons)

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

