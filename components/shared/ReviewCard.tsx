"use client";
import Image from "next/image";
import React from "react";

interface Props {
  _id: number;
  name: string;
  natinality: string;
  stars: string;
  review: string;
  img: string;
  audio: string;
}

const ReviewCard = ({
  _id,
  name,
  natinality,
  stars,
  review,
  img,
  audio,
}: Props) => {
  return (
    <div className="mx-auto my-4 ml-5 max-w-sm gap-5 rounded-xl border-2 border-solid border-fuchsia-400 bg-transparent  p-0.5">
      <div className="flex flex-col gap-5 rounded-lg p-5 ">
        <div className="flex gap-10 ">
          <Image
            src={img}
            alt={name}
            width={200}
            height={200}
            className="size-20 rounded-full object-cover outline outline-1 outline-red-500"
          />
          <div>
            <p className="text-white">{name}</p>
            <p className="line-clamp-1 font-[300] text-[#828182]">
              {natinality}
            </p>
            <div className="flex gap-1">{stars}</div>
          </div>
        </div>
        <div>
          <p className="text-white">{review}</p>
          <audio controls className="mt-5 ">
            <source src={audio} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
