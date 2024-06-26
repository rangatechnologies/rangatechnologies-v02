import React from "react";
import HotBlogId from "./HotBlogId";

const HotBlogs = ({ hotBlogs }: any) => {
  const hotBlogsData = hotBlogs?.data?.data;

  return (
    <div className="mx-auto grid max-w-[1150px] gap-5 lg:grid-cols-2">
      {hotBlogsData?.map((item: any) => (
        <HotBlogId key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HotBlogs;
