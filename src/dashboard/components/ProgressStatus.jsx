import React from 'react'
import { HiCheck } from 'react-icons/hi'

const ProgressStatus = ({ step, setStep }) => {
  return (
    <div
      className={`flex relative  justify-between w-full mb-10 after:absolute after:w-[90%] after:h-[2px] after:bg-[#2d2c2c66] after:top-3 after:-z-20 after:left-11 before:absolute ${
        step > 2 && 'before:w-[90%]'
      } ${
        step === 2 && 'before:w-[45%]'
      } before:h-[2px] before:bg-primaryColC before:top-3 before:left-11 before:-z-10`}
    >
      <button
        className="flex items-center flex-col font-semibold"
        onClick={() => setStep(1)}
      >
        <span className=" text-sm w-6 h-6 rounded-full grid items-center bg-primaryColC text-white">
          {step > 1 ? <HiCheck size={24} /> : '1'}
        </span>
        <span className="w-28 text-center text-primaryColC">
          Cancellation policy
        </span>
      </button>
      <button
        className="flex items-center flex-col font-semibold"
        onClick={() => setStep(2)}
      >
        <span
          className={` text-sm w-6 h-6 rounded-full grid items-center ${
            step >= 2
              ? 'bg-primaryColC text-white rounded-full'
              : 'bg-white border border-[#2d2c2c66]'
          } `}
        >
          {step > 2 ? <HiCheck size={24} /> : '2'}
        </span>
        <span
          className={`w-28 text-center ${
            step >= 2 ? 'text-primaryColC' : 'text-black'
          }`}
        >
          Payment Schedule
        </span>
      </button>
      <button
        className="flex items-center flex-col font-semibold"
        onClick={() => setStep(3)}
      >
        <span
          className={` text-sm w-6 h-6 rounded-full grid items-center ${
            step >= 3
              ? 'bg-primaryColC text-white rounded-full'
              : 'bg-white border border-[#2d2c2c66]'
          } `}
        >
          {step > 3 ? <HiCheck size={24} /> : '3'}
        </span>
        <span
          className={`w-28 text-center ${
            step >= 3 ? 'text-primaryColC' : 'text-black'
          }`}
        >
          Summary
        </span>
      </button>
    </div>
  )
}

export default ProgressStatus
