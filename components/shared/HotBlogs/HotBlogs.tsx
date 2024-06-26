import React from "react";
import HotBlogId from "./HotBlogId";

const HotBlogs = ({ hotBlogs }: any) => {
  const hotBlogsData = hotBlogs?.data?.data;

  return (
    <div className="mx-auto flex max-w-[1150px] flex-wrap gap-5">
      {hotBlogsData?.map((item: any) => (
        <HotBlogId key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HotBlogs;
