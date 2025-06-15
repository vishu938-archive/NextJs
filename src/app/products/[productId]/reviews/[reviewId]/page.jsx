import { notFound } from "next/navigation";
import React from "react";

const ProductReviews = async ({ params }) => {
  const { reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h3>Product Reviews for Review ID: {reviewId}</h3>
    </div>
  );
};

export default ProductReviews;
