import { useEffect, useState } from "react";
import { LuMail } from "react-icons/lu";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { PiLinkSimple } from "react-icons/pi";
import { BsCheck2All } from "react-icons/bs";
import {
  RiArrowUpSFill,
  RiFontColor,
  RiListUnordered,
  RiListOrdered,
  RiDoubleQuotesL,
} from "react-icons/ri";
import {
  FiCornerUpLeft,
  FiCornerUpRight,
  FiMoreVertical,
  FiBold,
  FiItalic,
  FiUnderline,
  FiAlignCenter,
  FiAlignRight,
  FiAlignLeft,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import { mailList } from "./util/test";

function Crm() {
  const [activeMessagingType, setActiveMessagingType] = useState("mail");
  const [newMessage, setNewMessage] = useState("close")
  const [newText, setNewText] = useState('')
  const [allText, setAllText] = useState(['Hello Boss'])
  const [cc, setCc] = useState(false)
  const [bcc, setBcc] = useState(false)

  function handleSend (event){
    if(event.key === "Enter"){
        if(newText === "\n" || newText !== "" || newText !== " "){
            setNewText('')
        }

        if(newText !== "" && newText !== " " && newText !== "\n"){
            setAllText([...allText, newText])
            setNewText('')
        }
    }
  }

  return (
    <div className="flex gap-3 border-2 border-l-0 border-slate-300 rounded-lg mt-3 -ml-6 h-[600px]">
      {/* left */}
      <aside className=" w-[453px] border-r border-black p-3 h-full flex flex-col gap-3 pt-8">
        <div className="flex justify-end cursor-pointer " onClick={() => {setNewMessage("open")
            setActiveMessagingType("mail")
        }}>
          <p className="py-2 text-primaryCol  text-center bg-slate-300 w-[144px]">
            New message
          </p>
        </div>
        <div className="flex justify-between mt-3">
          {/* Mail */}
          <div
            onClick={() => {setActiveMessagingType("mail") 
                setNewMessage("close")}}
            className={`py-2 w-[139px] cursor-pointer ${activeMessagingType === "mail" ? "bg-slate-300" : "bg-transparent"} flex items-center gap-6`}
          >
            <div
              className={`w-1 h-6 ${activeMessagingType === "mail" ? "bg-primaryCol" : "bg-transparent"}`}
            />
            <LuMail className="text-primaryCol" size={20} />
            <p className=" text-primaryCol text-center">Mail</p>
          </div>
          {/* Chat */}
          <div
            onClick={() =>  {setActiveMessagingType("chat") 
                setNewMessage("close")}}
            className={`py-2 w-[139px] cursor-pointer ${activeMessagingType === "chat" ? "bg-slate-300" : "bg-transparent"} flex items-center gap-6`}
          >
            <div
              className={`w-1 h-6 ${activeMessagingType === "chat" ? "bg-primaryCol" : "bg-transparent"}`}
            />
            <MdOutlineMarkUnreadChatAlt className="text-primaryCol" size={20} />
            <p className=" text-primaryCol text-center">Chat</p>
          </div>

          {/* Search bar */}
        </div>
        <div className="mt-3 relative ">
          <input
            type="text"
            placeholder="Search mail"
            className="p-3 pr-10 w-full  rounded-lg focus:outline-none bg-[#EAECF0] shadow-md text-lg"
          />
          <FaSearch className="absolute top-[50%] -translate-y-[50%] right-4" />
        </div>

        {/* mail list */}
        {activeMessagingType === "mail"&& (
          <div className="mt-3 flex flex-col gap-6 overflow-y-scroll">
            {mailList.map((mail, i) => (
              <div className="flex gap-1 cursor-pointer">
                <div className="w-[85%] flex flex-col gap-1">
                  <h3 className="font-bold ">{mail.name}</h3>
                  <p className=" text-ellipsis overflow-hidden text-nowrap">
                    {mail.title}
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <p>{mail.time}</p>
                  {mail.pinned && <GoPaperclip className="text-slate-500" />}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* chat list */}
        {activeMessagingType === "chat" && (
          <div className="mt-3 flex flex-col gap-6 overflow-y-scroll">
            {mailList.map((mail, i) => (
              <div className="flex gap-1 cursor-pointer">
                <div className="w-[85%] flex flex-col gap-1">
                  <h3 className="font-bold ">{mail.name}</h3>
                  <p className=" text-ellipsis overflow-hidden text-nowrap">
                    {mail.title}
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <p>{mail.time}</p>
                  {mail.pinned && <GoPaperclip className="text-slate-500" />}
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* right */}
      <section className="w-full overflow-scroll  p-3">

        {/* logo */}
        {/* <div className="flex flex-col justify-center items-center gap-14">
                <img src="public/e-icon.svg" alt="E-vent Logo" className="w-[136px] h-[144px]" />
                <h5 className="text-2xl font-bold">Connect with clients</h5>
            </div> */}

        {/* mail content */}
        {activeMessagingType === "mail" && newMessage === "close"  && (
          <div className="flex flex-col gap-3 py-8 ">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl leading-4 font-bold">Paulina Agnes</h2>
              <p className="text-xl leading-4 text-slate-300 my-6">1234567</p>
              <p className="text-xs text-slate-300">client@domain.com</p>
              <p className="text-xs text-slate-300">+234 805 6725 434</p>
              <p className="text-xs text-slate-300">
                12, Chatham street, London, LDN124, United Kingdom
              </p>
            </div>
            <div className="flex justify-end gap-6">
              <FiCornerUpLeft size={24} className="cursor-pointer"/>
              <FiCornerUpRight size={24} className="cursor-pointer"/>
              <FiMoreVertical size={24} className="cursor-pointer"/>
            </div>
            <div className="flex gap-3 items-start justify-between my-6">
              <div className="flex gap-3">
                <div>
                  <img
                    src="public/images/mailProfilePic.png"
                    alt="profile pic"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl leading-6 font-semibold">
                    RE: Proposal for ARM AGM
                  </h3>
                  <p className="font-bold">Ibikunle Adeshina, FRM</p>
                  <p className="font-bold">
                    Others: Aderonke Iman; marketing@deluxevents.com
                  </p>
                </div>
              </div>
              <div className="">
                <p>Wed 21/08/2024</p>
              </div>
              <div className="flex flex-col gap-3 items-end ">
                <p>3:15AM</p>
                <RiArrowUpSFill />
              </div>
            </div>
            {/* body */}
            <div className="font-medium flex flex-col gap-3 ml-16">
              <p> Dear sir,</p>
              <p>
                We would like to be the event planner for the AGM 2024. Our past
                work with the company and other reputable companies in your
                industry e.g. Access Pension, Leadway Pension, Trustfund,
                Stanbic Pension Managers signal our level of experience and
                exposure in this field.
              </p>

              <p className="my-3">Thanks for considering us again.</p>

              <p>
                Kind regards, <br />
                Sylvia Thuram
              </p>
            </div>
            

            <div className="flex gap-6 ml-16 mt-6">
              <button className="border-2 border-slate-400 rounded-lg flex gap-3 py-1 px-3 items-center w-[127px] text-slate-400">
                <FiCornerUpLeft />
                Reply
              </button>
              <button className="border-2 border-slate-400 rounded-lg flex gap-3 py-1 px-3 items-center w-[127px] text-slate-400">
                <FiCornerUpRight />
                Forward
              </button>
            </div>

            <div className="flex gap-3 items-start justify-between mt-6 bg-[#EAECF0] rounded-lg p-3 cursor-pointer">
              <div className="flex gap-3">
                <div>
                  <img
                    src="public/images/mailProfilePic.png"
                    alt="profile pic"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl leading-6 font-semibold">
                    RE: Proposal for ARM AGM
                  </h3>
                  <p className="font-bold">Ibikunle Adeshina, FRM</p>
                  
                </div>
              </div>
              <div className="">
                <p>Wed 21/08/2024</p>
              </div>
              <div className="flex flex-col gap-3 items-end ">
                <p>3:15AM</p>
                <RiArrowUpSFill />
              </div>
            </div>
          </div>
        )}
        {/* chat content */}
        {activeMessagingType === "chat" && (
          <div className="flex flex-col gap-3 py-8 ">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl leading-4 font-bold">Paulina Agnes</h2>
              <p className="text-xl leading-4 text-slate-300 my-6">1234567</p>
              <p className="text-xs text-slate-300">client@domain.com</p>
              <p className="text-xs text-slate-300">+234 805 6725 434</p>
              <p className="text-xs text-slate-300">
                12, Chatham street, London, LDN124, United Kingdom
              </p>
            </div>
            <div className="flex justify-between items-center pl-6 pr-12 py-2 shadow-md w-[90%] m-auto mt-6">
              <FiBold />
              <FiItalic />
              <FiUnderline />
              <RiFontColor />
              <div className="h-[30px] w-[1px] bg-slate-400" />
              <RiListUnordered />
              <RiListOrdered />
              <FiAlignLeft />
              <FiAlignCenter />
              <FiAlignRight />
              <div className="h-[30px] w-[1px] bg-slate-400" />
              <RiDoubleQuotesL />
              <GoPaperclip />
              <PiLinkSimple />
            </div>
            <div className="mt-6 grid gap-6">
              <div className="w-[421px] bg-[#292D32] text-white rounded-lg p-3 shadow-md shadow-slate-400  leading-6 justify-self-end flex justify-between">
                <p className="text-2xl">Hello Boss</p>
                <BsCheck2All className="self-end" />
              </div>
              <div className="w-[421px] bg-[#EAECF0] text-black rounded-lg p-3 shadow-md shadow-slate-400  leading-6 justify-self-start">
                <p className="text-2xl">Thank you!</p>
              </div>
             {allText.map((text, i) =>  <div key={i} className="w-[421px] bg-[#292D32] text-white rounded-lg p-3 shadow-md shadow-slate-400  leading-6 justify-self-end flex justify-between">
                <p className="text-2xl">{text}</p>
                <BsCheck2All className="self-end" />
              </div>)}
            </div>
            <div className="mt-32">
              <textarea
                rows={2}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                onKeyDown={handleSend}
                className="resize-none focus:outline-none w-full bg-[#EAECF0] text-black rounded-lg p-3 text-lg shadow-md shadow-slate-400  leading-6 justify-self-start"
              ></textarea>
            </div>
          </div>
        )}
        {/* New Message content */}
        {newMessage === "open" && (
          <div className="flex flex-col gap-3 py-8 ">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl leading-4 font-bold">Paulina Agnes</h2>
              <p className="text-xl leading-4 text-slate-300 my-6">1234567</p>
              <p className="text-xs text-slate-300">client@domain.com</p>
              <p className="text-xs text-slate-300">+234 805 6725 434</p>
              <p className="text-xs text-slate-300">
                12, Chatham street, London, LDN124, United Kingdom
              </p>
            </div>
            <div className="flex justify-between items-center pl-6 pr-12 py-2 shadow-md w-[90%] m-auto mt-6">
              <FiBold />
              <FiItalic />
              <FiUnderline />
              <RiFontColor />
              <div className="h-[30px] w-[1px] bg-slate-400" />
              <RiListUnordered />
              <RiListOrdered />
              <FiAlignLeft />
              <FiAlignCenter />
              <FiAlignRight />
              <div className="h-[30px] w-[1px] bg-slate-400" />
              <RiDoubleQuotesL />
              <GoPaperclip />
              <PiLinkSimple />
            </div>

            <div className="grid gap-3 grid-cols-5  my-6">
              <div className="flex gap-3 col-span-4">
                <div>
                  <img
                    src="public/images/mailProfilePic.png"
                    alt="profile pic"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl leading-6 font-semibold flex gap-1 items-center">
                    Subject: <input className="font-normal  focus:outline-none w-[300px]" />
                  </h3>
                  <p className="font-bold">to: <input className="font-normal  focus:outline-none w-[400px]" /></p>
                 {cc && <p className="font-bold">
                    Cc: <input className="font-normal  focus:outline-none w-[400px]" />
                  </p>}
                 {bcc && <p className="font-bold">
                    Bcc: <input className="font-normal  focus:outline-none w-[400px]" />
                  </p>}
                </div>
              </div>
              <div className="">
                <p className="font-bold cursor-pointer"><span onClick={() => setCc(!cc)}>Cc</span> <span onClick={() => setBcc(!bcc)}>Bcc</span></p>
              </div>
              
            </div>
            <div className="mt-3">
              <textarea
                rows={15}
                className=" ml-16 resize-none focus:outline-none w-[90%]  p-3 text-2xl"
              ></textarea>
            </div>
            <div className="flex gap-6 ml-16 mt-6">
              <button className="bg-primaryColC text-white rounded-lg flex gap-3 py-1 px-3 items-center w-[127px]">
                <FiSend />
                Send
              </button>
              <button className="border-2 border-slate-400 rounded-lg flex gap-3 py-1 px-3 items-center w-[127px] text-slate-400">
                <FiTrash2 />
                Discard
              </button>
            </div>
            
           
          </div>
        )}

      </section>
    </div>
  );
}

export default Crm;
5;
