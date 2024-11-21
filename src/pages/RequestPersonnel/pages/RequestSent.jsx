import { Continue } from "../components/Buttons";

const RequestSent = ({ setStep }) => {
    return ( 
        <div className="bg-[url('/images/request-personnel-bg.png')] bg-no-repeat bg-center bg-cover h-[calc(100vh-5rem)]">
            {/* Request Sent */}
            <div className="bg-White bg-opacity-80 relative top-[15%] left-[10%] w-[50%] px-[2rem] py-[5rem] rounded-xl">
                <div className="flex gap-4">
                    <img src="/images/tick-circle.svg" alt="" />
                    <h2 className="text-3xl font-medium">Request Sent</h2>
                </div>

                <p className="my-4">The event personnel will look at your request, and let you know their decision. A notification will be sent to you if accepted or declined.</p>

                <Continue className="w-1/2" handleClick={() => setStep((step) => step + 1)}>View</Continue>
            </div>
        </div>
     );
}
 
export default RequestSent;