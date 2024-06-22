import React from "react";
import { TrendingBlogs } from "@/lib/backend";
import Link from "next/link";
import BlogCards from "./BlogCards";

const TrendBlog = async () => {
  const result = await TrendingBlogs(`blogs?&populate=*`);

  const product = result?.data?.data;

  const TrendingResult = product.filter(
    (item: any) => item.attributes.Trending === true
  );
  
  return (
    <>
      <div className="relative z-20 mx-auto max-w-7xl px-5 pt-20 md:px-10">
        <div>
          <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
            Unlock Investment Opportunities
          </h2>
          <p className="text-left text-[22px] font-light text-white sm:text-[32px]">
            In Cutting-Edge Solutions
          </p>
        </div>
        <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TrendingResult.length > 0 ? (
            TrendingResult?.slice(0, 4)?.map((item: any) => (
              <BlogCards key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-4 flex flex-col items-center justify-center">
              <h4 className="text-center text-3xl text-white">
                no Trending data found
              </h4>
            </div>
          )}
        </div>
        {TrendingResult.length > 0 && (
          <Link
            href="/blogs"
            className="text-[16px] font-medium text-[#40E9FD]"
          >
            View More
          </Link>
        )}
      </div>
    </>
  );
};

export default TrendBlog;
