// "use client";

import Link from "next/link";
import { use } from "react";
import NewArticle from "./new";

const PageArticle = ({ params, searchParams }) => {
  //   const { articleId } = await params;
  //   const { lang } = await searchParams;

  const { articleId } = use(params);
  const { lang } = use(searchParams);

  return (
    <div>
      <h4 className="mx-2 my-2 font-bold">Read in language: {lang}</h4>
      <Link href={`/articles/${articleId}?lang=en`} className="mx-3">
        English
      </Link>{" "}
      <Link href={`/articles/${articleId}?lang=fr`} className="mx-3">
        French
      </Link>{" "}
      <Link href={`/articles/${articleId}?lang=es`}> Spanish</Link>
      {/* <NewArticle /> */}
    </div>
  );
};

export default PageArticle;

// since params, search params are promises we are using server side components with async/await.
// if you want to use as client side component, you can use "use" hook
// params and searchParams are only available in page.js
