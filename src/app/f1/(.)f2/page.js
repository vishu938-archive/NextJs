import React from "react";

const InterceptedF2Page = () => {
  return <div>InterceptedF2Page</div>;
};

export default InterceptedF2Page;

// This file defines the intercepted route for a specific path in a Next.js app.
// Intercepted routes allow you to override the default rendering of a route.
// For example, you might use this to show a modal or custom UI when navigating to a certain path, without leaving the current page context.

// The component exported here (`InterceptedF2Page`) will be rendered instead of the default page.
// when the intercepted route is matched.
