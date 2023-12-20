"use client";
import { handleLogin } from "@/services/auth.handler";
import { LoginRequest } from "@/types/auth.types";
import { isValidEmail } from "@/utilities/utils";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [iconSrc, setIconSrc] = useState("/eyepassword.svg");
  const [passwordvisibletext, SetPasswordVisibleText] = useState("Show");
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setIconSrc(isPasswordVisible ? "/eyeopen.svg" : "/eyepassword.svg");
    SetPasswordVisibleText(isPasswordVisible ? "Show" : "Hide");
  };
  const HandleSetEmail = (email: string) => {
    if (!isValidEmail(email)) {
      toast.error("Invalid email address");
    } else {
      setEmail(email);
    }
  };

  const HandleSubmit = async (request: LoginRequest) => {
    const login = await handleLogin(request);
    if (login) {
      toast.success("Login successful");
    } else {
      toast.error("Login failed");
    }
  };
  return (
    <>
      <ToastContainer />
      {
        <div
          id="SignInRoot"
          className="bg-white flex flex-col justify-end pt-20 gap-20 w-full font-['Poppins'] items-start"
        >
          <div className="flex flex-col justify-between ml-[400px] gap-8 w-2/5 items-start">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={36}
              height={36}
              id="Logo"
              className="ml-[302px] w-8"
            />
            <div
              id="SignIn1"
              className="border-solid border-[rgba(102,_102,_102,_0.5)] flex flex-col justify-center gap-12 w-full font-['Poppins'] items-start px-12 py-10 border rounded-[24px]"
            >
              <div className="flex flex-col gap-12 w-full items-start">
                <div className="text-center text-3xl font-medium text-[#333333] ml-[210px]">
                  Sign in
                </div>
                <div className="flex flex-col justify-between gap-6 w-full items-start">
                  <div className="flex flex-col gap-2 w-full items-start">
                    <div id="Label" className="text-[#666666]">
                      Email
                    </div>
                    <input
                      type="email"
                      id="TextField"
                      onBlur={(e) => setEmail(e.target.value)}
                      className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full items-start">
                    <div className="flex flex-row justify-between w-full items-start">
                      <div id="Label1" className="text-[#666666]">
                        Your password
                      </div>
                      <div className="flex flex-row gap-3 w-16 items-start">
                        <Image
                          src={iconSrc}
                          alt="Group1"
                          width={36}
                          height={36}
                          className="mt-2 w-5"
                          onClick={togglePasswordVisibility}
                        />
                        <div
                          className="text-right text-lg text-[rgba(102,_102,_102,_0.8)]"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordvisibletext}
                        </div>
                      </div>
                    </div>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="TextField1"
                      onBlur={(e) => setPassword(e.target.value)}
                      className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full font-['Poppins'] items-start">
                    <button
                      id="Button1"
                      disabled={!password || !email}
                      className={`text-center opacity-25 text-xl font-medium text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[40px]"${
                        password && email
                          ? "opacity-100 text-red-900"
                          : "opacity-25 border-[rgba(102,102,102,0.35)]"
                      }`}
                    >
                      Log in
                    </button>
                    <div className="text-[#333333]  font-['Poppins'] w-full">
                      By continuing, you agree to the{" "}
                      <text className="underline text-[#111111] ">
                        Terms of use
                      </text>
                      <text className="text-[#666666]"> </text>
                      <div>and</div>
                      <span className="text-[#666666]"> </span>
                      <span className="underline text-[#111111]">
                        Privacy Policy.
                      </span>
                      <span className=" text-[#666666]"> </span>
                    </div>
                  </div>
                </div>
              </div>
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
              onClick={() => router.push("/signup", { scroll: false })}
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
        </div>
      }
    </>
  );
}
