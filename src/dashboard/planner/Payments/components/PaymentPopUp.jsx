import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { PiWarningOctagonBold } from "react-icons/pi";
import { MdOutlineLink } from "react-icons/md";

function PaymentPopUp({ setIsOpen }) {
  const [social, setSocial] = useState("email");
  const [type, setType] = useState("copy");
  const [linkCopied, setLinkCopied] = useState(false);
  const [linkShared, setLinkShared] = useState(false);
  const [receivingEmail, setReceivingEmail] = useState("");
  const [receivingNumber, setReceivingNumber] = useState("");

  const [emails, setEmails] = useState([]);
  const [phoneNumbers, setPhoneNumber] = useState([]);

  const paymentLink = "e-vents.payment/PamelaAlex";

  async function copyLink(link) {
    await navigator.clipboard.writeText(link);
  }

  const handleEmailShare = (e) => {
    e.preventDefault();
    setLinkShared(true);
    setEmails([...emails, receivingEmail]);

    setTimeout(() => {
      setLinkShared(false);
    }, 2000);
  };
  const handleNumberShare = (e) => {
    e.preventDefault();
    setLinkShared(true);
    setPhoneNumber([...phoneNumbers, receivingNumber]);
  };

  const handleLinkCopy = (e) => {
    e.preventDefault();
    copyLink(paymentLink);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 2000);
  };

  return (
    <>
      <div
        className="bg-transparent md:backdrop-blur-[2px] h-[810px] w-full md:w-[60%] absolute top-52 left-[243px] z-10"
        onClick={() => setIsOpen(false)}
      />

      <div className="md:w-[647px] md:h-[331px] border-2 border-borderColor p-4 md:p-6 md:pr-12 md:absolute left-[50%] md:-translate-x-[50%] top-[277px] z-10 bg-white">
        <div className="flex justify-start items-start gap-12 mb-6 mt-10 md:mt-0">
          <h5
            className={
              type === "copy"
                ? "border-b-[3px] border-primaryColC text-primaryColC pb-1 cursor-pointer text-sm"
                : "text-formColor cursor-pointer text-sm"
            }
            onClick={() => setType("copy")}
          >
            Copy Payment link
          </h5>
          <h5
            className={
              type === "share"
                ? "border-b-[3px] border-primaryColC text-primaryColC pb-1 cursor-pointer text-sm"
                : "text-formColor cursor-pointer text-sm"
            }
            onClick={() => setType("share")}
          >
            Share Payment notice
          </h5>
          <div className=" w-[35%] hidden md:flex justify-end ">
            <span onClick={() => setIsOpen(false)}>
              <MdCancel className="text-formColor" size={25} />
            </span>
          </div>
        </div>
        <div className="flex md:hidden absolute top-40 right-8">
          <span onClick={() => setIsOpen(false)}>
            <MdCancel className="text-formColor" size={25} />
          </span>
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
                className="flex justify-between md:ml-12 "
                onSubmit={handleEmailShare}
              >
                <input
                  type="email"
                  name="email"
                  value={receivingEmail}
                  required
                  onChange={(e) => setReceivingEmail(e.target.value)}
                  placeholder={"Enter email address"}
                  className={`border-2 border-borderColor p-2 w-[60%] `}
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
                  name="tel"
                  value={receivingNumber}
                  required
                  onChange={(e) => setReceivingNumber(e.target.value)}
                  placeholder={"Enter phone number"}
                  className="border-2 border-borderColor p-2 w-[60%] "
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
                name="paymentlink"
                className="border-2 border-borderColor p-2 w-[60%] rounded-md "
                value={paymentLink}
                readOnly
              />
              <button
                onClick={handleLinkCopy}
                className="bg-primaryCol p-2 rounded-md md:w-[100px] md:ml-[50px] text-white flex items-center justify-center gap-1"
              >
                Copy <span className="hidden md:block">link</span>
              </button>
            </form>
          </div>
        )}

        <div className="flex items-center justify-center gap-1 bg-primaryColC text-white p-3 rounded-md mt-4 text-sm">
          <span>
            <PiWarningOctagonBold size={25} />
          </span>
          Viewers of this payment link would have access to limited information
        </div>
        {(linkCopied || linkShared) && (
          <p className="w-[150px] rounded-md p-2 bg-slate-600 text-white text-center mt-3 m-auto">
            {type === "copy" ? "Link Copied" : "Link Shared"}
          </p>
        )}
      </div>
    </>
  );
}
export default PaymentPopUp;
