import React from "react";
import Image from "next/image";
import ModalPopUp from "./ModalPopUp";

const Hero = () => {
  return (
    <>
      <div className="mx-auto mb-3 flex max-h-[571px] max-w-[1130px] items-center justify-between gap-10 px-5 pt-10 md:px-10">
        <div className="flex w-full max-w-[484px] flex-col gap-5 sm:items-start">
          <h1 className="text-left text-[68px] font-semibold leading-tight text-white sm:leading-[80px]">
            Premier
            <span className="block bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-transparent sm:flex">
              Blockchain
            </span>
            <span className="block bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="w-[484px] text-left text-[22px] font-medium text-white sm:p-0">
            Cutting-Edge Blockchain Technology. <br /> Secure. Scalable.
            Revolutionary.
          </p>
          <ModalPopUp />
        </div>
        <Image
          src="/assets/images/heroimg.png"
          alt="hero"
          width={700}
          height={700}
          className="hidden w-full items-start !justify-start sm:h-[590px] sm:max-w-[590px] md:flex"
        />
      </div>
      <Image
        src="/assets/vectors/vector-1.png"
        alt="hero"
        width={600}
        height={600}
        className="absolute right-0 top-0 hidden size-[270px] md:flex"
      />
    </>
  );
};

export default Hero;
