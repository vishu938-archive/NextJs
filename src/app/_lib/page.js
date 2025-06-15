
const PrivateRoute = () => {
  return (
    <div>
        <h3>This is for internal stuff. YOU can&apos;t view this via route in UI.</h3>
    </div>
  )
}

export default PrivateRoute

/*
  In Next.js, folders or files prefixed with an underscore (_) like "_lib" are not treated as routes.
  This means you can't access them directly via the browser URL.
  These folders are typically used to store internal utilities, components, or logic that should not be exposed as pages.
  It's a way to organize code that is meant for internal use only, keeping your routes clean and secure.
*/