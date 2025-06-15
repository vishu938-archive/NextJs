import React from "react";

const ProductReviews = ({ params }) => {
  const { reviewId } = params;

  return (
    <div>
      <h3>Product Reviews for Review ID: {reviewId}</h3>
    </div>
  );
};

export default ProductReviews;
