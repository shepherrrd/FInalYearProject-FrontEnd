"use client";
import { AccountType } from "@/types/Signuptypes";
import React, { useEffect, useState } from "react";
type SignupAccountTypeLayoutProps = {
  onNext: () => void;
  accountType: AccountType;
  setAccountType: (value: AccountType) => void;
  location: string;
  setLocation: (value: string) => void;
  style?: React.CSSProperties;
};
const SignupAccountTypeLayout: React.FC<SignupAccountTypeLayoutProps> = ({
  onNext,
  accountType: accountTypeProp,
  setAccountType: setAccountTypeProp,
  location: locationProp,
  setLocation: setLocationProp,
  style,
}) => {
  const [accountType, setAccountType] = useState(accountTypeProp);
  const [location, setLocation] = useState(locationProp);

  const handleSetAccountType = (value: string) => {
    if (value === "hospital") {
      setAccountType(AccountType.Hospital);
    } else if (value === "research") {
      setAccountType(AccountType.ResearchCenter);
    }
  };
  useEffect(() => {
    setAccountTypeProp(accountType);
    setLocationProp(location);
  });
  return (
    <div
      className="bg-white flex flex-col justify-center gap-6 w-full items-start p-6 rounded-[24px]"
      style={style}
    >
      <div className="flex flex-row gap-3 w-1/3 items-start">
        <div
          id="BG"
          className="text-center text-xs font-['Abhaya_Libre_Medium'] text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mt-1 w-6 h-6 items-start pt-1 px-2"
        >
          1
        </div>
        <div className="text-center text-2xl text-[#333333]">Account Type</div>
      </div>
      <div className="flex flex-col gap-2 w-full items-start">
        <div id="Label" className="text-[#666666]">
          Account Type
        </div>
        <select
          value={accountType.toString()}
          onChange={(e) => handleSetAccountType(e.target.value)}
          className="border-solid border-[rgba(102,_102,_102,_0.35)] flex flex-row justify-end w-full h-12 items-start pt-4 px-6 border rounded-lg"
        >
          <option>Select Account Type</option>
          {/* Add your options here */}
          <option value="hospital">Hospital</option>
          <option value="research">Pharmacy</option>
        </select>
      </div>
      <div className="flex flex-col gap-5 w-full font-['Poppins'] items-start">
        <div className="flex flex-col gap-2 w-full items-start">
          <div id="Label1" className="text-[#666666]">
            Location
          </div>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-solid border-[rgba(102,_102,_102,_0.35)] flex flex-row justify-end w-full h-12 items-start pt-4 px-6 border rounded-lg"
          >
            <option>Select location</option>
            {/* Add your options here */}
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <button
          id="signupaccountbutton"
          onClick={onNext}
          disabled={!accountType || !location}
          className={`text-center text-xl text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[32px] ${
            accountType && location
              ? "opacity-100 text-red-900"
              : "opacity-25 border-[rgba(102,102,102,0.35)]"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SignupAccountTypeLayout;
