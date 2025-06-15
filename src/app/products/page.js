// This file is the main page for the 'products' route in the Next.js app.
// It displays a list of products at the /products URL.
// In Next.js, files named 'page.js' or 'page.jsx' inside a folder become the route for that folder.

const ProductsList = () => {
  return (
    <div>
      ProductsList{" "}
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
};

export default ProductsList;
