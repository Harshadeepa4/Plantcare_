import React from "react";

function MarketInsights() {
  const ayuDarkStyle = {
    backgroundColor: "#151718",
    color: "#cdd6f4",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace",
    padding: "20px", // Add padding for better spacing
  };

  const cardStyle = {
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#26292b",
    border: "1px solid #4c566a",
    width: "80%", // Occupy most of the container width
    textAlign: "center",
  };

  const headingStyle = {
    marginBottom: "20px",
    color: "#cdd6f4",
    fontSize: "48px",
  };

  const featureListStyle = {
    textAlign: "left", // Align list items to the left
    fontSize: "20px", // Increased font size for better readability
  };

  return (
    <div style={ayuDarkStyle}>
      <h2 style={headingStyle}>
        <span role="img" aria-label="chart" style={{ marginRight: "5px" }}>
          📊
        </span>
        Market Insights
      </h2>
      <div style={cardStyle}>
        <ul style={featureListStyle}>
          <li>
            <b>Regional demand trends:</b> Stay ahead of the curve by
            understanding which crops are in high demand in different regions.
          </li>
          <li>
            <b>Government support programs:</b> Identify and leverage government
            schemes and subsidies to maximize your farm's profitability.
          </li>
          <li>
            <b>Price fluctuations:</b> Monitor real-time price fluctuations for
            various crops to make informed decisions about buying and selling.
          </li>
        </ul>
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          <b>Ideal for High-value Argo-Farms</b>
        </p>
      </div>
    </div>
  );
}

export default MarketInsights;