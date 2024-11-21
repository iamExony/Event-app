import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { PiWarningOctagonBold } from "react-icons/pi";
import { MdOutlineLink } from "react-icons/md";

function ContractPupUp({ setPopupIsOpen }) {
  const [social, setSocial] = useState("email");
  const [type, setType] = useState("copy");
  const [linkCopied, setLinkCopied] = useState(false);
  const [linkShared, setLinkShared] = useState(false);
  const [receivingEmail, setReceivingEmail] = useState("");
  const [receivingNumber, setReceivingNumber] = useState("");

  const [emails, setEmails] = useState([])
  const [phoneNumbers, setPhoneNumber] = useState([])



  const contractLink = "e-vent.contract/client-contract";

  async function copyLink(link) {
    await navigator.clipboard.writeText(link);
  }

  const handleEmailShare = (e) => {
    e.preventDefault();
    setLinkShared(true);
    setEmails([...emails, receivingEmail])

    setTimeout(() => {
      setLinkShared(false);
    }, 2000);
  };
  const handleNumberShare = (e) => {
    e.preventDefault();
    setLinkShared(true);
    setPhoneNumber([...phoneNumbers, receivingNumber])
  }


  
  const handleLinkCopy = (e) => {
    e.preventDefault();
    copyLink(contractLink);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 2000);
  };

  return (
    <>
      {/* <div
        className="bg-transparent backdrop-blur-[2px] h-[810px] w-[60%] absolute top-52 left-[243px] "
        onClick={() => setPopupIsOpen(false)}
      /> */}
     
      <div className="w-[647px] h-[331px] border-2 border-borderColor p-6 pr-12 absolute left-[10%] top-[200px] z-10 bg-white">
        <div className="flex justify-start text-sm items-start gap-12 mb-6 ">
          <h5
            className={
              type === "copy"
                ? "border-b-[3px] border-primaryColC text-primaryColC pb-1 cursor-pointer"
                : "text-formColor cursor-pointer"
            }
            onClick={() => setType("copy")}
          >
            Copy contract link
          </h5>
          <h5
            className={
              type === "share"
                ? "border-b-[3px] border-primaryColC text-primaryColC pb-1 cursor-pointer"
                : "text-formColor cursor-pointer"
            }
            onClick={() => setType("share")}
          >
            Share link
          </h5>
          <div className=" w-[50%] flex justify-end">
            <span onClick={() => setPopupIsOpen(false)}>
              <MdCancel className="text-formColor" size={25} />
            </span>
          </div>
        </div>
        {/* for link sharing */}
        {type === "share" && (
          <div className="h-32">
            <div className="flex gap-3 items-center py-6 ml-12 ">
              <ImMail
                size={30}
                className={
                  social === "email" ? "text-primaryColC" : "text-formColor"
                }
                onClick={() => setSocial("email")}
              />
              <FaWhatsappSquare
                className={
                  social === "whatsapp" ? "text-primaryColC" : "text-formColor"
                }
                onClick={() => setSocial("whatsapp")}
                size={34}
              />
            </div>
            {/* For Email sharing */}
            {social === "email" && (
              <form
                action=""
                className="flex justify-between ml-12 "

                onSubmit={handleEmailShare}
              >

                <input
                  type="email"
                  value={receivingEmail}
                  required
                  onChange={(e) => setReceivingEmail(e.target.value)}
                  placeholder={"Enter email address"}
                  className={`border-2 border-borderColor p-2 w-[60%] focus:outline-primaryCol `}
                />
              

                <button
                  type="submit"
                  className={`${
                    receivingEmail.length > 3 ? "bg-primaryCol" : "bg-formColor"
                  } p-2 rounded-md w-[150px] text-white`}
                >
                  Send link
                </button>
              </form>
            )}

            {/* For Whatsapp sharing */}
            {social === "whatsapp" && (

              <form
                action=""
                className="flex justify-between ml-12 "
                onSubmit={handleNumberShare}
              >
                <input
                  type="tel"
                
                  value={receivingNumber}
                  required

                  onChange={(e) => setReceivingNumber(e.target.value)}
                  placeholder={"Enter phone number"}
                  className="border-2 border-borderColor p-2 w-[60%] focus:outline-primaryCol "
                />
                <button

                  className={`${
                    receivingNumber.length > 3
                      ? "bg-primaryCol"
                      : "bg-formColor"
                  } p-2 rounded-md w-[150px] text-white`}
                >
                  Send link
                </button>
              </form>
            )}
          </div>
        )}
        {/* for link copying */}
        {type === "copy" && (
          <div className="h-32">
            <form
              action=""
              className="flex justify-between items-center mb-20 "
            >
              <span className="p-2 rounded-full border-2 border-borderColor">
                <MdOutlineLink size={25} className="text-formColor" />
              </span>
              <input
                type="text"
                className="border-2 border-borderColor p-2 w-[60%] rounded-md focus:outline-primaryCol "
                value={contractLink}
                readOnly
              />
              <button
                onClick={handleLinkCopy}
                className="bg-primaryCol p-2 rounded-md w-[100px] ml-[50px] text-white"
              >
                Copy link
              </button>
            </form>
          </div>
        )}

        <div className="flex items-center justify-center gap-1 bg-primaryColC text-white text-sm p-3 rounded-md mt-4">
          <span>
            <PiWarningOctagonBold size={25} />
          </span>
          Viewers of this contract link would have access to limited information
        </div>
        {(linkCopied || linkShared) && (
          <p className="w-[150px] rounded-md p-2 bg-slate-600 text-white text-center mt-3 m-auto">
            {type === "copy" ? "Link Copied" : "Link Shared"}
          </p>
        )}
      </div>
    </>
  )
}
export default ContractPupUp;
