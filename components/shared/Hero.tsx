import React from "react";
import Image from "next/image";
import ModalPopUp from "./ModalPopUp";

const Hero = () => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-5 pt-10 md:px-10">
        <div className="flex w-full flex-col gap-5 sm:items-start">
          <h1 className="text-left text-[68px] font-bold leading-tight text-white sm:leading-[80px]">
            Premier
            <span className="block bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-transparent sm:flex">
              Blockchain
            </span>
            <span className="block bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-left text-[22px] text-white sm:p-0">
            Cutting-Edge Blockchain Technology. <br /> Secure. Scalable.
            Revolutionary.
          </p>
          <ModalPopUp />
        </div>
        <Image
          src="/assets/images/heroimg.png"
          alt="hero"
          width={800}
          height={800}
          className="hidden w-full items-start !justify-start sm:mr-20 sm:h-[500px] sm:max-w-[500px] md:flex"
        />
      </div>
      <div className="absolute right-0 top-0 hidden size-52 rounded-bl-full bg-[#3969D0] blur-3xl md:flex" />
    </>
  );
};

export default Hero;
