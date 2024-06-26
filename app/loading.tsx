import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="mx-auto mt-40 flex w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-center  text-[50px] font-extrabold text-transparent sm:text-[80px]">
          Rangha Tecnologies
        </h2>
        <Image
          src="/assets/images/spinner1.png"
          alt="loading"
          width={300}
          height={300}
          className="animate-spin"
        />
      </div>
    </div>
  );
};

export default Loading;
