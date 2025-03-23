require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/generate", (req, res) => {
  const { messages, userMessage } = req.body;
  const apiKey = process.env.API_KEY;

  // Use the API key to generate a response
  // Example: Call an external API with the API key

  res.json({ response: "Generated response" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
