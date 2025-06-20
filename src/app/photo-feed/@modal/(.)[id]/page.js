import React from "react";
import { wonders } from "../../wonders";
import Image from "next/image";
import Modal from "@/components/modal";

const PhotoFeedModal = async ({ params }) => {
  // params is a Promise, so we need to await it
  const { id } = await params;
  const matchImage = wonders.find((wonder) => wonder.id === parseInt(id));
  return (
    <Modal>
      <>
        <h3 className="text-white font-bold flex justify-center items-center">
          Photo feed details
        </h3>
        <div className="flex flex-col items-center">
          <Image
            alt={matchImage.name}
            src={matchImage.src}
            width={300}
            height={300}
          />
          <h4 className="text-white font-bold flex justify-center items-center">
            {matchImage.location} - {matchImage.name}
          </h4>
        </div>
      </>
    </Modal>
  );
};

export default PhotoFeedModal;
