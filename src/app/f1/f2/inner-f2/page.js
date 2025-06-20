import Link from "next/link";
import React from "react";

const InnerF2 = () => {
  return (
    <div>
      <h3>Inner F2 Page</h3>
      <div>
        <Link href="/f5" className="underline">
          Go to F5 Page.
        </Link>
      </div>
    </div>
  );
};

export default InnerF2;
