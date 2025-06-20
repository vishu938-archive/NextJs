import Link from "next/link";
import React from "react";

const F2Page = () => {
  return (
    <div>
      <h3>F2 Page</h3>
      <Link href="/f4" className="underline">
        go to Intercepted F3 Page.
      </Link>
    </div>
  );
};

export default F2Page;

// This file defines a page component for the F2 route in a Next.js application. its different from the intercepted route in that it does not override the default rendering behavior.
