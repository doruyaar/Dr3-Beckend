# AI Chat Backend

This project is a **Node.js + TypeScript** simple backend service for an AI-powered chat application. It receives messages from a frontend client, wraps them with pre-defined context (preprompt), forwards them to an AI API, and returns the AI's response back to the frontend. It includes mechanisms to ensure message integrity and prevent prompt injection.

## ✨ Features

- 💬 Processes and transforms user messages before sending to the AI API
- 🧠 Adds contextual "preprompts" to guide AI responses
- 🔐 Hash-based message validation to prevent prompt injection from the frontend
- ⚡ Lightweight and fast Express server
- 🧪 Zod-based input validation
- 🔄 Hot reloading during development
- ☁️ Deployment-ready configuration

## 📁 Project Structure

```
.
├── api/                   # API route handlers
├── src/                   # Utilities and helpers
│   ├── ApiUtil.ts         # Hashing and validation utilities
│   └── lib/               # Core logic for building and wrapping messages
├── server.ts              # Main entry point
├── .example.env           # Environment configuration template
├── tsconfig.json          # TypeScript compiler configuration
└── vercel.json            # Vercel deployment configuration
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Start the Server

```bash
npm start
```

## 📌 What It Does

1. **Receives user input** from the frontend chat UI via an API endpoint.
2. **Validates and wraps** the input using a system-defined preprompt to ensure AI receives context.
3. **Verifies message integrity** using a hashing mechanism to detect any tampering from the frontend.
4. **Forwards** the final prompt to an external AI API (like OpenAI).
5. **Returns** the AI-generated response back to the frontend.

## 🔐 Security: Anti-Injection Hashing

This backend includes a hashing-based security mechanism to verify that:
- Messages are not altered on the client side.
- Frontend users cannot bypass system logic or inject their own preprompts.

## 🧪 Environment Configuration

Copy `.example.env` to `.env` and fill in your secrets (like AI API keys, hash salts, etc.):

```bash
cp .example.env .env
```

## 📦 Dependencies

- `express` - API server
- `zod` - Input validation
- `axios` - HTTP client to talk with AI API
- `dotenv` - Secure configuration
- `cors` - Cross-origin requests

## 🛠 Dev Dependencies

- `typescript` - TypeScript support
- `ts-node-dev` - Live reload for development
- `@types/*` - Type definitions

---

_Built with ❤️ for safe, secure, and intelligent chat applications._
