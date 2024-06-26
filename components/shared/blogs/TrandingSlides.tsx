import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { TrendingBlogs } from "@/lib/backend";
import TrendBlogId from "./TrendBlogId";

const TrandingSlides = async () => {
  const result = await TrendingBlogs();
  const product = result?.data?.data;

  return (
    <>
      <div className="relative mx-auto max-w-[1150px] pt-20">
        <div>
          <h2 className="mb-6 text-[30px] font-medium text-white sm:text-[38px]">
            Trending topics this week
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="mx-auto flex max-w-[1150px] gap-5">
            {product?.map((item: any) => (
              <CarouselItem
                key={item.id}
                className="z-10 max-w-[330px] rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5"
              >
                <TrendBlogId key={item.id} item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=" relative mx-auto mt-10 flex max-w-3 items-center justify-center">
            <CarouselPrevious className="absolute  border-white bg-[#332E32] text-white hover:bg-none" />
            <CarouselNext className="absolute border-white bg-[#332E32] text-white" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default TrandingSlides;
