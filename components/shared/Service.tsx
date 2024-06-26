import React from "react";
import { fetchServiceBlogs, TrendingBlogs } from "@/lib/backend";
import BlogCards from "./BlogCards";
import Link from "next/link";

const Service = async () => {
  const serviceData = await fetchServiceBlogs();
  const services = serviceData?.data?.data;

  const serviceResult = services.filter(
    (item: any) => item.attributes.service === true
  );

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-10">
        <div>
          <h2 className="font-poppins text-[30px] font-medium text-white sm:text-[48px]">
            Expert Services for Your Existing Token
          </h2>
        </div>
        <div className="mt-10 grid gap-x-7 sm:grid-cols-2 md:grid-cols-3">
          {serviceResult.length > 0 ? (
            serviceResult
              ?.slice(0, 3)
              ?.map((item: any) => <BlogCards key={item.id} item={item} />)
          ) : (
            <div className="col-span-4 flex h-[40vh] flex-col items-center justify-center">
              <h4 className="text-center text-3xl text-white">
                no service data found
              </h4>
            </div>
          )}
        </div>
        <Link href="/blogs" className="text-[16px] font-medium text-[#5663FA]">
          View More
        </Link>
      </div>
    </>
  );
};

export default Service;
