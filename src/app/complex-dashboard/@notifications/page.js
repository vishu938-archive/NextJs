import { Card } from "@/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <div>Notifications</div>
      <br />
      <Link href={"/complex-dashboard/archived"} className="underline">
        Archived
      </Link>
    </Card>
  );
};

export default Notifications;

// Unmatched Routes in Next.js:
// If a user navigates to a route that does not match any defined page inside this parallel route (e.g., @notifications/archived),
// Next.js will render the nearest 'not-found.js' file. This can be a route-specific not-found page or the global one in the app directory.
// This helps handle 404 errors and display a friendly message when a user visits a non-existent or unmatched route.
