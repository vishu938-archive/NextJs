// This file is part of the 'products' route in the Next.js app.
// It handles dynamic routing using the [productId] folder.
// When a user visits /products/123, this page shows details for product 123.
// The 'params' prop gives access to the dynamic segment in the URL.
// params is a promise that resolves to an object containing the dynamic segments of the URL.
// In this case, it will resolve to { productId: '123' } if the URL is /products/123.

const ProductIdDetails = async ({ params }) => {
  const { productId } = await params;

  return (
    <div>
      <h3>Product Details for Product ID: {productId}</h3>
    </div>
  );
};

export default ProductIdDetails;
