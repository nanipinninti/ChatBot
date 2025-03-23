import { useState } from "react";

const useGenerativeAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (messages,prompt) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages,prompt }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      return data.response;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { generateResponse, loading, error };
};

export default useGenerativeAI;
