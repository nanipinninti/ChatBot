# ChatBot Project

## Overview

This project is a ChatBot application built using React. The ChatBot uses a generative AI to respond to user inputs. The UI is designed to be modern and interactive, providing a seamless chat experience.

## Features

- **Generative AI Responses**: The ChatBot uses a generative AI to generate responses based on user inputs.
- **Modern UI**: The application features a modern and classic UI with smooth animations and a clean design.
- **Loading Indicators**: Visual indicators show when the AI is generating a response.
- **Error Handling**: Displays error messages when the AI fails to generate a response.

## Project Structure

```
chat-bot/
├── public/
├── src/
│   ├── components/
│   │   └── ChatComponent.jsx
│   ├── hooks/
│   │   └── useGenerativeAI.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── .env
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd chat-bot
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Type your message in the input field and press "Send".
- The ChatBot will respond with a generated message.
- If the AI is generating a response, a loading indicator will be displayed.
- If there is an error, an error message will be shown.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
