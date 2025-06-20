import React from "react";
import { wonders } from "../wonders";
import Image from "next/image";

const PhotoFeedDetails = async ({ params }) => {
  // params is a Promise, so we need to await it
  const { id } = await params;
  const matchImage = wonders.find((wonder) => wonder.id === parseInt(id));
  return (
    <div className="container mx-auto text-center my-8">
      <h3>Photo feed details</h3>
      <div className="flex flex-col items-center">
        <h4>
          {matchImage.location} - {matchImage.name}
        </h4>
        <Image
          alt={matchImage.name}
          src={matchImage.src}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default PhotoFeedDetails;
