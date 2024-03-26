"use client"; 
import React, { useState } from "react";
import { toast } from "react-toastify";
import { getFromLocalStorage } from "@/utilities/localstorage";
import { API } from "@/constants/api.constants";
import { useRouter } from "next/navigation";



export default function OTP() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleConfirmClick = async () => {
    const signupsessionkey = getFromLocalStorage("signupsessionkey");
    if (!signupsessionkey) {
      toast.error("Session key not found.");
      return;
    }

    try {
      const response = await fetch(API.VerifyOTP, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          signupsessionkey,
          code: otp,
        }),
      }).then((res) => res.json());

      if (response.status) {
        toast.success("OTP verified successfully. Waiting for admin approval.");
        router.push("/signin"); // Navigate to the signin page
      } else {
        toast.error(response.message || "OTP verification failed.");
      }
    } catch (error) {
      toast.error("An error occurred while verifying OTP.");
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md mx-auto mt-24">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p className="text-md md:text-xl">
          Enter the OTP we just sent you.
        </p>
      </div>
      <div className="flex flex-col max-w-md space-y-5">
        <input
          type="text"
          placeholder="OTP"
          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
          onClick={handleConfirmClick}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
