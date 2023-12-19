"use client";

import SignupAccountTypeLayout from "@/layouts/signup.accountype";
import SignupUploadForm from "@/layouts/signup.hospitaluploadform";
import SignupResearchCenterFormLayout from "@/layouts/signup.researchcenterform";
import React, { useState, useEffect } from "react";
export default function SignUp() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [hospital, setHospital] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSetStep = (value: number) => {
    console.log(step);
    setStep(value);
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div
      id="LoginPageRoot"
      className="bg-white flex flex-col w-full items-start"
    >
      <div
        id="HeaderNav"
        className="bg-white flex flex-col justify-end gap-4 w-full h-20 items-start"
      >
        <img src="logo.svg" alt="Logo" id="Logo" className="ml-[702px] w-8" />
        <div
          id="Divider"
          className="bg-[rgba(102,_102,_102,_0.25)] w-full h-px"
        />
      </div>
      <div
        id="JoinUs1"
        className="bg-[#f5f5f5] flex flex-col gap-12 w-full h-[1483px] font-['Poppins'] items-start pl-[355px] py-12"
      >
        <div className="flex flex-col ml-32 gap-px w-1/2 items-start">
          <div className="text-center text-4xl font-medium leading-[68px] text-[#111111] ml-[177px]">
            Join us
          </div>
          <div className="text-center text-lg text-[#666666] w-full">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </div>
        </div>
        <div className="flex flex-col ml-8 gap-2 w-2/3 font-['Abhaya_Libre_Medium'] items-start">
          <div className="flex flex-row ml-12 gap-8 w-5/6 items-start">
            <div
              id="BG"
              className="text-center text-xs text-white bg-reddot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-5 items-start pt-px px-2"
            >
              1
            </div>
            <div className="flex flex-row justify-between w-full items-start">
              <div className="opacity-35 bg-[#333333] w-2/5 h-px" />
              <div
                id="BG1"
                className="text-center text-xs text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-5 items-start pt-px px-2"
              >
                2
              </div>
              <div className="flex flex-row gap-3 w-1/2 font-['Abhaya_Libre_Medium'] items-start">
                <div className="opacity-35 bg-[#333333] w-5/6 h-px" />
                <div
                  id="BG2"
                  className="text-center text-xs text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-5 items-start pt-px px-2"
                >
                  3
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-20 w-full font-['Poppins'] items-start">
            <div
              id="EnterYourEmailAdress"
              className="text-center font-light text-[#333333] pr-32"
            >
              Account Type
            </div>
            <div className="text-center font-light text-[#333333] pl-20 ">
              Upload Form
            </div>
            <div className="text-center space-x-15 font-light text-[#333333] pl-40">
              Login info
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-12 gap-8 w-3/5 font-['Poppins'] items-start">
          {step !== 1 && (
            <div
              className="bg-white flex flex-row gap-3 w-full h-20 items-start pt-6 px-6 rounded-[24px]"
              onClick={() => handleSetStep(1)}
            >
              <div
                id="BG4"
                className="text-center text-xs font-['Abhaya_Libre_Medium'] text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mt-1 w-6 h-6 items-start pt-1 px-2"
              >
                1
              </div>
              <div className="text-center text-2xl text-[#333333]">
                Account Type
              </div>
            </div>
          )}
          <div className="flex flex-col ml-px gap-6 w-full items-start">
            {/* The place for the account layout position */}
            <SignupAccountTypeLayout
              onNext={nextStep}
              accountType={accountType}
              setAccountType={setAccountType}
              location={location}
              setLocation={setLocation}
              style={{ display: step === 1 ? "block" : "none" }}
            />
            <SignupUploadForm
              onNext={nextStep}
              name={name}
              setName={setName}
              hospital={hospital}
              setHospital={setHospital}
              email={email}
              setEmail={setEmail}
              address={address}
              setAddress={setAddress}
              style={{
                display:
                  step === 2 && accountType === "hospital" ? "block" : "none",
              }}
            />
            <SignupResearchCenterFormLayout
              onNext={nextStep}
              style={{
                display:
                  step === 2 && accountType === "research" ? "block" : "none",
              }}
            />

            {step !== 2 && (
              <div
                className="bg-white flex flex-row gap-3 w-full h-20 items-start pt-6 px-6 rounded-[24px]"
                onClick={() => handleSetStep(2)}
              >
                <div
                  id="BG4"
                  className="text-center text-xs font-['Abhaya_Libre_Medium'] text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mt-1 w-6 h-6 items-start pt-1 px-2"
                >
                  2
                </div>
                <div className="text-center text-2xl text-[#333333]">
                  Upload Form
                </div>
              </div>
            )}
          </div>
          <div className="bg-white flex flex-row gap-3 w-full h-20 items-start pt-6 px-6 rounded-[24px]">
            <div
              id="BG5"
              className="text-center text-xs font-['Abhaya_Libre_Medium'] text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mt-1 w-6 h-6 items-start pt-1 px-2"
            >
              3
            </div>
            <div className="text-center text-2xl text-[#333333]">
              Login info {accountType} {step}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
