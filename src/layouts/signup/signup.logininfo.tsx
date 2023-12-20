import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type loginInforFormLayoutProps = {
  style?: React.CSSProperties;
  OnSubmit: () => void;
  password: string;
  SetPassword: (value: string) => void;
  confirmPassword: string;
  SetConfirmPassword: (value: string) => void;
};

const LoginInforFormLayout: React.FC<loginInforFormLayoutProps> = ({
  style,
  OnSubmit,
  password: passwordProp,
  SetPassword: SetPasswordProp,
  confirmPassword: confirmPasswordProp,
  SetConfirmPassword: SetConfirmPasswordProp,
}) => {
  function isValidPassword(password: string): boolean {
    const hasMinimumLength = password.length >= 8;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasMinimumLength && hasLetters && hasNumbers && hasSymbols;
  }
  const [password, SetPassword] = useState<string>(passwordProp);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [iconSrc, setIconSrc] = useState("/eyepassword.svg");
  const [passwordvisibletext, SetPasswordVisibleText] = useState("Show");
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setIconSrc(isPasswordVisible ? "/eyepassword.svg" : "/eyeopen.svg");
    SetPasswordVisibleText(isPasswordVisible ? "Show" : "Hide");
  };
  const [confirmPassword, SetConfirmPassword] =
    useState<string>(confirmPasswordProp);

  const handleSetPassword = (pass: string) => {
    if (!isValidPassword(pass)) {
      toast.error(
        "Password must be 8 characters long and contain at least one letter, one number and one special character"
      );
    }
    if (pass !== confirmPassword) {
      toast.error("Passwords do not match");
    }
    if (isValidPassword(pass) && pass === confirmPassword) {
    }
    SetPassword(pass);
  };

  const handleSetConfirmPassword = (pass: string) => {
    SetConfirmPassword(pass);
  };
  useEffect(() => {
    SetPasswordProp(password);
    SetConfirmPasswordProp(confirmPassword);
  });
  return (
    <div
      className="bg-white flex flex-col justify-between gap-8 w-full font-['Poppins'] items-start p-6 rounded-[24px]"
      style={style}
    >
      <div className="flex flex-col justify-between gap-6 w-full items-start">
        <div className="flex flex-col justify-between gap-2 w-full items-start">
          <div className="flex flex-row gap-3 w-1/4 items-start">
            <div
              id="BG"
              className="text-center text-xs font-['Abhaya_Libre_Medium'] text-white bg-blackdot bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mt-1 w-6 h-6 items-start pt-1 px-2"
            >
              3
            </div>
            <div className="text-center text-2xl text-[#333333]">
              Login Info
            </div>
          </div>
          <div className="font-light text-[#666666] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </div>
          <div className="text-[#111111]">
            *All fields required unless noted.
          </div>
        </div>
        <div className="flex flex-col justify-between gap-1 w-full items-start">
          <div className="flex flex-row justify-between w-full items-start">
            <div id="Label" className="text-[#666666]">
              Password
            </div>
            <div className="flex flex-row gap-3 w-16 items-start">
              <Image
                onClick={togglePasswordVisibility}
                src={iconSrc}
                alt="Group1"
                className="mt-2 w-5"
              />
              <div className="text-right text-lg text-[rgba(102,_102,_102,_0.8)]">
                {passwordvisibletext}
              </div>
            </div>
          </div>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="passwordfield"
            onBlur={(e) => handleSetPassword(e.target.value)}
            className="text-[rgba(102,_102,_102,_0.6)] border-solid border-[rgba(102,_102,_102,_0.35)] flex flex-row w-full h-12 items-start pt-3 px-6 border rounded-lg"
          />
          Enter your password
          <div id="ErrorMessage" className="text-sm text-[#666666]">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full font-['Poppins'] items-start">
          <div id="Label1" className="text-sm text-[#666666]">
            Confirm Password
          </div>
          <input
            type="password"
            id="passwordfield"
            onChange={(e) => handleSetConfirmPassword(e.target.value)}
            className="text-[rgba(102,_102,_102,_0.6)] border-solid border-[rgba(102,_102,_102,_0.35)] flex flex-row w-full h-12 items-start pt-3 px-6 border rounded-lg"
          />
        </div>
      </div>
      <div className="text-[#333333] font-['Poppins']">
        By creating an account, you agree to the{" "}
        <span className="underline text-[#111111]">Terms of use</span>
        <span className="text-[#666666]"> </span>
        <div>and</div>
        <span className="text-[#666666]"> </span>
        <span className="underline text-[#111111]">Privacy Policy.</span>
        <span className="underline text-[#666666]"> </span>
      </div>
      <div className="flex flex-col gap-5 w-full font-['Poppins'] items-start">
        <div
          id="NotARobotCheckbox"
          className="border-solid border-[#333333] bg-white flex flex-row justify-between w-full h-16 items-start pt-2 px-6 border rounded-lg"
        >
          <div className="flex flex-row mt-3 gap-2 w-1/4 items-start">
            <input
              type="checkbox"
              alt="CheckBox1"
              id="CheckBox1"
              className="mt-1 w-4"
            />
            <div className="text-center font-light text-[#333333]">
              I’m not a robot
            </div>
          </div>
          <Image
            src="/notrobot.svg"
            alt="Googlerecaptchaofficial"
            className="mt-0 w-12"
          />
        </div>
        <button
          id="Button1"
          disabled={!password || !confirmPassword}
          onClick={OnSubmit}
          className={`text-center text-xl text-white bg-[#111111] flex flex-row justify-center pt-4 w-full h-16 cursor-pointer items-start rounded-[32px] ${
            password && confirmPassword
              ? "opacity-100 text-red-900"
              : "opacity-25 border-[rgba(102,102,102,0.35)]"
          }`}
        >
          Finish
        </button>
      </div>
    </div>
  );
};
export default LoginInforFormLayout;
