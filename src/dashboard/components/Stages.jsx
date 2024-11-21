import React from 'react'
import { HiCheck } from 'react-icons/hi'

const ProgressStatus = ({ step, stages }) => {
  return (
    <div
      className={`flex relative  justify-between w-full mb-10 after:absolute after:w-[90%] after:h-[2px] after:bg-[#2d2c2c66] after:top-3 after:-z-20 after:left-11 before:absolute ${
        step > 2 && 'before:w-[90%]'
      } ${
        step === 2 && 'before:w-[45%]'
      } before:h-[2px] before:bg-primaryColC before:top-3 before:left-11 before:-z-10`}
    >
      {stages.map((stage, i) => {
        const id = i + 1
        return (
          <button key={i} className="flex items-center flex-col font-semibold">
            <span
              className={`text-sm w-6 h-6 rounded-full grid items-center ${
                step >= id
                  ? 'bg-primaryColC text-white rounded-full'
                  : 'bg-white border border-[#2d2c2c66]'
              } `}
            >
              {step > id ? <HiCheck size={24} /> : id}
            </span>
            <span
              className={`w-28 text-center ${
                step >= id ? 'text-primaryColC' : 'text-[#4b4b4b]'
              }`}
            >
              {stage}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default ProgressStatus
