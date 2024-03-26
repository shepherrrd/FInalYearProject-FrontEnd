"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar";
import { UploadCloud, CopyCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RequestItems } from "@/hospital.types";
import { API } from "@/constants/api.constants";
import axios, { AxiosResponse } from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserData } from "@/types/auth.types";

export default function HospitalDashboard() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<RequestItems | null>(null);
  const [privateKey, setPrivateKey] = useState<string>("");
  const [privateExponentKey, setPrivateExponentKey] = useState<string>("");

  useEffect(() => {
    const item = JSON.parse(
      localStorage.getItem("selectedItem") || "{}"
    ) as RequestItems;
    console.log(item);
    setSelectedItem(item);
  }, []);
  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem
          icon={<UploadCloud size={20} />}
          text="Upload"
          active={undefined}
          alert={undefined}
          onClick={() => router.push("/Hospital/upload")}
        />
        <SidebarItem
          icon={<CopyCheck size={20} />}
          text="Requests"
          alert
          active
          onClick={() => router.push("/Hospital/request")}
        />
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
        <div className="mt-16 flex justify-center items-center md:w-[30%] bg-[#F8F8F8] min-h-[60%]">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center w-3/4 min-h-[60%] flex flex-col justify-between">
            <div>
              <img
                className="w-32 h-32 mb-4 rounded-full mx-auto ring-2 ring-gray-300"
                src={selectedItem?.passport || "/avatar1.png"}
                alt="Bordered avatar"
              />
              <h3 className="text-lg font-semibold">
                {selectedItem?.name || "John Doe"}
              </h3>
              <p className="mb-2">Institution, State</p>
              <p className="mb-4">Nigeria</p>
            </div>
            <div className="flex flex-col space-y-4 mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center"
                onClick={() =>
                  selectedItem && window.open(selectedItem.reason, "_blank")
                }
              >
                View Request
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center"
                onClick={() =>
                  selectedItem &&
                  window.open(selectedItem.irbApproval, "_blank")
                }
              >
                IRB Approval
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center"
                onClick={() =>
                  selectedItem &&
                  window.open(selectedItem.irbProposal, "_blank")
                }
              >
                Proposal
              </button>
            </div>
            <div className="flex justify-around pb-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded w-32 h-12"
                onClick={async () => {
                  const item = JSON.parse(
                    localStorage.getItem("selectedItem") || "{}"
                  ) as RequestItems;
                  if (!item || !privateKey || !privateExponentKey) {
                    alert("Please fill in all the required fields.");
                    return;
                  }

                  try {
                    const response = await axios.patch(API.REJECT_REQUEST, {
                      privateKey,
                      privateExponentKey,
                      requestID: item.id,
                    });

                    if (response.data.status) {
                      alert("Request rejected successfully.");
                    } else {
                      alert(
                        `Failed to reject request: ${response.data.message}`
                      );
                    }
                  } catch (error) {
                    console.error("Error rejecting request:", error);
                    alert("Error rejecting request.");
                  }
                }}
              >
                Reject
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold rounded w-32 h-12"
                onClick={async () => {
                  const item = JSON.parse(
                    localStorage.getItem("selectedItem") || "{}"
                  ) as RequestItems;
                  if (!item || !privateKey || !privateExponentKey) {
                    alert("Please fill in all the required fields.");
                    return;
                  }

                  try {
                    const userDataString = localStorage.getItem("user");
                    var userData = JSON.parse(
                      userDataString as string
                    ) as UserData;
                    if (!userData) {
                      console.error("User data not found in local storage");
                      return;
                    }
                    var body = {
                      privateKey: privateKey,
                      privateExponentKey: privateExponentKey,
                      requestID: item.id,
                    };
                    const response = await axios.patch(
                      API.ACCEPT_REQUEST,
                      body,
                      {
                        // Update the API endpoint here
                        headers: {
                          Authorization: `Bearer ${userData.token}`,
                        },
                      }
                    );

                    if (response.data.status) {
                      alert("Request accepted successfully.");
                    } else {
                      alert(
                        `Failed to accept request: ${response.data.message}`
                      );
                    }
                  } catch (error) {
                    console.error("Error accepting request:", error);
                    alert("Error accepting request.");
                  }
                }}
              >
                Accept
              </button>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Private Key"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md mb-2"
              />
              <input
                type="text"
                placeholder="Private Exponent Key"
                value={privateExponentKey}
                onChange={(e) => setPrivateExponentKey(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="md:mt-16 flex flex-col items-center md:w-[70%] bg-[#F8F8F8] min-h-[60%]">
          <div className="bg-white w-11/12 h-5/6 mt-2 p-4 overflow-y-auto">
            <p className="text-2xl font-bold">Reason for application</p>
            <div>
              <p className="p-4">
                {selectedItem?.description ||
                  "Malaria has long been a scourge..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
