import Link from "next/link";
import React from "react";

const F1Page = () => {
  return (
    <div>
      <h2>F1 Page</h2>
      <Link href="/f1/f2" className="underline">
        go to F2 Page.
      </Link>
      <br />
      <Link href="/f3" className="underline">
        go to F3 Page.
      </Link>
    </div>
  );
};

export default F1Page;
