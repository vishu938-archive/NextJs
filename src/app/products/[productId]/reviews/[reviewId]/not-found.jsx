"use client";

import { usePathname } from "next/navigation";
import React from "react";

const ReviewNotFoundPage = () => {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <h3>
        Review {reviewId} for Product {productId} is Not Found!
      </h3>
    </div>
  );
};

export default ReviewNotFoundPage;
// Not Found component doesn't accept any props, it is a static page.

/**
 * If you have defined a not-found.js file specifically for the reviewid route (e.g., in app/reviewid/not-found.js), then when the notFound() method is called within the reviewid route, it will render the route-specific not-found.js page instead of the global not-found.js page.

However, if the notFound() method is called in a different route (e.g., [[...slug]]/page.jsx), it will still render the global not-found.js page, as the route-specific not-found.js only applies to its own route.
 * 
 */