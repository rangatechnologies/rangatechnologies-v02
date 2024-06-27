"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

// type SocialIconProps = {
//   src: string;
//   alt: string;
// };

// const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
//   <Image
//     src={src}
//     alt={alt}
//     width={20}
//     height={20}
//     className="my-auto aspect-square w-[25px] shrink-0 self-stretch"
//   />
// );

const NewsletterForm = () => {
  return (
    <form className="flex grow flex-col justify-end self-stretch text-lg leading-10 text-white max-md:mt-10 max-md:max-w-full">
      <label htmlFor="email" className="max-md:max-w-full">
        Sign up for our newsletter
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email address"
        className=" mt-2 justify-center border-b border-solid border-white bg-transparent text-stone-300 text-opacity-50 outline-none  max-md:max-w-full"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="mt-8 self-start whitespace-nowrap rounded-[32px] border border-solid border-white px-9 py-3 text-center text-base font-medium leading-6 max-md:px-5"
      >
        Subscribe
      </button>
    </form>
  );
};

const Footer = () => {
  //   const socialIcons = [
  //     {
  //       src: "/assets/social/linkedin.png",
  //       alt: "Social media icon 1",
  //     },
  //     {
  //       src: "/assets/social/whatsapp.png",
  //       alt: "Social media icon 2",
  //     },
  //     {
  //       src: "/assets/social/telegram.png",
  //       alt: "Social media icon 3",
  //     },
  //     {
  //       src: "/assets/social/facebook.png",
  //       alt: "Social media icon 4",
  //     },
  //     {
  //       src: "/assets/social/insta.png",
  //       alt: "Social media icon 5",
  //     },
  //     {
  //       src: "/assets/social/google.png",
  //       alt: "Social media icon 6",
  //     },
  //   ];

  const handleNewsletterSubmit = (email: string) => {
    console.log("Submitted email:", email);
  };

  return (
    <footer className="flex flex-col items-center self-stretch bg-[#1a1a1a]  px-16 pb-14 pt-12 max-md:px-5">
      <div className="w-full max-w-[1130px] justify-between px-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="flex grow flex-col justify-between max-md:mt-10">
              <h2 className="text-4xl font-medium leading-10 text-white">
                Ranga Technologies
              </h2>
              <h3 className="mt-12 text-2xl font-medium leading-8 text-indigo-500 max-md:mt-10">
                Let&lsquo;s Talk
              </h3>
              <div className="flex items-center justify-start gap-3">
                {/* <SocialIcon
                  url="https://twitter.com"
                  bgColor="none"
                  className="!size-8"
                /> */}
                <SocialIcon
                  url="https://linkedin.com"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://whatsapp.com"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://telegram.com"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://facebook.com"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://instagram.com"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://google.com"
                  bgColor="none"
                  className="!size-10"
                />
              </div>
            </div>
          </section>
          <section className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <NewsletterForm />
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
