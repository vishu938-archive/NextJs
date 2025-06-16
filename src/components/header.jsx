import Link from "next/link";
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
      <Link href={"/"} style={linkStyle}>
        Home
      </Link>
      <Link href={"/blog"} style={linkStyle}>
        Blog
      </Link>
      <Link href={"/dashboard"} style={linkStyle}>
        Dashboard
      </Link>
      <Link href={"/products"} style={linkStyle}>
        Products
      </Link>
    </nav>
  </header>
);

export default Header;

// UI Navigation using next/link
