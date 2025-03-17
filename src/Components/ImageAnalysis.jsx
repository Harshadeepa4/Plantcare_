import React, { useState } from "react";

function ImageAnalysis() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePredict = () => {
    if (selectedFile) {
      console.log("File to upload:", selectedFile);
      // Implement your upload and prediction logic here
    } else {
      alert("Please select a file to upload.");
    }
  };

  const ayuDarkStyle = {
    backgroundColor: "#151718", // Fallback dark background
    color: "#cdd6f4",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace",
    backgroundImage: "url('https://wallpaperbat.com/img/319677-agriculture-desktop-wallpaper.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
  };

  const cardStyle = {
    padding: "70px",
    borderRadius: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    backgroundColor: "transparent", // Make the card transparent
    border: "2px dashed #cdd6f4", // Dashed border for the upload area
    width: "400px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Center content vertically
  }

  const inputStyle = {
    display: "none", // Hide the default file input
  };

  const buttonContainerStyle = {
    width: "fit-content", 
    margin: "20px auto 0 auto",     // Center the container horizontally and add top margin
  };

  const buttonStyle = {
    padding: "15px 30px",
    borderRadius: "30px",
    boxShadow: "0 4px 8px rgba(1, 1, 1, 1.5)",
    border: "0.5px dashed #000000",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto", // Set width to auto to fit content
  };

  const headingStyle = {
    marginBottom: "20px",
    color: "#ffffff",
    fontSize: "30px",
  };

  const subheadingStyle = {
    fontWeight: "bold",
    fontSize: "18px",
  };

  const uploadIconStyle = {
    width: "50px",
    height: "auto",
    marginBottom: "10px",
    opacity: 0.7,
  };

  const uploadTextStyle = {
    color: "ffffff",
    fontSize: "1.5em",
    opacity: 0.8,
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("image-upload").click();
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
      <div
        style={cardStyle}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <img
          src="https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg" 
          alt="Upload Icon"
          style={uploadIconStyle}
        />
        <p style={{ ...uploadTextStyle, color: "#ffffff" }}>
  Drag and drop an image of a plant leaf to process
</p>
        <input
          type="file"
          id="image-upload"
          onChange={handleFileChange}
          accept="image/*"
          style={inputStyle}
        />
      </div>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <div style={buttonContainerStyle}>
        <button onClick={handlePredict} style={buttonStyle}>
          <span role="img" aria-label="prediction" style={{ marginRight: "10px" }}>
          </span>
          Predict
        </button>
      </div>
    </div>
  );
}

export default ImageAnalysis;
