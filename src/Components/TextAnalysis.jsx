import React, { useState } from "react";

function TextAnalysis() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAnalyze = () => {
    if (text.trim() !== "") {
      console.log("Text to analyze:", text);
      // Implement your text analysis logic here
    } else {
      alert("Please enter some text to analyze.");
    }
  };

  const ayuDarkStyle = {
    backgroundColor: "#151718",
    color: "#cdd6f4",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace",
  };

  const cardStyle = {
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#26292b",
    border: "1px solid #4c566a",
    width: "500px",
    textAlign: "center",
  };

  const headingStyle = {
    marginBottom: "20px",
    color: "#cdd6f4",
    fontSize: "48px",
  };

  const subheadingStyle = {
    fontWeight: "bold",
    fontSize: "32px",
  };

  const textAreaStyle = {
    padding: "10px",
    border: "1px solid #4c566a",
    borderRadius: "5px",
    marginBottom: "20px",
    backgroundColor: "#1e2022",
    color: "#cdd6f4",
    width: "100%",
    height: "150px", // Increased height for text area
    resize: "vertical", // Allow vertical resizing
  };

  const buttonStyle = {
    padding: "15px 30px",
    background: "linear-gradient(to right, #61afef, #4078c0)",
    color: "#cdd6f4",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <div style={ayuDarkStyle}>
      <h2 style={headingStyle}>
        <span role="img" aria-label="leaf" style={{ marginRight: "5px" }}>
          🌱
        </span>
        Find out which disease has been caught by your plant
        <span role="img" aria-label="leaf" style={{ marginLeft: "5px" }}>
          🌿
        </span>
      </h2>
      <div style={cardStyle}>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span role="img" aria-label="text" style={{ marginRight: "10px", fontSize: '3em' }}>
            📝
          </span>
          <span style={subheadingStyle}>Please Enter The Text</span>
        </div>
        <textarea
          value={text}
          onChange={handleTextChange}
          style={textAreaStyle}
        />
        <button onClick={handleAnalyze} style={buttonStyle}>
          <span
            role="img"
            aria-label="analysis"
            style={{ marginRight: "10px" }}
          >
            🔹
          </span>
          Analyze
        </button>
      </div>
    </div>
  );
}

export default TextAnalysis;