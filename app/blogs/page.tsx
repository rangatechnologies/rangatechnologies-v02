import BlogsItem from "@/components/shared/blogs/BlogsItem";
import { fetchBlogs } from "@/lib/backend";
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

  return (
    <div className="bg-[#020000]">
      <BlogsItem blogs={blogData} />
    </div>
  );
};

export default Blogs;
