import { FiCheck } from "react-icons/fi";

const Steps = ({ 
    steps, 
    step: current
}) => {
    return (
        <div className="flex justify-center text-[#55656F] gap-2 items-start mb-10 w-full">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`bg-white relative flex gap-2 justify-center items-center w-1/2
                ${current === i + 1 && "steps-active"} 
                ${(i + 1 < current) && "steps-done"}
              `}
            >
              <div 
                className={`w-8 h-8 z-20 flex items-center justify-center relative rounded-full step-sub border
                    ${(i + 1 < current) && "bg-Blue text-white"}
                    ${(current === i + 1) && "border-Blue text-Blue"}
                `}
              >
                {i + 1 < current ? <FiCheck /> : i + 1}
              </div>
    
              <p className={`text-center z-20 ${(i + 1 < current || current === i + 1) && "text-Blue"}`}>
                {step}
              </p>

              {/* <div className={`h-1 bg-gray-500 ${step === "Review" && "hidden"}`}/> */}
            </div>
          ))}
        </div>
      )
}
 
export default Steps;
