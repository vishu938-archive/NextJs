import { notFound, redirect } from "next/navigation";
import React from "react";

function getRandomInt(count) {
  // gives count b/w 0 & 1
  return Math.floor(Math.random() * count);
}

const ProductReviews = async ({ params }) => {
  const { reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }

  const randomNumber = getRandomInt(2);
  if (randomNumber === 1) {
    throw new Error("Error loading review");
  }

  return (
    <div>
      <h3>Product Reviews for Review ID: {reviewId}</h3>
    </div>
  );
};

export default ProductReviews;
