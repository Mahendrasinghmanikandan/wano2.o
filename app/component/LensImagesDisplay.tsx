/* eslint-disable @next/next/no-img-element */
import { Lens } from "@/components/ui/lens";
import React from "react";

const LensImagesDisplay = ({
  img,
  height,
}: {
  img: string;
  height: string;
}) => {
  return (
    <>
      <Lens
        zoomFactor={2}
        lensSize={150}
        isStatic={false}
        ariaLabel="Zoom Area"
      >
        <img
          src={img}
          alt="image placeholder"
          className={`w-full h-[${height}] object-cover rounded-2xl`}
        />
      </Lens>
    </>
  );
};

export default LensImagesDisplay;
