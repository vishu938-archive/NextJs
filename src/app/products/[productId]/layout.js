function getRandomInt(count) {
  // gives count b/w 0 & 1
  return Math.floor(Math.random() * count);
}

const ProductDetailsLayout = ({ children }) => {
  const randomNumber = getRandomInt(2);
  if (randomNumber === 1) {
    throw new Error("Error loading Product Details");
  }

  return (
    <div>
      <h1>Featured Products </h1>
      {children}
    </div>
  );
};

export default ProductDetailsLayout;

// here children refers to ProductIdDetails page component and ProductDetailsLayout will be the childrent of RootLayout

// The nearest page.js file within the same directory will be rendered as the children prop in the layout.js. If there are multiple page.js files in nested folders, each layout.js only wraps the page.js in its own directory or subdirectories.
