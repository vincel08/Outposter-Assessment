import express from "express";
import cors from "cors";
import keywordDatabase from "./mockData.js";

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

// Route to extract keywords
app.post("/api/keywords", async (req, res) => {
  const { input } = req.body;
  console.log("Received input:", input);

  if (!input) return res.status(400).json({ error: "Input is required" });

  // Convert input to lowercase for case-insensitive matching
  const brand = input.toLowerCase();

  // Check if brand exists in mock database
  const keywords = keywordDatabase[brand] || [
    "general",
    "popular",
    "trending",
    "business",
  ];

  res.json({ keywords });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
