import React, { useEffect, useState } from "react";

type SignupResearchCenterFormLayoutProps = {
  onNext: () => void;
  style: React.CSSProperties;
};
const SignupResearchCenterFormLayout: React.FC<
  SignupResearchCenterFormLayoutProps
> = ({
  onNext,
  // name,
  // setName,
  // hospital,
  // setHospital,
  // email,
  // setEmail,
  // address,
  // setAddress,
  style,
}) => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [passportPhoto, setPassportPhoto] = useState<File | null>(null);
  const [degree, setDegree] = useState<File | null>(null);
  const [researchProposal, setResearchProposal] = useState<File | null>(null);
  const [irbApproval, setIrbApproval] = useState<File | null>(null);

  useEffect(() => {
    // Perform side effects here
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
  ]);
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
            <img
              src="https://file.rendit.io/n/0julHOftCXmNmBEAhyOT.svg"
              alt="TextField4"
              id="TextField4"
              className="border"
            />
            <div
              id="TextField6"
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-2/3 h-12 border rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 w-full items-start">
          <div className="flex flex-col gap-1 w-1/2 items-start">
            <div id="Label" className="text-sm text-[#666666]">
              Middle Name
            </div>
            <div
              id="TextField"
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2 items-start">
            <div id="Label1" className="text-sm text-[#666666]">
              Last Name
            </div>
            <div
              id="TextField2"
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full font-['Poppins'] items-start">
        <div id="Label4" className="text-sm text-[#666666]">
          Affiliated Institution
        </div>
        <div
          id="TextField8"
          className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 w-full font-['Poppins'] items-start">
        <div className="flex flex-col gap-5 w-full items-start">
          <div className="flex flex-col gap-1 w-full items-start">
            <div id="Label5" className="text-sm text-[#666666]">
              Institutional-Based Email Address
            </div>
            <div
              id="TextField10"
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
              <button
                id="ComponentButton"
                className="text-sm font-medium leading-[22px] text-[#d00000] border-solid border-[#be0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Choose File
              </button>
              <div className="text-sm leading-[22px] mt-3">No File Chosen</div>
            </div>
            <div className="bg-[#f2f2f2] flex flex-row gap-8 w-1/2 h-16 items-start pt-2 px-2 rounded">
              <button
                id="ComponentButton1"
                className="text-sm font-medium leading-[22px] text-[#de0000] border-solid border-[#da0000] flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start border rounded"
              >
                Choose File
              </button>
              <div className="text-sm leading-[22px] mt-3">No File Chosen</div>
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
            className="text-center opacity-25 text-xl text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[32px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupResearchCenterFormLayout;
