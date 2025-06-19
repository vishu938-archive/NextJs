import React from "react";

// This layout is used for the 'complex-dashboard' route.
//
// Parallel Routes in Next.js:
// In this folder, you can see subfolders like '@notifications', '@revenue', and '@users'.
// These are called parallel routes. They allow you to render multiple pages or components side-by-side within the same layout.
// Each parallel route is rendered in a separate slot, so you can show different sections (like notifications, revenue, users) at the same time on the dashboard.
// This is useful for building complex UIs where multiple independent views need to be displayed together.
// the layout.js receives the children prop along with the parallel routes as props.
// The children prop contains the main content of the page like the dashboard while the parallel routes provide additional sections like notifications, revenue, and users.

const DashboardLayout = ({
  children,
  users,
  notifications,
  revenue,
  login,
}) => {
  const isUserLoggedIn = true   ; // This should be replaced with actual authentication logic
  return isUserLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default DashboardLayout;
