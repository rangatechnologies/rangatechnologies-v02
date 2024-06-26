"use client";
import ReviewCard from "./ReviewCard";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const tempReviews = [
  {
    _id: 1,
    name: "Jane Cooper",
    natinality: "Iceland",
    // stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/crazy-man-funny-expression_1194-3132.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
  {
    _id: 2,
    name: "Marvin McKinney",
    natinality: "Iran (Islamic Republic of)",
    // stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
  {
    _id: 3,
    name: "Floyd Miles",
    natinality: "Guinea",
    // stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-bearded-man-black-shirt-looking-aside-confused_141793-28314.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
  {
    _id: 4,
    name: "Marvin McKinney",
    natinality: "Iran (Islamic Republic of)",
    // stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
  {
    _id: 5,
    name: "Marvin McKinney",
    natinality: "Iran (Islamic Republic of)",
    // stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
];

const Review = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  const star: any = Array.from({ length: 5 }, (_, index) => {
    return (
      <Image
        key={index}
        src="/assets/images/Star.png"
        alt="star"
        width={18}
        height={18}
      />
    );
  });

  return (
    <>
      <div className="relative  mx-auto max-w-[1130px] px-5 pt-10 text-white md:px-10 ">
        <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
          Description of the Image
        </h2>
        <p className="text-left text-[22px] font-light text-white sm:text-[32px]">
          What Our Clients Say
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="z-40 w-full grid-cols-3">
            {tempReviews.map((review) => (
              <CarouselItem
                key={review._id}
                className="z-50 pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard {...review} stars={star} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative flex h-12 items-center justify-center">
            <CarouselPrevious className="absolute left-[46%] border-white bg-[#332E32] text-white hover:bg-none" />
            <CarouselNext className="absolute right-[46%] border-white bg-[#332E32] text-white" />
          </div>
        </Carousel>
        <div className="absolute right-0 top-0 z-0 hidden size-52 rounded-bl-full bg-[#3969D0] opacity-15 blur-3xl md:flex" />
        <div className="absolute right-0 top-10 z-0 hidden h-60 w-[800px] rotate-45 bg-[#D243FA] opacity-20 blur-3xl sm:flex" />
        <div className="absolute bottom-0 right-0 z-0 hidden size-80 rounded-l-full bg-[#3969D0] opacity-20 blur-3xl md:flex" />
      </div>
    </>
  );
};

export default Review;
