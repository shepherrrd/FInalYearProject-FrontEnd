"use client";

import SignupAccountTypeLayout from "@/layouts/signup/signup.accountype";
import SignupUploadForm from "@/layouts/signup/signup.hospitaluploadform";
import LoginInforFormLayout from "@/layouts/signup/signup.logininfo";
import SignupResearchCenterFormLayout from "@/layouts/signup/signup.researchcenterform";
import {
  submitResearchCenterSignupDetails,
  submitHospitalSignupDetails,
} from "@/services/signup.handler";
import {
  AccountType,
  FileData,
  HospitalSignupDetailsFormData,
  ResearchCenterSignupDetailsFormData,
} from "@/types/Signuptypes";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "@/utilities/localstorage";
import { time } from "console";
import { sleeps } from "@/utilities/utils";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<AccountType>(AccountType.None);
  const [location, setLocation] = useState("");
  const [Hospitalemail, setHospitalEmail] = useState("");
  const [title, setTitle] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [ResearchCenteremail, setResearchCenterEmail] = useState<string>("");
  const [hospitalName, setHospitalName] = useState("");
  const [websiteAddress, setWebsiteAddress] = useState("");
  const [NafdacDocument, setNafdacDocument] = useState<FileData>({
    file: null,
    fileName: "",
  });
  const [cacDocument, setCacDocument] = useState<FileData>({
    file: null,
    fileName: "",
  });
  const [passportPhoto, setPassportPhoto] = useState<FileData>({
    file: null,
    fileName: "",
  });
  const [degree, setDegree] = useState<FileData>({ file: null, fileName: "" });
  const [researchProposal, setResearchProposal] = useState<FileData>({
    file: null,
    fileName: "",
  });
  const [irbApproval, setIrbApproval] = useState<FileData>({
    file: null,
    fileName: "",
  });
  // useRouter

  const router = useRouter();

  const navigateToSignin = () => {
    sleeps(3);
    router.push("/signin", { scroll: false });
  };
  const [ResearchCenterSignupDetails, setResearchCenterSignupDetails] =
    useState<ResearchCenterSignupDetailsFormData>({
      accountType: AccountType.ResearchCenter,
      location: "",
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      institution: "",
      email: "",
      passportPhoto: { file: null, fileName: "" },
      degree: { file: null, fileName: "" },
      researchProposal: { file: null, fileName: "" },
      irbApproval: { file: null, fileName: "" },
      password: "",
      confirmPassword: "",
    });

  const [HospitalSignupDetails, setHospitalSignupDetails] =
    useState<HospitalSignupDetailsFormData>({
      accountType: AccountType.Hospital,
      location: "",
      hospitalName: "",
      hospitalEmail: "",
      websiteAddress: "",
      cacDocument: { file: null, fileName: "" },
      NafdacDocument: { file: null, fileName: "" },
      password: "",
      confirmPassword: "",
    });
  const handleSetStep = (value: number) => {
    console.log(step);
    setStep(value);
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const validpassword = (password: string) => {
    const hasMinimumLength = password.length >= 8;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasMinimumLength && hasLetters && hasNumbers && hasSymbols;
  };
  const HandleSubmit = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!validpassword(password)) {
      toast.error(
        "Password must be 8 characters long and contain at least one letter, one number and one special character"
      );
      return;
    }
    switch (accountType) {
      case AccountType.ResearchCenter:
        {
          setResearchCenterSignupDetails({
            accountType: accountType,
            location: location,
            title: title,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            institution: institution,
            email: ResearchCenteremail,
            passportPhoto: passportPhoto,
            degree: degree,
            researchProposal: researchProposal,
            irbApproval: irbApproval,
            password: password,
            confirmPassword: confirmPassword,
          });
          saveToLocalStorage(
            "ResearchCenterSignupDetails",
            ResearchCenterSignupDetails
          );
          toast.success("Signup Successful");
          var signup = await submitResearchCenterSignupDetails(
            ResearchCenterSignupDetails
          );
          if (signup.status) {
            toast.success(signup.message);
            navigateToSignin();
          } else {
            toast.error(signup.message);
          }
        }
        break;
      case AccountType.Hospital: {
        setHospitalSignupDetails({
          accountType: accountType,
          location: location,
          hospitalName: hospitalName,
          hospitalEmail: Hospitalemail,
          websiteAddress: websiteAddress,
          cacDocument: cacDocument,
          NafdacDocument: NafdacDocument,
          password: password,
          confirmPassword: confirmPassword,
        });
        saveToLocalStorage("HospitalSignupDetails", HospitalSignupDetails);
        const signup = await submitHospitalSignupDetails(HospitalSignupDetails);
        if (signup.status) {
          toast.success(signup.message);
          navigateToSignin();
        } else {
          toast.error(signup.message);
        }
      }
    }
  };
  return (
    <>
      <ToastContainer />
      {
        <div
          id="LoginPageRoot"
          className="bg-white flex flex-col w-full items-start"
        >
          <div
            id="HeaderNav"
            className="bg-white flex flex-col justify-end gap-4 w-full h-20 items-start"
          >
            <img
              src="logo.svg"
              alt="Logo"
              id="Logo"
              className="ml-[702px] w-8"
            />
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
              <div
                className="text-center text-lg text-[#666666] w-full"
                onClick={navigateToSignin}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
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
                  hospitalName={hospitalName}
                  setHospitalName={setHospitalName}
                  setHospitalEmail={setHospitalEmail}
                  hospitalEmail={Hospitalemail}
                  websiteAddress={websiteAddress}
                  setWebsiteAddress={setWebsiteAddress}
                  nafdacDocument={NafdacDocument}
                  setNafdacDocument={setNafdacDocument}
                  cacDocument={cacDocument}
                  setCacDocument={setCacDocument}
                  style={{
                    display:
                      step === 2 && accountType === AccountType.Hospital
                        ? "block"
                        : "none",
                  }}
                />
                <SignupResearchCenterFormLayout
                  onNext={nextStep}
                  title={title}
                  setTitle={setTitle}
                  firstName={firstName}
                  setFirstName={setFirstName}
                  middleName={middleName}
                  setMiddleName={setMiddleName}
                  lastName={lastName}
                  setLastName={setLastName}
                  institution={institution}
                  setInstitution={setInstitution}
                  email={ResearchCenteremail}
                  setEmail={setResearchCenterEmail}
                  passportPhoto={passportPhoto}
                  setPassportPhoto={setPassportPhoto}
                  degree={degree}
                  setDegree={setDegree}
                  researchProposal={researchProposal}
                  setResearchProposal={setResearchProposal}
                  irbApproval={irbApproval}
                  setIrbApproval={setIrbApproval}
                  style={{
                    display:
                      step === 2 && accountType === AccountType.ResearchCenter
                        ? "block"
                        : "none",
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
              <LoginInforFormLayout
                OnSubmit={HandleSubmit}
                password={password}
                SetPassword={setPassword}
                confirmPassword={confirmPassword}
                SetConfirmPassword={setConfirmPassword}
                style={{ display: step === 3 ? "block" : "none" }}
              />
              {step !== 3 && (
                <div className="bg-white flex flex-row gap-3 w-full h-20 items-start pt-6 px-6 rounded-[24px]">
                  <div
                    onClick={() => handleSetStep(3)}
                    id="BG5"
                    className="text-center text-xs font-['Abhaya_Libre_Medium'] text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mt-1 w-6 h-6 items-start pt-1 px-2"
                  >
                    3
                  </div>
                  <div className="text-center text-2xl text-[#333333]">
                    Login info
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
}
