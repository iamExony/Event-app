import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NextButton, PrevButton } from "../components/Button";

import { register } from "swiper/element/bundle";
import { useRef } from "react";
import MultiSpecReceipt from "../components/MultiSpecReceipt";
import SingleSpecReceipt from "../components/SingleSpecReceipt";

register();

function PreviewInvoice({ specifications, currentStep, setComplete, setCurrentStep, steps }) {
  const swiperElRef = useRef(null);

   //Handle continue
   function handleCreateInvoice() {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  }

  return (
    <>
      <swiper-container ref={swiperElRef} slides-per-view="1" navigation="true">
        <swiper-slide>
          <MultiSpecReceipt specifications={specifications} />
        </swiper-slide>
        {specifications.map((specification) => (
          <swiper-slide key={specification.id}>
            <SingleSpecReceipt specification={specification} />
          </swiper-slide>
        ))}
      </swiper-container>

      <div
        className="absolute top-[500px] right-[180px] z-10 rounded-full border border-formColor hidden md:flex justify-center items-center  shadow-md shadow-formColor cursor-pointer w-8 h-8"
        onClick={() => swiperElRef.current.swiper.slideNext()}
      >
        <BsChevronRight />
      </div>
      <div
        className="absolute top-[500px] left-[180px] z-10 rounded-full border border-formColor hidden md:flex justify-center items-center  shadow-md shadow-formColor cursor-pointer w-8 h-8"
        onClick={() => swiperElRef.current.swiper.slidePrev()}
      >
        <BsChevronLeft />
      </div>

      <div className="flex flex-col gap-8 md:absolute top-[218px] mt-4 md:mt-0 right-12 md:w-[170px] z-10">
        <NextButton
          onClick={handleCreateInvoice}
          className={"border-2 border-primaryCol"}
        >
          Create Invoice(s)
        </NextButton>
        <PrevButton
          onClick={() => {
           
          }}
          className={"w-[150px]"}
        >
          Download
        </PrevButton>
        <PrevButton
          onClick={() => {
            setCurrentStep((prev) => prev - 2);

          }}
          className={"w-[150px]"}
        >
          Edit
        </PrevButton>
      </div>
    </>
  );
}

export default PreviewInvoice;
