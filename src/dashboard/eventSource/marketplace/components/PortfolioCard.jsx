import { BsSend } from "react-icons/bs"
import { RxCheck, RxCopy } from "react-icons/rx"
import OptionButton from "./OptionButton"
import { useState } from "react"
import { GoInfo } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"
import { BiPencil } from "react-icons/bi"




const cardOptions = [
    {
        title: "Edit",
        icon: <BiPencil className="text-green-500" size={15} />,
        onClick: "",
      },
    {
        title: "Delete",
        icon: <RiDeleteBin6Line className="text-red-500" size={15} />,
        onClick: "",
      },
      {
        title: "preview Page",
        icon: <GoInfo size={15} />,
        to: "",
      },
]

function PortfolioCard() {
    const [copied, setCopied] = useState(false)
    
    return (
        <div className="p-3 border-2 border-slate-300 rounded-lg ">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h5 className="text-xs font-semibold">The VAGS Wedding</h5>
                              
                            </div>
                           
                            

                            <OptionButton options={cardOptions}/>
                            
                            
                        </div>
                        <div>
                            <p className="text-xs text-primaryCol bg-primaryColC bg-opacity-30 shadow-inner shadow-slate-500 border-2 border-primaryCol rounded-full p-2 w-[175px] font-semibold">Corporate event</p>
                            <p className="text-xs text-primaryCol mt-2">View portfolio page</p>
                        </div>
                        <div className="mt-12">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 items-center" onClick={() => setCopied(true)}>
                                {!copied ? <div className="flex items-center gap-1 text-xs bg-primaryColC bg-opacity-20 text-primaryCol py-2 px-3 rounded-full shadow-inner shadow-slate-500 cursor-pointer">
                                    <RxCopy />
                                    Copy link
                                </div> : <div className="flex items-center gap-1 text-xs bg-primaryColC bg-opacity-20 text-primaryCol py-2 px-3 rounded-full shadow-inner shadow-slate-500 cursor-pointer">
                                    <RxCheck />
                                    Copied
                                </div>}
                                <BsSend />
                                </div>
                                <div className="text-xs border-red-500 border-2  bg-opacity-20 text-red-500 py-2 px-3 rounded-full shadow-inner shadow-slate-500 cursor-pointer hover:bg-red-500 hover:text-white">
                                    Turn on
                                </div>
                               
                            </div>
                        </div>

                    </div>)
    
}

export default PortfolioCard
