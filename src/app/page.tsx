import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex w-full flex-col items-stretch pl-20 pt-12 max-md:max-w-full max-md:pl-5"
      style={{
        background: "linear-gradient(222deg, #000 1.22%, #040D3E 106.28%)",
      }}
    >
      <header className="flex w-full items-stretch justify-between gap-5 mt-7 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69fa3d6b4927a19d201305ace351db4447237f220a6b00d9f0b05e8341abd86?apiKey=631aa5c6e5df4fa3ad6e5ba3f0b7efd5&"
          className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
          alt="Logo"
        />
        <nav className="flex items-stretch justify-between gap-5">
          <a
            className="text-red-900 text-center text-xs leading-5 tracking-[2px] uppercase whitespace-nowrap rounded border grow justify-center items-stretch px-7 py-3.5 border-solid border-red-900 max-md:px-5"
            href="/signin"
            aria-label="Sign In"
          >
            Sign In
          </a>
          <a
            className="text-white text-center text-xs leading-5 tracking-[2px] uppercase whitespace-nowrap shadow-2xl bg-red-900 grow justify-center items-stretch px-7 py-3.5 rounded max-md:px-5"
            href="/signup"
            aria-label="Sign Up"
          >
            Sign Up
          </a>
        </nav>
      </header>
      <div className="flex justify-between gap-3 mt-40 pr-3 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-1 flex-col items-start max-md:max-w-full">
          <div className="flex flex-1 items-center">
            <div className="text-emerald-200 text-5xl font-bold leading-[50px]">
              Your Gateway to De-Identified Patient Data Collaboration
              <p className="text-slate-500 text-lg leading-5 self-stretch whitespace-nowrap  max-md:max-w-full mt-1">
                Empowering Health through Shared Data
              </p>
            </div>
            <img
              src="./vector.svg"
              alt="Vector"
              className="w-min align-middle ml-5 max-md:hidden mb-3"
            />
          </div>

          <div className="flex items-stretch gap-5 ">
            <button
              className="text-red-900 text-center text-xs font-medium leading-5 tracking-[2px] uppercase whitespace-nowrap rounded border grow justify-center items-stretch px-8 py-3.5 border-solid border-red-900 max-md:px-5"
              aria-label="Sign In"
            >
              <Link href={"/signin"}>Sign In</Link>
            </button>
            <button
              className="text-white text-center text-xs leading-5 tracking-[2px] uppercase whitespace-nowrap shadow-2xl bg-red-900 grow justify-center items-stretch px-7 py-3.5 rounded max-md:px-5"
              aria-label="Sign Up"
            >
              <Link href={"/signup"}>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
