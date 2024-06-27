"use client";
import { formSchema } from "@/lib/Validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <div className="mx-auto mt-10 max-w-7xl px-5 pb-10 sm:pb-3 md:px-10">
        <h2 className="text-[48px] font-medium text-white">Contact us! </h2>
        <div className="mx-auto mt-10 flex items-center justify-between gap-5">
          <div className="flex w-full ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-xl space-y-2"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Name"
                          {...field}
                          className="bg-black outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Email..."
                          type="email"
                          {...field}
                          className="bg-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Description <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter the Project Details"
                          {...field}
                          className="bg-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="!mt-10 h-9 rounded-full bg-[#5663FA] hover:bg-[#D243FA] active:bg-[#B529DC]"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>

          <Image
            src="/assets/images/formImg.png"
            alt="hero"
            width={527}
            height={416}
            className="mx-auto hidden h-[416px] w-[527px] items-center justify-center sm:flex"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
