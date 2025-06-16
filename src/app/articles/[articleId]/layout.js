// The 'articles' folder contains routes related to articles in the app.
//
// Difference between 'page.js' and 'layout.js':
/// - 'page.js': Defines the content for a specific route, such as '/articles/[articleId]'.
///   It is responsible for rendering the main content of the page.
/// - 'layout.js': Wraps the 'page.js' and provides a shared layout for all routes within the 'articles/[articleId]' folder.
///   It can include elements like headers, footers, or sidebars that are consistent across all article pages.

import Header from "./header";
import Footer from "./footer";

const ArticleLayout = async ({ params, children }) => {
  const { articleId } = await params;

  return (
    <>
      <Header />
      <div>
        <h3>Article Layout for Article ID: {articleId}</h3>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default ArticleLayout;
