import React from "react";

const PhotoFeedLayout = ({ modal, children }) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default PhotoFeedLayout;

// This layout component is designed to wrap the photo feed pages.
// It can be used to include a modal or any other common elements across the photo feed pages.
// The `modal` prop can be used to pass a modal component that will be displayed on top of the photo feed content.
// The `children` prop will render the specific content of each photo feed page.


