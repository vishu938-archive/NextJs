# Notes on Intercepted Routes in Next.js (f1 to f5 Folders)

## What are Intercepted Routes?

Intercepted routes in Next.js allow you to "intercept" navigation to a route and show custom content (like a modal or drawer) while still keeping the user on the current page. This is useful for overlays, previews, or side panels that should not fully navigate away from the current context.

When you use intercepted routes, the URL changes, and the intercepted content is shown. However, if you reload the page or open the intercepted route directly, you will see the default content of that route, not the intercepted overlay.

---

## Folder Explanations

### f1/

- Contains the main route and several intercepted route folders.
- Example: `f1/(..)f3/page.js` intercepts navigation to `/f3` when triggered from `/f1`, showing custom content as an overlay or modal.
- `f1/(.)f2/page.js` intercepts navigation to `/f2` from `/f1`.
- `f1/f2/` and `f1/f2/(..)f4/` show how you can nest intercepted routes.

### f2/

- Has its own route and an `inner-f2` folder.
- `f2/inner-f2/(...)f5/page.js` intercepts navigation to `/f5` from `/f2/inner-f2`.
- Demonstrates deep nesting and interception from subfolders.

### f3/, f4/, f5/

- These are standard routes that can be intercepted by other folders (like f1 or f2) using the intercepted route pattern.
- When you visit `/f3` directly, you see its default content. But if you navigate to `/f3` from `/f1`, you may see intercepted content instead.

---

## How Intercepted Routes Work

- When you navigate to an intercepted route (e.g., by clicking a link in `/f1` that points to `/f3`), Next.js shows the intercepted content (like a modal) and updates the URL.
- If you reload the page or visit the intercepted route directly, Next.js shows the default content for that route, not the intercepted overlay.
- This is because intercepted routes are only active during client-side navigation, not on full page reloads or direct URL access.

---

## Why Does This Happen?

- Intercepted routes rely on the current navigation context. On reload, the context is lost, so Next.js falls back to the default route content.
- This behavior is by design, allowing overlays and modals to be shown only when appropriate, without breaking deep linking or direct access to the main content.

---

## Summary Table

| Folder      | Example Intercepted Route | What Happens?                                |
| ----------- | ------------------------- | -------------------------------------------- |
| f1          | (..)f3/                   | Shows f3 content as overlay from f1          |
| f1          | (.)f2/                    | Shows f2 content as overlay from f1          |
| f1/f2       | (..)f4/                   | Shows f4 content as overlay from f1/f2       |
| f2/inner-f2 | (...)f5/                  | Shows f5 content as overlay from f2/inner-f2 |
| f3, f4, f5  | -                         | Can be intercepted by other folders          |

---

## Key Takeaways

- Intercepted routes are great for overlays and modals.
- The URL changes, but the main page context is preserved until reload.
- On reload or direct access, you see the default content of the route.
- Use intercepted routes for better user experience without breaking navigation.

---

If you want to see intercepted routes in action, try navigating between the f1–f5 routes using links, and then reload the page to observe the difference.
