"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type FileData = {
  file: File | null;
  fileName: string;
};

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
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalEmail, setHospitalEmail] = useState("");
  const [websiteAddress, setWebsiteAddress] = useState("");
  const [NafdacDocument, setNafdacDocument] = useState<FileData>({
    file: null,
    fileName: "",
  });
  const [cacDocument, setCacDocument] = useState<FileData>({
    file: null,
    fileName: "",
  });

  const HandleSetCacDocument = (event: any) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileType = file.type;
    if (
      (file &&
        fileName &&
        fileName.length > 0 &&
        file.size > 0 &&
        file.size < 1000000 &&
        fileType === "application/pdf") ||
      fileType === "image/jpeg"
    ) {
      setCacDocument({ file, fileName });
      toast.success("File uploaded successfully");
    } else {
      file.size > 1000000 ? toast.error("File too large") : "";
      !(fileType === "application/pdf" || fileType === "image/jpeg")
        ? toast.error(
            "Invalid file .File type not supported Must be pdf or jpeg"
          )
        : "";
    }
  };

  useEffect(() => {
    setName(hospitalName);
    setEmail(hospitalEmail);
    setAddress(websiteAddress);
  });

  const handleFileChange =
    (setFileData: React.Dispatch<React.SetStateAction<FileData>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;

      if (file) {
        const { name: fileName, size: fileSize, type: fileType } = file;

        if (
          fileSize > 0 &&
          fileSize < 1000000 &&
          (fileType === "application/pdf" || fileType === "image/jpeg")
        ) {
          setFileData({ file, fileName });
          toast.success("File uploaded successfully");
        } else {
          fileSize > 1000000
            ? toast.error("File too large")
            : toast.error("Invalid file type. Must be pdf or jpeg");
        }
      }
    };

  return (
    <>
      <ToastContainer />
      {
        <div
          className="bg-white flex flex-col justify-center gap-6 w-full font-['Poppins'] items-start p-6 rounded-[24px]"
          style={style}
        >
          <div className="flex flex-col justify-between gap-2 w-full items-start">
            <div className="flex flex-row gap-3 w-1/3 items-start">
              <div
                id="BG"
                className="text-center text-xs font-['Abhaya_Libre_Medium'] text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mt-1 w-6 h-6 items-start pt-1 px-2"
              >
                2
              </div>
              <div className="text-center text-2xl text-[#333333]">
                Upload Form
              </div>
            </div>
            <div className="font-light text-[#666666] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad We would contact you for any extra document
            </div>
            <div className="text-[#111111]">
              *All fields required unless noted.
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full items-start">
            <div id="Label" className="text-sm text-[#666666]">
              Hospital Name
            </div>
            <input
              type="text"
              id="TextField"
              onChange={(e) => setHospitalName(e.target.value)}
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 w-full font-['Poppins'] items-start">
            <div id="Label1" className="text-sm text-[#666666]">
              Hospital Email
            </div>
            <input
              type="email"
              onChange={(e) => setHospitalEmail(e.target.value)}
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
                <input
                  type="text"
                  onChange={(e) => setWebsiteAddress(e.target.value)}
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
                  {""}
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
                    id="CacButton"
                    className="hidden"
                    onChange={handleFileChange(setCacDocument)}
                  />
                  <label
                    htmlFor="CacButton"
                    className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
                  >
                    Upload File
                  </label>
                  <div className="text-sm leading-[22px] mt-3">
                    {cacDocument.fileName}
                  </div>
                </div>
                <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
                  <input
                    type="file"
                    accept=".pdf,.jpg"
                    id="NafdacButton"
                    className="hidden"
                    onChange={handleFileChange(setNafdacDocument)}
                  />
                  <label
                    htmlFor="NafdacButton"
                    className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
                  >
                    Upload File
                  </label>
                  <div className="text-sm leading-[22px] mt-3">
                    {NafdacDocument.fileName}
                  </div>
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
                  <div className="text-sm leading-[22px] mt-3">
                    No File Chosen
                  </div>
                </div>
                <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
                  <button
                    id="ComponentButton3"
                    className="text-sm font-medium leading-[22px] text-[#de0000] border-solid border-[#da0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
                  >
                    Choose File
                  </button>
                  <div className="text-sm leading-[22px] mt-3">
                    No File Chosen
                  </div>
                </div>
              </div>
              <button
                id="Button1"
                disabled={
                  !hospitalName ||
                  !hospitalEmail ||
                  !websiteAddress ||
                  !NafdacDocument.file ||
                  !cacDocument.file
                }
                onClick={onNext}
                className={`text-center text-xl text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[32px] ${
                  hospitalName &&
                  hospitalEmail &&
                  websiteAddress &&
                  NafdacDocument.file &&
                  cacDocument.file
                    ? "opacity-100 text-red-900"
                    : "opacity-25 border-[rgba(102,102,102,0.35)]"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SignupUploadForm;
