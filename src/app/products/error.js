"use client";

const { useRouter } = require("next/navigation");
const { startTransition } = require("react");

const ErrorBoundary = ({ error, reset }) => {
  const router = useRouter();

  const reloadPage = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <p>{error.message}</p>
      <button
        type="button"
        // onClick={() => reset()}
        onClick={reloadPage}
        className="bg-blue-500 text-white p-1 rounded m-2 cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;

// Error boundaries are client components in Next.js, so they can only be used in client components.
// They are used to catch errors in the component tree and display a fallback UI instead of crashing.
//Error boundary acts as a fallback UI when an error occurs in the page.jsx file.

// ===============================================

// reset() is a function provided by the error boundary that can be called to reset the error state and try rendering the component again. This is useful for retrying operations that may have failed due to transient issues, like network errors or temporary unavailability of data.

// with just reset() and trying again, it will attempt to re-render on the client side.
// we have convert to server side rendering. to use we need useRouter and startTransition from next/navigation.

// ===============================================

// startTransition is used to mark a state update as non-urgent, allowing React to prioritize more important updates first. This is useful for keeping the UI responsive during large updates or when fetching data.

// useRouter is a hook from Next.js that provides access to the router object, allowing navigation and other routing-related operations in client components.
// In this case, it is used to refresh the page when the user clicks the "Try again" button, effectively reloading the component and attempting to recover from the error.
