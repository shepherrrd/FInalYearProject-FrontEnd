"use client";
import React, { useState, useEffect } from "react";

export default function OTP() {
  <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
    <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p className="text-md md:text-xl">
            Enter the OTP we just sent you.
        </p>
    </div>
    <div className="flex flex-col max-w-md space-y-5">
        <input type="text" placeholder="otp"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
        <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
            Confirm
        </button>
    </div>
</div>
}