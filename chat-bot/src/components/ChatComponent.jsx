import { useState } from "react";
import useGenerativeAI from "../hooks/useGenerativeAI";

const ChatComponent = () => {
  const { generateResponse, loading, error } = useGenerativeAI();
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    // Add user message and clear input immediately
    const userMessage = prompt.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setPrompt(""); // Clear input right after sending

    // Then get AI response
    const aiResponse = await generateResponse(messages, userMessage);
    setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
  };

  return (
    <div className="max-w-3xl h-screen flex flex-col justify-between mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-lg border border-gray-400">
      <h2 className="text-2xl h-1/20 font-bold text-center mb-4 text-gray-900">
        Chat Assistant
      </h2>

      <div className="h-17/20 overflow-y-auto p-4 bg-white border border-gray-300 rounded-lg mb-4 shadow-inner">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[80%] mb-3 ${
              message.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            <span className="font-semibold">
              {message.sender === "user" ? "You: " : "Assistant: "}
            </span>
            {message.text}
          </div>
        ))}
        {loading && (
          <div className="p-3 bg-gray-200 rounded-lg inline-block">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
              <span className="text-gray-600">Assistant is thinking...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="text-red-600 bg-red-100 p-2 border border-red-300 rounded-lg mt-3">
            {error}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex h-1/20 items-center gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 !bg-blue-600 !text-white rounded-lg !hover:bg-blue-700 !disabled:bg-gray-400"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
