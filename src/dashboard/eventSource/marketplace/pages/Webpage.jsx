import { FaAngleDown, FaAngleUp, FaSquare, } from "react-icons/fa";
import { FiTwitter } from 'react-icons/fi'
import { useState, useRef, useEffect } from "react";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { MdFacebook, MdWhatsapp} from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { GrUpload } from "react-icons/gr";
import { Link } from "react-router-dom";
import AddPortfolio from "./AddPortfolio";
import PortfolioCard from "../components/PortfolioCard";


const testData = Array.from({length: 4,})

function SetCounter() {
  const [curOpen, setCurOpen] = useState(null);
  const [background, setBackground] = useState('')
  const [display, setDisplay] = useState('webpage')
  const bgRef = useRef()


  useEffect(function (){
    
    sessionStorage.setItem('currentCounterDisplay', display)
  }, [display])
  



  function preventDefaults(e){
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

  function handleDragandDrop(e){
    preventDefaults(e)
    if (!e.dataTransfer) return
    handleFiles(e.dataTransfer.files)
    console.log(e.dataTransfer)

  }
 function handleDragEnter (e){
   preventDefaults(e)
    e.target.parentElement.parentElement.classList.remove('border-primaryColC')
    e.target.parentElement.parentElement.classList.add('border-green-500', 'bg-primaryColC')
    console.log(bgRef.current.parentElement)
 }
 function handleDragLeave(e){
   preventDefaults(e)
    e.target.parentElement.parentElement.classList.add('border-primaryColC')
    e.target.parentElement.parentElement.classList.remove('border-green-500', 'bg-primaryColC')
 }
  return (
    <>
      {display === "webpage" && (
        <main>
          <section className=" border-2 border-slate-300 p-4 md:p-12 md:ml-20 mx-4 my-12 flex justify-center items-center flex-col ">
            <div className="flex items-start gap-6 w-full md:w-[70%] mb-16">
              <div>
                <img src="/images/profilePic.png" alt="profile" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-lg font-semibold ">Indigo Events</h5>
                <p className="text-base">Manage business webpage</p>
              </div>
            </div>

            <div className="flex justify-end w-full md:w-[70%] mb-3 ">
              <Link
                to={""}
                className="py-2 px-4  rounded-lg text-white text-sm bg-primaryColC shadow-md shadow-slate-300"
              >
                Preview website
              </Link>
            </div>

            {/* BUSINESS INFORMATION */}
            <div className="w-full md:w-[70%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (curOpen === 1 ? setCurOpen(0) : setCurOpen(1))}
              >
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-lg ">
                    Business Information
                  </h5>
                  <p className="text-base">Business description, webpage</p>
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
                      Business profile name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter location"
                      className="p-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none"
                    />

                    <label
                      className="text-sm font-semibold"
                      htmlFor="description"
                    >
                      Business description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Enter business description"
                      className="resize-none border-2 border-slate-200 rounded-lg focus:outline-none text-base p-3 mb-3"
                      rows={5}
                    ></textarea>
                    <label className="text-sm font-semibold" htmlFor="location">
                      Business location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter location"
                      className="p-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none"
                    />
                    <label className="text-sm font-semibold" htmlFor="website">
                      Business Webpage
                    </label>
                    <input
                      type="text"
                      name="website"
                      placeholder="e-vent/"
                      className="p-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none"
                    />
                    <label className="text-sm font-semibold" htmlFor="website">
                      Business services
                    </label>
                    <input
                      type="text"
                      name="website"
                      placeholder="e-vent/"
                      className="p-3 border-2 border-slate-200 rounded-lg text-base focus:outline-none"
                    />
                  </form>
                </div>
              )}
            </div>

            {/* BUSINESS CONTACT */}
            <div className="w-full md:w-[70%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (curOpen === 2 ? setCurOpen(0) : setCurOpen(2))}
              >
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-lg ">Business Contact</h5>
                  <p className="text-base">
                    Email , phone number and social media
                  </p>
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
                <div className="mt-12 mb-6">
                  <form action="" className="flex flex-col gap-12">
                    <div className="relative flex items-center gap-6 ">
                      <div className="relative w-[90%]">
                        <span className="text-primaryColC border-r-2   border-slate-200 absolute top-[50%] -translate-y-[50%] px-3 py-1">
                          <FiTwitter size={20} />
                        </span>
                        <input
                          type="text"
                          placeholder="Enter twitter username"
                          className="text-base rounded-lg h-12 full p-1 pl-14 focus:outline-none border-2 border-slate-200 w-full"
                        />
                      </div>
                    </div>
                    <div className="relative flex items-center gap-6 ">
                      <div className="relative w-[90%]">
                        <span className="text-primaryColC border-r-2    border-slate-200 absolute top-[50%] -translate-y-[50%] px-3 py-1">
                          <TiSocialInstagramCircular size={20} className="" />
                        </span>
                        <input
                          type="text"
                          placeholder="Enter instagram username"
                          className="text-base rounded-lg h-12 full p-1 pl-14 focus:outline-none border-2 border-slate-200 w-full"
                        />
                      </div>
                    </div>
                    <div className="relative flex items-center gap-6 ">
                      <div className="relative w-[90%]">
                        <span className="text-primaryColC border-r-2    border-slate-200 absolute top-[50%] -translate-y-[50%] px-3 py-1">
                          <CiMail size={20} />
                        </span>
                        <input
                          type="text"
                          placeholder=" Enter email address"
                          className="text-base rounded-lg h-12 full p-1 pl-14 focus:outline-none border-2 border-slate-200 w-full"
                        />
                      </div>
                    </div>
                    <div className="relative flex items-center gap-6 w">
                      <div className="relative w-[90%]">
                        <span className="text-primaryColC border-r-2    border-slate-200 absolute top-[50%] -translate-y-[50%] px-3 py-1">
                          <MdWhatsapp size={20} />
                        </span>
                        <input
                          type="text"
                          placeholder="Enter phone number"
                          className="text-base rounded-lg h-12 full p-1 pl-14 focus:outline-none border-2 border-slate-200 w-full"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
            {/* POTFOLIO */}
            <div className="w-full md:w-[70%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (curOpen === 3 ? setCurOpen(0) : setCurOpen(3))}
              >
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-lg ">Portfolio</h5>
                  <p className="text-base">10 products</p>
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
                <div className="mt-6">
                  <div className="flex justify-end mb-6">
                    <button
                      onClick={() => setDisplay("add-portfolio")}
                      className="py-2 px-4  rounded-md text-white text-sm bg-primaryColC"
                    >
                      Add new portfolio
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-x-24 gap-y-3 ">
                    {testData.map((data, i) => (
                      <PortfolioCard key={i} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Marketing Settings */}
            <div className="w-full md:w-[70%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (curOpen === 4 ? setCurOpen(0) : setCurOpen(4))}
              >
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-lg ">Marketing Settings</h5>
                  <p className="text-base">
                    Customize your marketing activities to get more sales
                  </p>
                </div>
                <div className={`w-8 `}>
                  {curOpen === 4 ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </div>
              </div>
              {curOpen === 4 && <div className="mt-6"></div>}
            </div>
            {/* Appearance */}
            <div className="w-full md:w-[70%] m-auto border-2 border-slate-300 p-3  mb-3 transition-all ease-in-out">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (curOpen === 5 ? setCurOpen(0) : setCurOpen(5))}
              >
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-lg ">Appearance</h5>
                  <p className="text-base">Give radiance to your listings</p>
                </div>
                <div className={`w-8 `}>
                  {curOpen === 5 ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </div>
              </div>
              {curOpen === 5 && (
                <div className="mt-6 flex flex-col gap-6">
                  {/* Background upload */}
                  <div>
                    <h5 className="font-semibold text-sm mb-3">
                      Background Image
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
                          <input
                            type="file"
                            id="background"
                            className="hidden "
                          />
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
                  {/* Logo upload */}
                  <div>
                    <h5 className="font-semibold text-sm mb-3">Logo</h5>

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
                          <input
                            type="file"
                            id="background"
                            className="hidden "
                          />
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
                  <div>
                    <h5 className="font-semibold text-sm mb-3">Theme color</h5>

                    <div className="flex gap-3 ml-20">
                      <button
                        className="w-4 h-4 rounded-full bg-blue-500"
                        value={"blue"}
                      ></button>
                      <button
                        className="w-4 h-4 rounded-full bg-yellow-500"
                        value={"yellow"}
                      ></button>
                      <button
                        className="w-4 h-4 rounded-full bg-red-500"
                        value={"red"}
                      ></button>
                      <button
                        className="w-4 h-4 rounded-full bg-green-500"
                        value={"green"}
                      ></button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center gap-3 w-full md:w-[60%] mt-3">
              <button className="text-xs border border-red-500 p-2 w-[150px] rounded-full">
                Discard Changes
              </button>
              <button className="text-xs border border-green-500 p-2 w-[150px] rounded-full">
                Save Changes
              </button>
            </div>
          </section>
        </main>
      )}

      {display === "add-portfolio" && <AddPortfolio setDisplay={setDisplay} />}
    </>
  );
}

export default SetCounter;
