import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SocialIcon } from "react-social-icons";

const ModalPopUp = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="z-40 rounded-full bg-gradient-to-r from-[#D243FA] to-[#542CB1] p-3 px-10 font-bold text-white hover:bg-gradient-to-l">
        Contact Us
      </AlertDialogTrigger>
      <AlertDialogContent className="border-purple-500 bg-black">
        <div className="flex items-center justify-around gap-3">
          <SocialIcon url="https://twitter.com" fgColor="" />
          <SocialIcon url="https://whatsapp.com" />
          <SocialIcon url="https://instagram.com" />
          <SocialIcon url="https://linkedin.com" />
          <SocialIcon url="https://youtube.com" />
          <SocialIcon url="https://facebook.com" />
        </div>

        <AlertDialogFooter className="mt-8">
          <AlertDialogCancel className="border-none bg-purple-500 font-bold text-black hover:bg-purple-600 hover:text-black">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalPopUp;
