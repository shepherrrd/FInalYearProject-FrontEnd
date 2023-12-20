import SignInForm from "@/layouts/signin/signin.siginform";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function SignIn() {
  return (
    <>
      <div
        id="SignInRoot"
        className="bg-white flex flex-col justify-end pt-20 gap-20 w-full font-['Poppins'] items-start"
      >
        <div className="flex flex-col justify-between ml-[400px] gap-8 w-2/5 items-start">
          <img
            src="https://file.rendit.io/n/8kOf8BEHwKoHju0ZZbvi.svg"
            alt="Logo"
            id="Logo"
            className="ml-[302px] w-8"
          />
          <SignInForm></SignInForm>
          <div className="flex flex-row justify-between w-full items-start">
            <div className="text-right underline text-[#111111]">
              Other issue with sign in
            </div>
            <div className="text-right underline text-[#111111]">
              Forget your password
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full font-['Actor'] items-start">
          <div
            id="Divider"
            className="bg-[rgba(102,_102,_102,_0.25)] mt-3 w-1/3 h-px"
          />
          <div id="OR" className="text-xl text-[#666666]">
            New to Anahit
          </div>
          <div
            id="Divider1"
            className="bg-[rgba(102,_102,_102,_0.25)] mt-3 w-1/3 h-px"
          />
        </div>
        <button
          id="Button2"
          className="text-center text-xl text-[#111111] border-solid border-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start border rounded-[40px]"
        >
          Create an account
        </button>
      </div>
      <div
        id="Footer"
        className="bg-white flex flex-col gap-4 w-full h-12 items-start"
      >
        <div
          id="DividerTop"
          className="bg-[rgba(102,_102,_102,_0.25)] w-full h-px"
        />
        <div className="flex flex-row justify-between ml-[468px] w-1/3 font-['Poppins'] items-start">
          <div className="text-sm text-[#666666]">Help Center</div>
          <div className="text-sm text-[#666666]">Terms of Service</div>
          <div className="text-sm text-[#666666]">Privacy Policy</div>
          <div id="Yanliudesign" className="text-sm text-[#666666]">
            @2022Anahit
          </div>
        </div>
      </div>
    </>
  );
}
