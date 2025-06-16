import Link from "next/link";

// This file is the main page for the 'products' route in the Next.js app.
// It displays a list of products at the /products URL.
// In Next.js, files named 'page.js' or 'page.jsx' inside a folder become the route for that folder.

const ProductsList = () => {
  const productId = 100; // this productId might come from props
  return (
    <div>
      ProductsList{" "}
      <ul>
        <Link href={"/products/1"}>Product 1</Link>
        <br />
        <Link href={"/products/2"}>Product 2</Link>
        <br />
        <Link href={"/products/3"} replace>
          Product 3
        </Link>
        <br />
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </ul>
    </div>
  );
};

export default ProductsList;

// The `replace` prop on `<Link href={"/products/3"} replace>` causes the navigation to replace the current entry in the browser's history stack instead of adding a new one.