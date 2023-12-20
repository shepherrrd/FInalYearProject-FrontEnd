import Image from "next/image";

const SignInForm = () => {
  return (
    <div
      id="SignInRoot"
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
            <div
              id="TextField"
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 w-full items-start">
            <div className="flex flex-row justify-between w-full items-start">
              <div id="Label1" className="text-[#666666]">
                Your password
              </div>
              <div className="flex flex-row gap-3 w-16 items-start">
                <Image src="/eyepassword.svg" alt="Group" />
                <div className="text-right text-lg text-[rgba(102,_102,_102,_0.8)]">
                  Hide
                </div>
              </div>
            </div>
            <div
              id="TextField1"
              className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 w-full font-['Poppins'] items-start">
            <button
              id="Button1"
              className="text-center opacity-25 text-xl font-medium text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[40px]"
            >
              Log in
            </button>
            <div className="text-[#333333] ml-2 font-['Poppins']">
              By continuing, you agree to the{" "}
              <span className="underline text-[#111111]">Terms of use</span>
              <span className="text-[#666666]"> </span>
              <div>and</div>
              <span className="text-[#666666]"> </span>
              <span className="underline text-[#111111]">Privacy Policy.</span>
              <span className="underline text-[#666666]"> </span>
            </div>
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
  );
};

export default SignInForm;
