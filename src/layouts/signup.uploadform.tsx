"use client";
import React, { useState } from "react";

type SignupAccountTypeLayoutProps = {
  onNext: () => void;
  name: string;
  setName: (value: string) => void;
  hospital: string;
  setHospital: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
  style?: React.CSSProperties;
};
const SignupUploadForm: React.FC<SignupAccountTypeLayoutProps> = ({
  onNext,
  name,
  setName,
  hospital,
  setHospital,
  email,
  setEmail,
  address,
  setAddress,
  style,
}) => {
  const [CacDocument, SetCacDocument] = useState("No File Chosen");
  const [fileName, setFileName] = useState("No File Chosen");
  const [NafdacDocument, setNafdacDocument] = useState("No File Chosen");
  const [bvnDocument, SetbvnDOcument] = useState("No File Chosen");
  return (
    <div
      className="bg-white flex flex-col justify-center gap-6 w-full font-['Poppins'] items-start p-6 rounded-[24px]"
      style={style}
    >
      <div className="flex flex-col justify-between gap-2 w-full items-start">
        <div className="flex flex-row gap-3 w-1/3 items-start">
          <div
            id="BG"
            className="text-center text-xs font-['Abhaya_Libre_Medium'] text-white bg-[url(https://file.rendit.io/n/gtcAw2bsZS1tYZy0l0HV.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mt-1 w-6 h-6 items-start pt-1 px-2"
          >
            2
          </div>
          <div className="text-center text-2xl text-[#333333]">Upload Form</div>
        </div>
        <div className="font-light text-[#666666] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          We would contact you for any extra document
        </div>
        <div className="text-[#111111]">*All fields required unless noted.</div>
      </div>
      <div className="flex flex-col gap-1 w-full items-start">
        <div id="Label" className="text-sm text-[#666666]">
          Hospital Name
        </div>
        <div
          id="TextField"
          className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1 w-full font-['Poppins'] items-start">
        <div id="Label1" className="text-sm text-[#666666]">
          Hospital Email
        </div>
        <div
          id="TextField2"
          className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 w-full font-['Poppins'] items-start">
        <div className="flex flex-col gap-5 w-full items-start">
          <div className="flex flex-col gap-1 w-full items-start">
            <div id="Label2" className="text-sm text-[#666666]">
              Website Address
            </div>
            <div
              id="TextField4"
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
          <div className="flex flex-row justify-between w-3/4 items-start">
            <div id="Label3" className="text-[#666666]">
              {" "}
              CAC Document
            </div>
            <div id="Label4" className="text-[#666666]">
              {" "}
              CAC Document
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full items-start">
          <div className="flex flex-row gap-12 w-full items-start">
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <input
                type="file"
                accept=".pdf,.jpg"
                id="ComponentButton"
                className="hidden"
                onChange={(e) =>
                  setFileName(
                    e.target.files && e.target.files.length > 0
                      ? e.target.files[0].name
                      : "No File Chosen"
                  )
                }
              />
              <label
                htmlFor="ComponentButton"
                className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Upload File
              </label>
              <div className="text-sm leading-[22px] mt-3">{fileName}</div>
            </div>
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <input
                type="file"
                accept=".pdf,.jpg"
                id="ComponentButton"
                className="hidden"
                onChange={(e) =>
                  setFileName(
                    e.target.files && e.target.files.length > 0
                      ? e.target.files[0].name
                      : "No File Chosen"
                  )
                }
              />
              <label
                htmlFor="ComponentButton"
                className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Upload File
              </label>
              <div className="text-sm leading-[22px] mt-3">{CacDocument}</div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-3/4 items-start">
            <div id="Label5" className="text-[#666666]">
              {" "}
              CAC Document
            </div>
            <div id="Label6" className="text-[#666666]">
              {" "}
              CAC Document
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full font-['Poppins'] items-start">
          <div className="flex flex-row gap-12 w-full items-start">
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <button
                id="ComponentButton2"
                className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Choose File
              </button>
              <div className="text-sm leading-[22px] mt-3">No File Chosen</div>
            </div>
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <button
                id="ComponentButton3"
                className="text-sm font-medium leading-[22px] text-[#de0000] border-solid border-[#da0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Choose File
              </button>
              <div className="text-sm leading-[22px] mt-3">No File Chosen</div>
            </div>
          </div>
          <button
            id="Button1"
            onClick={onNext}
            className="text-center opacity-25 text-xl text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[32px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupUploadForm;
