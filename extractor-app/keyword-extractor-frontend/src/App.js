import React, { useState } from "react";
import axios from "axios";

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
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Keyword Extractor</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a brand or word..."
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={getKeywords}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Keywords"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {keywords.length > 0 && (
        <ul className="mt-4">
          {keywords.map((keyword, index) => (
            <li key={index} className="text-gray-700">
              {keyword}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KeywordExtractor;
