import { useState } from "react";
import ChatComponent from "./components/ChatComponent";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <ChatComponent />
    </div>
  );
}

export default App;
