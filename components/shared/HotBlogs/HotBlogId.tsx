import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export const revalidate = 0;

const HotBlogId = ({ item }: any) => {
  const { id, attributes } = item;
  const { title, description } = attributes;
  const imageData = attributes.image.data.attributes.formats;
  const imageUrl = imageData?.small?.url;

  return (
    <>
      <Link
        href={`/hotblog/${id}`}
        className="z-10 mx-auto my-4 max-w-[550px] rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5"
      >
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
            alt=""
            width={550}
            height={410}
            className="max-h-[410px] overflow-hidden rounded-t-xl object-fill"
          />
        </div>
        <div className="rounded-b-xl bg-[#020000] p-5 px-12">
          <p className="line-clamp-1 text-[18px] font-bold text-[#40E9FD]">
            {title}
          </p>
          <p className="line-clamp-2 pt-3 text-[12px] font-normal text-white">
            <ReactMarkdown>{description}</ReactMarkdown>
          </p>
        </div>
      </Link>
    </>
  );
};

export default HotBlogId;
