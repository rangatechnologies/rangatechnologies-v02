import Loading from "@/app/loading";
import TrandingSlides from "@/components/shared/blogs/TrandingSlides";
import { fetchBlogsById } from "@/lib/backend";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

const SingleBlog = async ({ params }: any) => {
  const results: any = await fetchBlogsById({ id: params.id });
  const { attributes } = results.data.data;

  const { Title, Description } = attributes;
  const imageData = attributes.Image.data.attributes.formats;
  const imageUrl = imageData?.small?.url;

  if (!attributes || !imageUrl) {
    return <Loading />;
  }

  return (
    <div className="mx-auto max-w-[1150px] gap-10 bg-[#020000] px-5 pb-5">
      <div className="mt-5 rounded-3xl outline outline-1 outline-[#40E9FD]">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
          alt={`${Title}`}
          width={1700}
          height={700}
          className="max-h-[700px] rounded-t-3xl bg-center object-cover"
        />
        <div className="p-6">
          <h2 className="h-full pb-8 font-medium  text-[#40E9FD] sm:text-[30px]">
            {Title}
          </h2>
          <div className="max-h-full overflow-auto text-[18px] font-normal text-white">
            <ReactMarkdown className="prose max-w-full text-white">
              {Description}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <TrandingSlides />
    </div>
  );
};

export default SingleBlog;
