"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    {
      path: "/register",
      name: "Register",
    },
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/forgot-password",
      name: "Forgot Password",
    },
  ];
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <div>
          {navLinks.map((link) => {
            const isActive =
              pathname === link.path ||
              (pathname.startsWith(link.path) && link.path !== "/");
            return (
              <Link
                key={link.name}
                href={link.path}
                className={isActive ? "text-blue-500 font-semibold" : "mx-4"}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

// In the (auth) folder, both layout.js and template.js can exist and serve different purposes in Next.js:
//
// layout.js: This is the persistent layout for all routes inside the (auth) group. It wraps every page and template in this folder, providing shared structure (like headers, footers, or navigation) that stays the same as you navigate between routes.
//
// template.js: This is used for dynamic layouts. When you navigate between sibling routes (like /login, /register, /forgot-password), template.js is remounted each time, so any state inside it resets on navigation. It wraps only the current page being rendered.
//
// How they work together:
// - When you visit a route like /login, the rendering order is: layout.js (outer) → template.js (inner) → page.js (content).
// - layout.js provides the overall structure, while template.js can add route-specific wrappers or logic that should reset on navigation between sibling routes.
//
// Summary:
// - Use layout.js for persistent UI across all (auth) routes.
// - Use template.js for per-route wrappers that reset state on navigation between sibling pages.
// Both must include {children} to properly render nested content.

// The AuthLayout component is a layout for the '(auth)' route group.
// The {children} prop dynamically renders the content of the specific route being accessed.
// For example:
// - Navigating to '/login' renders the 'page.js' inside '(auth)/login' as {children}.
// - Navigating to '/register' renders the 'page.js' inside '(auth)/register' as {children}.
