# 🤖 MockMate – AI-Powered Interview Practice Platform

MockMate is a cutting-edge web application built with **Next.js** for both frontend and backend, leveraging **Firebase** for authentication and data storage, styled with **Tailwind CSS**, and powered by **Vapi's AI voice agents**. This platform is designed to help users prepare for job interviews by providing AI-driven mock interviews, instant feedback, and an intuitive user experience.

---

## ⚙️ Tech Stack

- Next.js
- Firebase
- Tailwind CSS
- Vapi AI Voice Agents
- shadcn/ui

---

## 🔋 Features

- **User Authentication:** Secure sign up and sign in using Firebase email/password authentication.
- **Create Interviews:** Quickly generate job interview scenarios enhanced by Vapi voice assistants and Google Gemini AI.
- **AI Feedback:** Engage in interviews with AI voice agents and receive instant, detailed feedback based on your performance.
- **Modern UI/UX:** Clean, responsive design that works seamlessly across devices.
- **Interview Page:** Conduct AI-driven interviews with real-time voice interaction and transcript display.
- **Dashboard:** Manage and review all your interviews with ease.
- **Code Architecture:** Designed with reusability and scalability in mind for easy enhancements.

---

## 🤸 Quick Start

Follow these steps to set up MockMate locally on your machine:

### Prerequisites

Ensure the following are installed:

- Git
- Node.js
- npm (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/Genia89/AI-MockInterviews.git
cd mockmate
```
### Install Dependencies
```bash
npm install
```
### Set Up Environment Variables
#### Create a .env.local file in the root directory with the following variables:
```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```
### Important:
You need to replace the placeholders above with your actual credentials. Here’s how to get them:

#### For Vapi:

- Go to Vapi's website and sign up. You can use your GitHub account to sign in quickly.

- Once logged in, create a new Assistant and set up a Workflow that fits your interview scenario.

- Copy the Web Token and Workflow ID from your Vapi dashboard and paste them into NEXT_PUBLIC_VAPI_WEB_TOKEN and NEXT_PUBLIC_VAPI_WORKFLOW_ID.

#### For Firebase:

- Visit Firebase Console and log in with your Google account (personal or company email).

- Create a new Firebase project with the same name as your platform (e.g., MockMate).

- In the project settings, navigate to the General tab and locate your Firebase SDK configuration to fill in these keys:

```
NEXT_PUBLIC_FIREBASE_API_KEY

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN

NEXT_PUBLIC_FIREBASE_PROJECT_ID

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID

NEXT_PUBLIC_FIREBASE_APP_ID
```

- To generate the service account credentials for backend features, go to Project Settings > Service Accounts and generate a new private key.

- Use the values from this file to fill in:
```angular2html
FIREBASE_PROJECT_ID

FIREBASE_CLIENT_EMAIL

FIREBASE_PRIVATE_KEY (ensure you format multiline private key properly in the .env.local)

```
#### Follow these steps carefully to ensure your app can authenticate users and communicate with Vapi AI services successfully.

### Run the Project
```bash
npm run dev
```
⚠️ **Note:** By default, the app runs on [http://localhost:3000](http://localhost:3000).  
If port 3000 is already in use, Next.js will automatically select the next available port (for example, `http://localhost:3001`).  
Please check your terminal output to see which port the app is running on.

## 📚 Learn More

To deepen your knowledge about the core technologies used in MockMate, check out these resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vapi AI](https://vapi.com)
