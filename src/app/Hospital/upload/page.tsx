"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar";
import { uploadclinicaldata } from "@/services/hospital.handler";
import { FileData } from "@/types/Signuptypes";
import { UploadRequest, uploadClinicalData } from "@/types/hospital.types";
import { UploadCloud, CopyCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HospitalUpload() {
  const router = useRouter(); // Use the useRouter hook to get the router instance
  const [files, setFiles] = useState<File[]>([]);

  const dropHandler = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const dragOverHandler = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      if (selectedFiles.length > 2) {
        alert("You can only upload up to 2 files at a time.");
      }
      const csvFiles = selectedFiles
        .filter((file) => file.name.endsWith(".csv"))
        .slice(0, 2);
      setFiles((prevFiles) => [...prevFiles, ...csvFiles]);
    }
  };

  const deleteFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  const [PublicKey, HandleSetPublicKey] = useState("");
  const [ExponentKey, HandleSetExponentKey] = useState("");

  const uploadFiles = async () => {
    // Handle file upload logic here
    if (files.length < 2) {
      alert("Please upload both files");
      return;
    }
    var sdtm: FileData = {
      file: files[0],
      fileName: files[0].name,
    };
    var icd: FileData = {
      file: files[1],
      fileName: files[1].name,
    };
    var req: UploadRequest = {
      SDTMDATA: sdtm,
      ICDDATA: icd,
      medicalRecordTypes: 1,
      PublicKey: PublicKey,
      ExponentKey: ExponentKey,
    };
    var response = await uploadclinicaldata(req);
    if (!response.status) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    console.log("Uploading files:", files);
  };

  const clearFiles = () => {
    setFiles([]);
  };
  return (
    <>
      <ToastContainer />
      {
        <div className="flex">
          <SideNavbar>
            <SidebarItem
              icon={<UploadCloud size={20} />}
              text="Upload"
              active
              alert={undefined}
              onClick={() => router.push("/Hospital/upload")}
            />
            <SidebarItem
              icon={<CopyCheck size={20} />}
              text="Requests"
              alert
              active={undefined}
              onClick={() => router.push("/Hospital/request")}
            />
          </SideNavbar>
          <div className="flex-1 md:flex h-screen relative">
            <div className="flex justify-center items-center mt-16 md:w-[100%] bg-[#F8F8F8] min-h-[60%]">
              <div className="bg-[#F8F8F8] lg:w-[70rem] sm:px-8 md:px-20 sm:py-8">
                <main className="container mx-auto max-w-screen-lg h-full">
                  <article
                    aria-label="File Upload Modal"
                    className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
                    onDrop={dropHandler}
                    onDragOver={dragOverHandler}
                  >
                    <section className="h-full overflow-auto p-8 w-full flex flex-col">
                      <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                        <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                          <span>
                            Drag and drop your files anywhere or *The first file
                            should be the SDTM *
                          </span>
                        </p>
                        <input
                          id="hidden-input"
                          type="file"
                          multiple
                          accept=".csv"
                          className="hidden"
                          onChange={fileChangeHandler}
                        />
                        <button
                          id="button"
                          className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                          onClick={() =>
                            document.getElementById("hidden-input")!.click()
                          }
                        >
                          Upload a file
                        </button>
                      </header>
                      <div className="flex flex-col gap-2 w-full items-start">
                        <div id="Label" className="text-[#666666]">
                          Public Key
                        </div>
                        <input
                          type="email"
                          id="TextField"
                          onChange={(e) => HandleSetPublicKey(e.target.value)}
                          className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full items-start">
                        <div id="Label" className="text-[#666666]">
                          Public Exponent Key
                        </div>
                        <input
                          type="email"
                          id="TextField"
                          onChange={(e) => HandleSetExponentKey(e.target.value)}
                          className="border-solid border-[rgba(102,_102,_102,_0.35)] w-full h-12 border rounded-lg"
                        />
                      </div>
                      <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                        To Upload
                      </h1>

                      <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                        {files.length > 0 ? (
                          files.map((file, index) => (
                            <li key={index} className="p-2 flex items-center">
                              <span className="mr-2">{file.name}</span>
                              <button
                                className="rounded-full bg-red-500 text-white px-2 py-1 text-xs"
                                onClick={() => deleteFile(index)}
                              >
                                Delete
                              </button>
                            </li>
                          ))
                        ) : (
                          <li
                            id="empty"
                            className="h-full w-full text-center flex flex-col justify-center items-center"
                          >
                            <img
                              className="mx-auto w-32"
                              src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                              alt="no data"
                            />
                            <span className="text-small text-gray-500">
                              No files selected
                            </span>
                          </li>
                        )}
                      </ul>
                    </section>

                    <footer className="flex justify-end px-8 pb-8 pt-4">
                      <button
                        id="submit"
                        className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
                        onClick={uploadFiles}
                      >
                        Upload now
                      </button>
                      <button
                        id="cancel"
                        className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                        onClick={clearFiles}
                      >
                        Cancel
                      </button>
                    </footer>
                  </article>
                </main>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
