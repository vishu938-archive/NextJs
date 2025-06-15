import React from "react";

const headerStyle = {
  background: "blueviolet",
  color: "#fff",
  padding: "16px 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  letterSpacing: "1px",
};

const navStyle = {
  display: "flex",
  gap: "16px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.2s",
};

const Header = () => (
  <header style={headerStyle}>
    <div style={titleStyle}>My Next App</div>
    <nav style={navStyle}>
      <a href="/" style={linkStyle}>
        Home
      </a>
      <a href="/about" style={linkStyle}>
        About
      </a>
      <a href="/dashboard" style={linkStyle}>
        Dashboard
      </a>
    </nav>
  </header>
);

export default Header;
