"use client";
import React, { useState } from "react";
import BlogCards from "../BlogCards";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HotBlogs from "../HotBlogs/HotBlogs";

const BlogsItem = ({ blogs, hotBlogs }: any) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [moreBlogs, setMoreBlogs] = useState(6);

  const categories = [
    "All",
    "Tech",
    "AI",
    "Block Chain",
    "Crypto",
    "Future",
    "Mining",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? blogs
      : blogs.filter(
          (article: any) => article.attributes.Types === selectedCategory
        );

  return (
    <div className="mx-auto max-w-[1150px] px-5 md:px-10">
      <div className="flex flex-wrap justify-between gap-4 space-x-4 py-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer rounded-full border bg-transparent px-8 py-2  text-white ${selectedCategory === category ? "bg-white !text-black" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        <HotBlogs hotBlogs={hotBlogs} />
      </div>
      <div className="grid flex-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 ">
        {filteredArticles.length > 0 ? (
          filteredArticles
            ?.slice(0, moreBlogs)
            .map((item: any) => <BlogCards key={item.id} item={item} />)
        ) : (
          <div className="col-span-4 flex h-[40vh] flex-col items-center justify-center">
            <h4 className="text-center text-3xl text-white">No data found</h4>
            <p className="text-center text-white">
              Please select another category
            </p>
            <Link
              href="/"
              className="mt-2 rounded-full bg-blue-500 p-1 px-2 text-center text-white"
            >
              Back Home
            </Link>
          </div>
        )}
      </div>
      <div className="mt-10 flex justify-center">
        {filteredArticles.length > 6 && (
          <Button
            onClick={() => setMoreBlogs(moreBlogs + 6)}
            className="bg-blue-600 p-2 hover:bg-blue-500"
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlogsItem;
