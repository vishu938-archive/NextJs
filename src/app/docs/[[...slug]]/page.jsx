// The folder name '[[...slug]]' uses Next.js dynamic catch-all routing.
// This means any route like /docs/a, /docs/a/b, etc., will be handled by this file.

import React from "react";

const Document = async ({ params }) => {
  // 'params' is provided by Next.js for dynamic routes.
  // 'slug' is an array containing the path segments after /docs/.
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h3>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h3>
    );
  } else if (slug?.length === 1) {
    return <h3>Viewing docs for feature {slug[0]}</h3>;
  }

  return <h3>Viewing docs for all features</h3>;
};

export default Document;
