import React from "react";

const NotFoundPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#21e07d",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "0.5rem",
          fontWeight: "700",
          letterSpacing: "2px",
        }}
      >
        404
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          opacity: 0.8,
          marginBottom: "1rem",
        }}
      >
        error | page not found
      </p>

      <a
        href="/"
        style={{
          marginTop: "10px",
          padding: "10px 24px",
          border: "1px solid #21e07d",
          borderRadius: "8px",
          color: "#21e07d",
          textDecoration: "none",
          fontSize: "1rem",
          transition: "0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#21e07d20")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Go back home
      </a>
    </div>
  );
};

export default NotFoundPage;
