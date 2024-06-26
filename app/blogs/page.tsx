import BlogsItem from "@/components/shared/blogs/BlogsItem";
import TrandingSlides from "@/components/shared/blogs/TrandingSlides";
import { fetchBlogs, getHotBlogs } from "@/lib/backend";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Premier Blockchain Solutions. Cutting-Edge Blockchain Technology. Secure. Scalable. Revolutionary.",
};

export const revalidate = 0;

const Blogs = async () => {
  const blogData = await fetchBlogs();
  const hotBlogs = await getHotBlogs();
  

  return (
    <div className="mx-auto max-w-[1150px] bg-[#020000] px-5">
      <div className="">
        <BlogsItem blogs={blogData} hotBlogs={hotBlogs} />
      </div>
      <TrandingSlides />
    </div>
  );
};

export default Blogs;
