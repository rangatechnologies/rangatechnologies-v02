import SingleTrendBlog from "@/components/shared/blogs/SingleTrendBlog";
import { fetchBlogsById } from "@/lib/backend";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

export const revalidate = 0;

const SingleBlog = async ({ params }: any) => {
  const results: any = await fetchBlogsById({ id: params.id });
  const { attributes } = results.data.data;

  const { Title, Description } = attributes;
  const imageData = attributes.Image.data.attributes.formats;
  const imageUrl = imageData?.small?.url;

  return (
    <div className=" h-full bg-[#020000] px-10">
      <div className="mx-auto mt-5 max-w-7xl rounded-3xl outline outline-1 outline-[#40E9FD]">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
          alt={`${Title}`}
          width={1700}
          height={700}
          className="max-h-[700px] rounded-t-3xl bg-center object-cover"
        />
        <div className="p-6">
          <h2 className="pb-8 font-medium  text-[#40E9FD] sm:text-[30px]">
            {Title}
          </h2>
          <p className="max-h-[800px] overflow-auto text-[18px] font-normal text-white">
            <ReactMarkdown>{Description}</ReactMarkdown>
          </p>
        </div>
      </div>

      <SingleTrendBlog />
    </div>
  );
};

export default SingleBlog;
