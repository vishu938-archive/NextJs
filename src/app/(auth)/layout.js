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

// The AuthLayout component is a layout for the '(auth)' route group.
// The {children} prop dynamically renders the content of the specific route being accessed.
// For example:
// - Navigating to '/login' renders the 'page.js' inside '(auth)/login' as {children}.
// - Navigating to '/register' renders the 'page.js' inside '(auth)/register' as {children}.
