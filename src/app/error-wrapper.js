"use client"; //error boundary must be a client component

import { useState } from "react";
import "./globals.css";

const ErrorSimulator = ({ message = "An error occurred" }) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-900 transition"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};

// This ErrorWrapper component is used to simulate an error in the root layout of the application.
// It provides a button that, when clicked, will throw an error with a specified message.
// This is useful for testing error boundaries and handling errors gracefully in the application.
// The ErrorWrapper component can be used to wrap the main content of the application, allowing for error simulation without affecting the overall layout structure.
