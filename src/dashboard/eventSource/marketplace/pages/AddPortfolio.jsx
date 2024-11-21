import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import Header from "../prescription/components/Header";
import { useState, useRef } from "react";

import { GrUpload } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdArrowBackIos, MdKeyboardArrowLeft } from "react-icons/md";

function AddPortfolio({ setDisplay }) {
  const [curOpen, setCurOpen] = useState(null);
  const [background, setBackground] = useState("");
  const bgRef = useRef();

  const navigate = useNavigate();

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleFiles = (fileList) => {
    if (fileList) {
      let files = Array.from(fileList);
      setBackground(files);
      console.log(files);
    }
  };

  function handleDragandDrop(e) {
    preventDefaults(e);
    if (!e.dataTransfer) return;
    handleFiles(e.dataTransfer.files);
    console.log(e.dataTransfer);
  }
  function handleDragEnter(e) {
    preventDefaults(e);
    e.target.parentElement.parentElement.classList.remove("border-primaryColC");
    e.target.parentElement.parentElement.classList.add(
      "border-green-500",
      "bg-primaryColC"
    );
    console.log(bgRef.current.parentElement);
  }
  function handleDragLeave(e) {
    preventDefaults(e);
    e.target.parentElement.parentElement.classList.add("border-primaryColC");
    e.target.parentElement.parentElement.classList.remove(
      "border-green-500",
      "bg-primaryColC"
    );
  }
  return (
    <main>
      <section className="relative border-2 border-slate-300 p-12 ml-20 my-12 flex justify-center items-center flex-col ">
        <div>
          <button
            onClick={() => setDisplay("webpage")}
            className="flex gap-1 items-center text-base font-semibold pb-6 absolute left-8"
          >
            <span>
              <MdKeyboardArrowLeft size={20} />
            </span>
            Back to previous
          </button>
        </div>
        <div className="flex items-start gap-6 w-[60%] mb-16">
          <div>
            <img src="/images/profilePic.png" alt="profile" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-lg font-semibold ">Indigo Events</h5>
            <p className="text-base">Manage business webpage</p>
          </div>
        </div>

        <div className="flex justify-end w-[60%] mb-3 ">
          <Link
            to={""}
            className="py-2 px-4  rounded-md text-white text-sm bg-primaryColC shadow-md shadow-slate-300"
          >
            Preview portfolio
          </Link>
        </div>

        {/* EVENT INFORMATION */}
        <div className=" w-[60%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => (curOpen === 1 ? setCurOpen(0) : setCurOpen(1))}
          >
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg ">Event Information</h5>
              <p className="text-base">Event name and theme</p>
            </div>
            <div className={`w-8 `}>
              {curOpen === 1 ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </div>
          </div>
          {curOpen === 1 && (
            <div className="my-6">
              <form action="" className="flex flex-col gap-3 w-[90%]">
                <label className="text-sm font-semibold" htmlFor="name">
                 Event name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="p-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none"
                />

                <label className="text-sm font-semibold" htmlFor="theme">
                  Event theme
                </label>
                <input
                  type="text"
                  name="theme"
                  placeholder="Enter location"
                  className="p-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none"
                />
                
               
              </form>
            </div>
          )}
        </div>

        {/* EVENT SPECIFICATIONS*/}
        <div className=" w-[60%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => (curOpen === 2 ? setCurOpen(0) : setCurOpen(2))}
          >
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg ">Event specifications</h5>
              <p className="text-base">Event and services brief</p>
            </div>
            <div className={`w-8 `}>
              {curOpen === 2 ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </div>
          </div>
          {curOpen === 2 && (
           <div className="my-6">
           <form action="" className="flex flex-col gap-3 w-[90%]">
               
              
               <label className="text-sm font-semibold" htmlFor="description">Details of event, roles and services rendered</label>
               <textarea name="description" id="description"  placeholder="Enter description" className="resize-none border-2 border-slate-200 rounded-lg focus:outline-none text-base p-3 mb-3" rows={5}></textarea>
               
           </form>
       </div>
          )}
        </div>
        {/* PORTFOLIO MAIN IMAGES*/}
        <div className=" w-[60%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => (curOpen === 3 ? setCurOpen(0) : setCurOpen(3))}
          >
            <div className="flex flex-col gap-3">
            <h5 className="font-semibold text-lg ">Portfolio main images</h5>
              <p className="text-base">select main page images</p>
            </div>
            <div className={`w-8 `}>
              {curOpen === 3 ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </div>
          </div>
          {curOpen === 3 && (
            <div className="mt-6 flex flex-col gap-6">
              {/* EVENT INFORMATION */}
              <div>
                <h5 className="font-semibold text-sm mb-3">Event information</h5>

                <div
                  className="z-10  border-2 border-dashed border-primaryColC w-[95%] p-1 pl-6 "
                  onDragEnter={preventDefaults}
                  onDragLeave={preventDefaults}
                  onDragOver={preventDefaults}
                  onDrop={preventDefaults}
                  ref={bgRef}
                >
                  <div
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={preventDefaults}
                    onDrop={handleDragandDrop}
                    className="flex items-center gap-12"
                  >
                    <div className="w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full border-2 border-black">
                      <GrUpload size={25} />
                    </div>

                    <div>
                      <label
                        htmlFor="background"
                        className="cursor-pointer font-semibold text-lg "
                      >
                        DRAG FILE HERE OR{" "}
                        <span className="text-primaryColC">BROWSE</span>
                      </label>
                      <input type="file" id="background" className="hidden " />
                      <p className="text-sm text-slate-500 ">
                        Supported file types: JPG, PNG, PDF
                      </p>
                      <p className="text-sm text-slate-500 ">
                        The file size can be up to 20MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* EVENT SPECIFICATIONS */}
              <div>
                <h5 className="font-semibold text-sm mb-3">
                  Event specifications
                </h5>

                <div
                  className="z-10  border-2 border-dashed border-primaryColC w-[95%] p-1 pl-6 "
                  onDragEnter={preventDefaults}
                  onDragLeave={preventDefaults}
                  onDragOver={preventDefaults}
                  onDrop={preventDefaults}
                  ref={bgRef}
                >
                  <div
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={preventDefaults}
                    onDrop={handleDragandDrop}
                    className="flex items-center gap-12"
                  >
                    <div className="w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full border-2 border-black">
                      <GrUpload size={25} />
                    </div>

                    <div>
                      <label
                        htmlFor="background"
                        className="cursor-pointer font-semibold text-lg "
                      >
                        DRAG FILE HERE OR{" "}
                        <span className="text-primaryColC">BROWSE</span>
                      </label>
                      <input type="file" id="background" className="hidden " />
                      <p className="text-sm text-slate-500 ">
                        Supported file types: JPG, PNG, PDF
                      </p>
                      <p className="text-sm text-slate-500 ">
                        The file size can be up to 20MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* PORTFOLIO MAIN IMAGES 2 *}
        <div className=" w-[60%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => (curOpen === 3 ? setCurOpen(0) : setCurOpen(3))}
          >
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg ">Portfolio main images</h5>
              <p className="text-base">select main page images</p>
            </div>
            <div className={`w-8 `}>
              {curOpen === 3 ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </div>
          </div>
          {/* {curOpen === 3 && (
            <div className="mt-6 mb-12">
              <form action="">
                <div className="grid grid-cols-3 gap-2 w-[95%]">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-xs font-semibold"
                      htmlFor="inventory-name"
                    >
                      Compositon name
                    </label>
                    <input
                      type="text"
                      name="inventory-name"
                      placeholder="Enter name"
                      className="p-2 py-1 border-primaryColC text-xs focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold" htmlFor="website">
                      Composition amount
                    </label>
                    <input
                      type="text"
                      name="website"
                      placeholder="Enter value"
                      className="p-2 py-1 border-primaryColC text-xs focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold" htmlFor="website">
                      Measurement unit
                    </label>
                    <input
                      type="text"
                      name="website"
                      placeholder="select unit"
                      className="p-2 py-1 border-primaryColC text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <div className=" mt-6">
                  <button className="py-2 px-4  rounded-md text-white text-xs bg-primaryColC">
                    Add composition details
                  </button>
                </div>
              </form>
            </div>
          )} */}
        {/* </div> */}
        {/* GALLERY */}
        <div className=" w-[60%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => (curOpen === 4 ? setCurOpen(0) : setCurOpen(4))}
          >
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg ">Gallery</h5>
              <p className="text-base">Additional images</p>
            </div>
            <div className={`w-8 `}>
              {curOpen === 4 ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </div>
          </div>
          {curOpen === 4 && (
            <div className="my-6">
              {/* UPLOAD OTHER IMAGES FROM EVENT */}
              <div>
                <h5 className="font-semibold text-sm mb-3">other images from event</h5>

                <div
                  className="z-10  border-2 border-dashed border-primaryColC w-[95%] p-1 pl-6 "
                  onDragEnter={preventDefaults}
                  onDragLeave={preventDefaults}
                  onDragOver={preventDefaults}
                  onDrop={preventDefaults}
                  ref={bgRef}
                >
                  <div
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={preventDefaults}
                    onDrop={handleDragandDrop}
                    className="flex items-center gap-12"
                  >
                    <div className="w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full border-2 border-black">
                      <GrUpload size={25} />
                    </div>

                    <div>
                      <label
                        htmlFor="background"
                        className="cursor-pointer font-semibold text-lg "
                      >
                        DRAG FILE HERE OR{" "}
                        <span className="text-primaryColC">BROWSE</span>
                      </label>
                      <input type="file" id="background" className="hidden " />
                      <p className="text-sm text-slate-500 ">
                        Supported file types: JPG, PNG, PDF
                      </p>
                      <p className="text-sm text-slate-500 ">
                        The file size can be up to 20MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* REVIEWS */}
        <div className=" w-[60%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => (curOpen === 5 ? setCurOpen(0) : setCurOpen(5))}
          >
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg ">Reviews</h5>
              <p className="text-base">
                setting of reviews from host and third party{" "}
              </p>
            </div>
            <div className={`w-8 `}>
              {curOpen === 5 ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </div>
          </div>
          {/* {curOpen === 5 && (
            <div className="my-6">
              <form action="" className="flex flex-col gap-2 w-[95%]">
                <label
                  className="text-xs font-semibold"
                  htmlFor="source-address"
                >
                  Source address
                </label>
                <input
                  type="text"
                  name="source-address"
                  placeholder="Enter address"
                  className="p-2 py-1 border-primaryColC text-sm focus:outline-none"
                />

                <label className="text-xs font-semibold mt-4" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  className="p-2 py-1 border-primaryColC text-sm focus:outline-none"
                />

                <label className="text-xs font-semibold mt-4" htmlFor="LGA">
                  Local Gorvenment Area
                </label>
                <input
                  type="text"
                  name="LGA"
                  placeholder="select L.G.A"
                  className="p-2 py-1 border-primaryColC text-sm focus:outline-none"
                />

                <label
                  className="text-xs font-semibold mt-4"
                  htmlFor="availability"
                >
                  Availability
                </label>
                <select
                  name="availability"
                  id=""
                  className="p-2 py-1 border-2 border-primaryColC text-sm focus:outline-none"
                >
                  <option value="">Select availability type</option>
                </select>
              </form>
            </div>
          )} */}
        </div>
        {/* Application settings
        <div className=" w-[60%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => (curOpen === 6 ? setCurOpen(0) : setCurOpen(6))}
          >
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg ">Application settings</h5>
              <p className="text-base">Customize your application criteria</p>
            </div>
            <div className={`w-8 `}>
              {curOpen === 6 ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </div>
          </div>
          {curOpen === 6 &&  <div className="my-6">
              <form action="" className="flex flex-col gap-2 w-[95%]">

              <label
                className="text-xs font-semibold "
                htmlFor="applicant-type"
              >
                Applicant type
              </label>
              <select name="applicant-type" id=""  className="p-2 py-1 border-2 border-primaryColC text-sm focus:outline-none">
                <option value="">Select applicant type</option>
              </select>

                <label
                  className="text-xs font-semibold mt-4"
                  htmlFor="Applicant-name"
                >
                  Applicant name
                </label>
                <input
                  type="text"
                  name="Applicant-name"
                  placeholder="Enter applicant name"
                  className="p-2 py-1 border-primaryColC text-sm focus:outline-none"
                />

               

                <div className=" mt-6">
                  <button className="py-2 px-4  rounded-md text-white text-xs bg-primaryColC">
                   Create custom questions
                  </button>
                </div>
              </form>
            </div>}
        </div>
        {/* Financial details *
        <div className=" w-[60%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => (curOpen === 7 ? setCurOpen(0) : setCurOpen(7))}
          >
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg ">Financial details</h5>
              <p className="text-base">Purchase price and delivery fees</p>
            </div>
            <div className={`w-8 `}>
              {curOpen === 7 ? (
                <FaAngleUp size={20} />
              ) : (
                <FaAngleDown size={20} />
              )}
            </div>
          </div>
          {curOpen === 7 && <div className="my-6">
              <form action="" className="flex flex-col gap-2 w-[95%]">

             
                <label
                  className="text-xs font-semibold mt-4"
                  htmlFor="purchase-price"
                >
                  Purchase price
                </label>
                <input
                  type="text"
                  name="purchase-price"
                  placeholder="Enter amount"
                  className="p-2 py-1 border-primaryColC text-sm focus:outline-none"
                />
             
                <label
                  className="text-xs font-semibold mt-4"
                  htmlFor="delivery-fee"
                >
                  Delivery fee
                </label>
                <input
                  type="text"
                  name="delivery-fee"
                  placeholder="Enter amount"
                  className="p-2 py-1 border-primaryColC text-sm focus:outline-none"
                />
             
                <label
                  className="text-xs font-semibold mt-4"
                  htmlFor="other-amounts"
                >
                  Other amounts
                </label>
                <input
                  type="text"
                  name="other-amounts"
                  placeholder="Enter amount"
                  className="p-2 py-1 border-primaryColC text-sm focus:outline-none"
                />

               

                <div className=" mt-6">
                  <button className="py-2 px-4  rounded-md text-white text-xs bg-primaryColC">
                   Create custom charges
                  </button>
                </div>
              </form>
            </div>}
        </div> */}

        <div className="flex justify-center items-center gap-3 w-[60%] mt-3">
          <button className="text-xs border border-red-500 p-2 w-[150px] rounded-full">
            Discard Changes
          </button>
          <button
            onClick={() => navigate("product-details")}
            className="text-xs border border-green-500 p-2 w-[150px] rounded-full"
          >
            Save Changes
          </button>
        </div>
      </section>
    </main>
  );
}

export default AddPortfolio;
