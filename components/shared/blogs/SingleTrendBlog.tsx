import React from "react";
import { TrendingBlogs } from "@/lib/backend";
import BlogCards from "../BlogCards";

const SingleTrendBlog = async () => {
  const result = await TrendingBlogs(`blogs?pagination[limit]=4&populate=*`);
  const product = result?.data?.data;

  return (
    <>
      <div className="relative mx-auto max-w-7xl px-5 pt-20 md:px-10">
        <div>
          <h2 className="text-[30px] font-medium text-white sm:text-[38px]">
            Trending topics this week
          </h2>
        </div>
        <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product?.map((item: any) => <BlogCards key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default SingleTrendBlog;
