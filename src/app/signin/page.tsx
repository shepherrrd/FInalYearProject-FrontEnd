"use client";
import { handleLogin } from "@/services/auth.handler";
import { LoginRequest } from "@/types/auth.types";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";

import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [iconSrc, setIconSrc] = useState("/eyepassword.svg");
  const [passwordvisibletext, SetPasswordVisibleText] = useState("Show");
  const [isLoading, setIsLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setIconSrc(isPasswordVisible ? "/eyeopen.svg" : "/eyepassword.svg");
    SetPasswordVisibleText(isPasswordVisible ? "Show" : "Hide");
  };

  const HandleSetEmail = (email: string) => {
    setEmail(email);
  };
  const HandleSubmit = async () => {
    var request: LoginRequest = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    try {
      const login = await handleLogin(request);
      if (login.status) {
        toast.success("Login successful");
        console.log(login);
      } else {
        toast.error(login.message);
        console.log(login);
      }
    } catch (error) {
      toast.error("An Error Occured");
    } finally {
      setIsLoading(false);
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
                      onChange={(e) => HandleSetEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full font-['Poppins'] items-start">
                    <button
                      id="Button1"
                      className={`text-center text-xl font-medium text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[40px] ${
                        email && password ? "opacity-100" : "opacity-25"
                      } ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                      onClick={HandleSubmit}
                      disabled={!email || !password}
                    >
                      {isLoading ? <div className="spinner"></div> : "Finish"}
                    </button>
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
