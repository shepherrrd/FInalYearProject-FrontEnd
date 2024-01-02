export default function HospitalDashboardRequests() {
  return (
    <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0 pb-48">
      <div className="flex flex-col items-stretch my-auto max-md:max-w-full ">
        <div className="text-gray-700 text-2xl font-semibold max-md:max-w-full">
          Dashboard
        </div>
        <div className="shadow-lg bg-white flex flex-col justify-center items-stretch mt-9 py-1.5 max-md:max-w-full">
          <div className="items-start shadow-lg flex flex-col pt-8 pb-12 px-7 rounded-lg max-md:max-w-full max-md:px-5">
            <div className="justify-between items-stretch self-stretch flex w-full gap-5 pr-3 max-md:max-w-full max-md:flex-wrap">
              <div className="text-stone-900 text-base font-semibold leading-6">
                Requests
              </div>
            </div>
            <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-3 pb-3 border-b-neutral-400 border-b-opacity-30 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="flex justify-between gap-5 items-start">
                    <div className="text-zinc-500 text-center text-sm font-light leading-4">
                      No.
                    </div>
                    <div className="text-zinc-500 text-sm font-light leading-5">
                      Req no.
                    </div>
                  </div>
                  <div className="text-zinc-500 text-sm font-light leading-5">
                    Name
                  </div>
                </div>
                <div className="text-zinc-500 text-sm font-light leading-5 self-start">
                  Date
                </div>
              </div>
              <div className="text-zinc-500 text-sm font-light leading-5 self-start">
                Time
              </div>
            </div>
            <div className="items-center self-stretch flex justify-between gap-5 py-3 border-b-neutral-400 border-b-opacity-30 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="items-stretch flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex justify-between gap-5">
                    <div className="items-center flex justify-between gap-5 pr-4">
                      <div className="text-stone-900 text-center text-xs leading-4 my-auto">
                        01
                      </div>
                      <div className="text-stone-900 text-center text-sm leading-4 whitespace-nowrap items-stretch rounded bg-neutral-400 bg-opacity-10 self-stretch aspect-[2.75] justify-center px-3 py-1">
                        6465
                      </div>
                    </div>
                    <div className="text-stone-900 text-base my-auto">
                      Alex Noman
                    </div>
                  </div>
                  <div className="text-zinc-500 text-base font-light self-center my-auto">
                    23/01/23
                  </div>
                </div>
                <div className="text-zinc-500 text-base font-light self-center grow whitespace-nowrap my-auto">
                  09:44
                </div>
              </div>
              <div className="text-white text-center text-base leading-6 whitespace-nowrap items-stretch rounded bg-blue-600 self-stretch justify-center px-4 py-1">
                View
              </div>
            </div>

            <div className="text-blue-600 text-base font-medium whitespace-nowrap border self-center justify-center items-stretch mt-12 mb-7 px-7 py-4 rounded-2xl border-solid border-blue-600 max-md:mt-10 max-md:px-5">
              View All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
