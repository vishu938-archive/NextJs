import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
              width={300}
              height={300}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

// In Next.js, for images to be accessible via a public URL (like /photo-feed/photos/1.jpg), they must be placed inside the public directory at the root of your project, not inside photos.