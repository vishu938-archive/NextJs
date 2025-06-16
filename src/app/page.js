import Link from "next/link";

const WelcomePage = () => {
  return (
    <div>
      Welcome to Home!{" "}
      <Link href={"/articles/breaking-news?lang=en"} className="mx-3">
        Read in Engish
      </Link>
      <Link href={"/articles/breaking-news?lang=fr"} className="mx-3">
        Read in French
      </Link>
    </div>
  );
};

export default WelcomePage;
