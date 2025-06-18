"use client";

import React, { useState } from "react";

// In the (auth) folder, both layout.js and template.js can exist and serve different purposes in Next.js:
//
// layout.js: This is the persistent layout for all routes inside the (auth) group. It wraps every page and template in this folder, providing shared structure (like headers, footers, or navigation) that stays the same as you navigate between routes.
//
// template.js: This is used for dynamic layouts. When you navigate between sibling routes (like /login, /register, /forgot-password), template.js is remounted each time, so any state inside it resets on navigation. It wraps only the current page being rendered.
//
// How they work together:
// - When you visit a route like /login, the rendering order is: layout.js (outer) → template.js (inner) → page.js (content).
// - layout.js provides the overall structure, while template.js can add route-specific wrappers or logic that should reset on navigation between sibling routes.
//
// Summary:
// - Use layout.js for persistent UI across all (auth) routes.
// - Use template.js for per-route wrappers that reset state on navigation between sibling pages.
// Both must include {children} to properly render nested content.

const Template = ({ children }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        name="template"
        id="template"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 rounded p-2"
        autoComplete="off"
      />
      {children}
    </div>
  );
};

export default Template;
