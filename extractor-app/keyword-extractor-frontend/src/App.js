import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const KeywordExtractor = () => {
  const [input, setInput] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getKeywords = async () => {
    if (!input) return;
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/keywords", {
        input,
      });
      setKeywords(response.data.keywords);
    } catch (error) {
      console.error("Error fetching keywords:", error);
      setError("Failed to fetch keywords. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2 className="title">Keyword Extractor</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a brand or word..."
        className="input"
      />
      <button onClick={getKeywords} className="button" disabled={loading}>
        {loading ? "Loading..." : "Get Keywords"}
      </button>

      {error && <p className="error">{error}</p>}

      {keywords.length > 0 && (
        <ul className="keyword-list">
          {keywords.map((keyword, index) => (
            <li key={index} className="keyword-item">
              {keyword}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KeywordExtractor;
