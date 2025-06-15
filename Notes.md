# .next folder is where our nextJs app is served from

# .next folder is created when you dev / prod build.

# when we run "npm run dev" cmd , the execution flow starts from package.json moves to layout.js to render the rootLayout component.

# RootLayout component renders all the children components present in the app folder.

=======================================================

# React Server components - nextJs follows RSC architecture treating all the components as Server components by default.

=====================================================

# Next Js mirrors the folder structure automatically by which we can accessing url paths.

# In Next.js, components placed outside the app directory (e.g., in a components folder inside src) are not routable by default. The app directory is specifically designed for routing, and only files inside it (e.g., app/dashboard/page.js) can define routes.