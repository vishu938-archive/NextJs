// Topic: Route Groups in Next.js
// The '(auth)' folder is a route group in Next.js.
// Route groups allow you to organize routes without affecting the URL structure.
// The parentheses in '(auth)' indicate that this folder is a route group and will not appear in the URL.

// Subfolders like 'login', 'register', and 'forgot-password' inside '(auth)' define specific routes.
// For example:
// - 'login/page.js' corresponds to the '/login' route.
// - 'register/page.js' corresponds to the '/register' route.
// - 'forgot-password/page.js' corresponds to the '/forgot-password' route.

// This structure helps in grouping related routes (like authentication) together for better organization.

const Login = () => {
  return <div>Login</div>;
};

export default Login;
