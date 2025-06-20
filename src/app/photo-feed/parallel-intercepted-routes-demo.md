# Notes on Parallel and Intercepted Routes in the `photo-feed` Folder

## Overview

The `photo-feed` folder demonstrates advanced Next.js routing concepts: **parallel routes** (using the `@modal` folder) and **intercepted routes** (using the `(.)[id]` folder inside `@modal`). This setup allows for modals to appear over the main feed, with seamless URL updates and user experience.

---

## Folder Structure Breakdown

- **`photo-feed/`**

  - Main photo feed page and layout.
  - Contains the grid of wonders and handles the overall structure.

- **`photo-feed/layout.js`**

  - Receives `modal` and `children` props.
  - `modal` is injected by Next.js when a parallel route (like `@modal`) is active.
  - Renders both the main content and any modal overlay.

- **`photo-feed/@modal/`**

  - A parallel route folder. Next.js injects its content into the `modal` prop of the layout.
  - Allows modals to be shown alongside the main feed without leaving the page.

- **`photo-feed/@modal/default.js`**

  - The default content for the modal slot. Returns `null` (nothing) when no modal is active.

- **`photo-feed/@modal/(.)[id]/page.js`**

  - An intercepted route. When you click a photo, this route intercepts navigation and shows a modal with photo details.
  - The URL changes (e.g., `/photo-feed/3`), but the feed remains visible in the background.
  - If you reload the page on `/photo-feed/3`, the modal disappears and the full page for that photo is shown instead.

- **`photo-feed/wonders.js`**
  - Contains the array of Seven Wonders data, including image paths, names, photographers, and locations.

---

## How It Works (User Flow)

1. **Viewing the Feed:**

   - You see a grid of wonders on `/photo-feed`.
   - No modal is open (`modal` is `null`).

2. **Clicking a Photo:**

   - The URL changes to `/photo-feed/3` (for example).
   - The intercepted route (`@modal/(.)[id]/page.js`) renders a modal with details for that wonder.
   - The feed stays visible in the background.

3. **Closing the Modal:**

   - The URL returns to `/photo-feed`.
   - The modal disappears.

4. **Reloading on a Modal URL:**
   - If you refresh on `/photo-feed/3`, the modal overlay is not shown.
   - Instead, the full page for that photo is loaded (not the overlay experience).

---

## Key Concepts

- **Parallel Routes:**

  - Allow multiple UI sections (like modals) to be rendered in parallel with the main content.
  - The `@modal` folder is a parallel route; its content is injected into the `modal` prop of the layout.

- **Intercepted Routes:**

  - Allow you to intercept navigation and show overlays (like modals) without a full page transition.
  - Only works for client-side navigation. On reload, the default route content is shown.

- **Default Content:**
  - `@modal/default.js` ensures the modal slot is empty when no modal is active, preventing errors.

---

## Summary Table

| File/Folder              | Purpose                                                     |
| ------------------------ | ----------------------------------------------------------- |
| `layout.js`              | Wraps feed and modal, receives `modal` and `children` props |
| `@modal/`                | Parallel route for modal overlays                           |
| `@modal/default.js`      | Renders nothing when no modal is active                     |
| `@modal/(.)[id]/page.js` | Intercepts navigation to show modal for a specific photo    |
| `wonders.js`             | Data for the Seven Wonders                                  |

------------------------------

1. Parallel Routes (@modal)
User Experience:

As a user, you’re browsing the photo feed.
When you click on a photo, instead of navigating away from the feed, a modal pops up showing more details about the photo.
The URL changes (e.g., /photo-feed/3), but the feed stays visible in the background.
Behind the Scenes:

The @modal folder is a parallel route. Next.js automatically injects the modal prop into your PhotoFeedLayout.
If a modal route is active (e.g., /photo-feed/@modal/3), the corresponding modal component is rendered in the modal slot.
If no modal is active, default.js in @modal returns null, so nothing is shown in the modal slot.
The main feed content is always rendered via the children prop.
2. Intercepted Routes
User Experience:

When you click a photo, the modal appears and the URL updates.
If you refresh the page while the modal is open, the app loads the full page for that photo instead of the modal overlay.
Behind the Scenes:

Intercepted routes let you “intercept” navigation and show content (like a modal) over the current page, without a full page transition.
This only works for client-side navigation (clicks/links). On a full reload, Next.js loads the default page for that route, not the intercepted modal overlay.
This keeps the app fast and smooth for users, but also ensures direct links and reloads work as expected.
Flow Example
You visit /photo-feed:

The feed is shown (children prop).
No modal is open (modal prop is null).
You click a photo:

The URL changes to /photo-feed/3.
The modal for photo 3 is rendered in the modal slot.
The feed remains visible in the background.
You close the modal:

The URL returns to /photo-feed.
The modal disappears (modal is null).
You refresh on /photo-feed/3:

The app loads the full page for photo 3, not the modal overlay.
Summary:

Parallel routes (@modal) let you show modals or side panels alongside main content.
Intercepted routes let you overlay content on navigation, but revert to default on reload.

