import React, { useState } from "react";

function ImageAnalysis() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePredict = () => {
    if (selectedFile) {
      // Logic to handle the file upload and prediction
      console.log("File to upload:", selectedFile);
      // You'll need to implement the actual upload and prediction logic here.
      // This might involve sending the file to a backend API.
    } else {
      alert("Please select a file to upload.");
    }
  };

  const ayuDarkStyle = {
    backgroundColor: "#151718", // Dark background
    color: "#cdd6f4", // Light text
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace", // Ayu Dark often uses monospace fonts
  };

  const cardStyle = {
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Darker shadow
    backgroundColor: "#26292b", // Slightly lighter dark background for the card
    border: "1px solid #4c566a", // Darker border
    width: "350px", // Adjust width as needed
    textAlign: "center",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #4c566a",
    borderRadius: "5px",
    marginBottom: "20px",
    backgroundColor: "#1e2022", // Darker input background
    color: "#cdd6f4",
    width: "100%",
  };

  const buttonStyle = {
    padding: "15px 30px",
    background: "linear-gradient(to right, #61afef, #4078c0)", // Blue gradient for contrast
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

  const headingStyle = {
    marginBottom: "20px",
    color: "#cdd6f4",
    fontSize: "24px", // Increased font size
  };

  const subheadingStyle = {
    fontWeight: "bold",
    fontSize: "18px", // Increased font size
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
          <span role="img" aria-label="camera" style={{ marginRight: "10px" }}>
            📸
          </span>
          <span style={subheadingStyle}>Please Upload The Image</span>
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          style={inputStyle}
        />
        <button onClick={handlePredict} style={buttonStyle}>
          <span
            role="img"
            aria-label="prediction"
            style={{ marginRight: "10px" }}
          >
            🔹
          </span>
          Predict
        </button>
      </div>
    </div>
  );
}

export default ImageAnalysis;