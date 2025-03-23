# ChatBot Project

## Overview

This project consists of two main parts: the `backend` and the `chat-bot` frontend. The backend provides the API for generating responses, while the frontend is a React application that interacts with the backend to provide a chat interface.

## Features

- **Generative AI Responses**: The ChatBot uses a generative AI to generate responses based on user inputs.
- **Modern UI**: The frontend application features a modern and classic UI with smooth animations and a clean design.
- **Loading Indicators**: Visual indicators show when the AI is generating a response.
- **Error Handling**: Displays error messages when the AI fails to generate a response.

## Project Structure

```
ChatBot/
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   └── ...other backend files...
│   ├── .env
│   ├── .gitignore
│   └── package.json
├── chat-bot/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatComponent.jsx
│   │   ├── hooks/
│   │   │   └── useGenerativeAI.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Backend Setup

1. Navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the `backend` directory and add your API key (ensure this file is ignored in `.gitignore`):

   ```plaintext
   API_KEY=your_api_key_here
   ```

4. Start the backend server:
   ```sh
   npm start
   # or
   yarn start
   ```

### Frontend Setup

1. Navigate to the `chat-bot` directory:

   ```sh
   cd chat-bot
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the `chat-bot` directory and add your API key (ensure this file is ignored in `.gitignore`):

   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```sh
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:5000`.

## Usage

- Type your message in the input field and press "Send".
- The ChatBot will respond with a generated message.
- If the AI is generating a response, a loading indicator will be displayed.
- If there is an error, an error message will be shown.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
