import React from "react";

const footerStyle = {
  backgroundColor: "#222",
  color: "#fff",
  padding: "24px 0",
  textAlign: "center",
  fontSize: "1rem",
  marginTop: "40px",
  letterSpacing: "0.5px",
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} My Next App. All rights reserved.</p>
    </footer>
  );
}
