import { FileData } from "@/types/Signuptypes";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

type SignupResearchCenterFormLayoutProps = {
  onNext: () => void;
  style?: React.CSSProperties;
  title: string;
  setTitle: (value: string) => void;
  firstName: string;
  setFirstName: (value: string) => void;
  middleName: string;
  setMiddleName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  institution: string;
  setInstitution: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  passportPhoto: FileData;
  setPassportPhoto: (value: FileData) => void;
  degree: FileData;
  setDegree: (value: FileData) => void;
  researchProposal: FileData;
  setResearchProposal: (value: FileData) => void;
  irbApproval: FileData;
  setIrbApproval: (value: FileData) => void;
};
const SignupResearchCenterFormLayout: React.FC<
  SignupResearchCenterFormLayoutProps
> = ({
  onNext,
  style,
  title: titleProp,
  setTitle: setTitleProp,
  firstName: firstNameProp,
  setFirstName: setFirstNameProp,
  middleName: middleNameProp,
  setMiddleName: setMiddleNameProp,
  lastName: lastNameProp,
  setLastName: setLastNameProp,
  institution: institutionProp,
  setInstitution: setInstitutionProp,
  email: emailProp,
  setEmail: setEmailProp,
  passportPhoto: passportPhotoProp,
  setPassportPhoto: setPassportPhotoProp,
  degree: degreeProp,
  setDegree: setDegreeProp,
  researchProposal: researchProposalProp,
  setResearchProposal: setResearchProposalProp,
  irbApproval: irbApprovalProp,
  setIrbApproval: setIrbApprovalProp,
}) => {
  const [title, setTitle] = useState<string>(titleProp);
  const [firstName, setFirstName] = useState<string>(firstNameProp);
  const [middleName, setMiddleName] = useState<string>(middleNameProp);
  const [lastName, setLastName] = useState<string>(lastNameProp);
  const [institution, setInstitution] = useState<string>(institutionProp);
  const [email, setEmail] = useState<string>(emailProp);
  const [passportPhoto, setPassportPhoto] =
    useState<FileData>(passportPhotoProp);
  const [degree, setDegree] = useState<FileData>(degreeProp);
  const [researchProposal, setResearchProposal] =
    useState<FileData>(researchProposalProp);
  const [irbApproval, setIrbApproval] = useState<FileData>(irbApprovalProp);

  useEffect(() => {
    setTitleProp(title);
    setFirstNameProp(firstName);
    setMiddleNameProp(middleName);
    setLastNameProp(lastName);
    setInstitutionProp(institution);
    setEmailProp(email);
    setPassportPhotoProp(passportPhoto);
    setDegreeProp(degree);
    setResearchProposalProp(researchProposal);
    setIrbApprovalProp(irbApproval);
  }, [
    title,
    firstName,
    middleName,
    lastName,
    institution,
    email,
    passportPhoto,
    degree,
    researchProposal,
    irbApproval,
    setTitleProp,
    setFirstNameProp,
    setMiddleNameProp,
    setLastNameProp,
    setInstitutionProp,
    setEmailProp,
    setPassportPhotoProp,
    setDegreeProp,
    setResearchProposalProp,
    setIrbApprovalProp,
  ]);
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
          <div className="text-center text-2xl text-[#333333]">Upload Form</div>
        </div>
        <div className="font-light text-[#666666] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim We would contact you for any extra document
        </div>
        <div className="text-[#111111]">*All fields required unless noted.</div>
      </div>
      <div className="flex flex-col gap-3 w-full items-start">
        <div className="flex flex-col gap-1 w-full items-start">
          <div className="flex flex-row justify-between w-2/5 items-start">
            <div id="Label2" className="text-sm text-[#666666]">
              Title
            </div>
            <div id="Label3" className="text-sm text-[#666666]">
              First Name
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full items-start">
            <input
              type="text"
              alt="Title"
              id="titlefield"
              onChange={(e) => setTitle(e.target.value)}
              className="border-solid border-[rgba(102,_102,_102,_0.35)]  h-12 border rounded-lg"
            />
            <input
              type="text"
              id="firstnamefield"
              onChange={(e) => setFirstName(e.target.value)}
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-2/3 h-12 border rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 w-full items-start">
          <div className="flex flex-col gap-1 w-1/2 items-start">
            <div id="Label" className="text-sm text-[#666666]">
              Middle Name
            </div>
            <input
              type="text"
              id="middlenamefield"
              onChange={(e) => setMiddleName(e.target.value)}
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2 items-start">
            <div id="Label1" className="text-sm text-[#666666]">
              Last Name
            </div>
            <input
              type="text"
              id="lastnamefield"
              onChange={(e) => setLastName(e.target.value)}
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full font-['Poppins'] items-start">
        <div id="Label4" className="text-sm text-[#666666]">
          Affiliated Institution
        </div>
        <input
          type="text"
          id="affiliatedinstitutionfield"
          onChange={(e) => setInstitution(e.target.value)}
          className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 w-full font-['Poppins'] items-start">
        <div className="flex flex-col gap-5 w-full items-start">
          <div className="flex flex-col gap-1 w-full items-start">
            <div id="Label5" className="text-sm text-[#666666]">
              Institutional-Based Email Address
            </div>
            <input
              type="email"
              id="institutionalbasedemailaddressfield"
              onChange={(e) => setEmail(e.target.value)}
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
          <div className="flex flex-row justify-between w-2/3 items-start">
            <div id="Label6" className="text-[#666666]">
              Passport Photo
            </div>
            <div id="Label7" className="text-[#666666]">
              {" "}
              Degree
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full items-start">
          <div className="flex flex-row gap-12 w-full items-start">
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <input
                type="file"
                accept=".pdf,.jpg"
                id="PassportButton"
                className="hidden"
                onChange={handleFileChange(setPassportPhoto)}
              />
              <label
                htmlFor="PassportButton"
                className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Upload File
              </label>
              <div className="text-sm leading-[22px] mt-3">
                {passportPhoto.fileName}
              </div>
            </div>
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <input
                type="file"
                accept=".pdf,.jpg"
                id="DegreeButton"
                className="hidden"
                onChange={handleFileChange(setDegree)}
              />
              <label
                htmlFor="DegreeButton"
                className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Upload File
              </label>
              <div className="text-sm leading-[22px] mt-3">
                {degree.fileName}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-3/4 items-start">
            <div id="Label8" className="text-[#666666]">
              Research Proposal
            </div>
            <div id="Label9" className="text-[#666666]">
              {"  "}
              IRB approval
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full font-['Poppins'] items-start">
          <div className="flex flex-row gap-12 w-full items-start">
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <input
                type="file"
                accept=".pdf,.jpg"
                id="ResearchButton"
                className="hidden"
                onChange={handleFileChange(setResearchProposal)}
              />
              <label
                htmlFor="ResearchButton"
                className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Upload File
              </label>
              <div className="text-sm leading-[22px] mt-3">
                {researchProposal.fileName}
              </div>
            </div>
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <input
                type="file"
                accept=".pdf,.jpg"
                id="IrBButton"
                className="hidden"
                onChange={handleFileChange(setIrbApproval)}
              />
              <label
                htmlFor="IrBButton"
                className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Upload File
              </label>
              <div className="text-sm leading-[22px] mt-3">
                {irbApproval.fileName}
              </div>
            </div>
          </div>
          <button
            id="Button1"
            disabled={
              !title ||
              !firstName ||
              !lastName ||
              !middleName ||
              !degree.file ||
              !institution ||
              !email ||
              !passportPhoto.file ||
              !researchProposal.file ||
              !irbApproval.file
            }
            onClick={onNext}
            className={`text-center text-xl text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[32px] ${
              title &&
              firstName &&
              lastName &&
              middleName &&
              degree.file &&
              institution &&
              email &&
              passportPhoto.file &&
              researchProposal.file &&
              irbApproval.file
                ? "opacity-100 text-red-900"
                : "opacity-25 border-[rgba(102,102,102,0.35)]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupResearchCenterFormLayout;
