const Hero = () => {
  return (
    <div className="bg-heroBg flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col gap-[20px] pl-5 pr-5 md:pr-0 md:pl-[100px] relative">
        <h1 className="text-3xl md:text-5xl font-bold leading-[40px]  md:leading-[60px] ">
          Digitalized <span className="text-primaryCol">end-to-end</span>
          <br />
          solution for event <br />
          <span className="text-primaryCol">planning</span>
        </h1>
        <img
          src="./images/hero-svg.png"
          alt=""
          className="absolute w-7 top-[80px] md:top-[120px] left-[150px] md:left-[295px]"
        />
        <p className=" text-bodyText font-normal text-xl">
          Streamline planning, save time and deliver unforgettable
          <br />
          experiences for events
        </p>
      </div>
      <div className="relative h-[506px] w-[95%] md:w-[620px] mt-[40px] bg-[url('/images/hero-img.png')] bg-cover mx-auto md:mx-0">
        <div className=" absolute z-25 top-[10%] left-[10%] ">
          <img src="./images/eventCenter.png" alt="" />
          <img
            className="absolute top-[-.7rem]  left-[-.5rem]"
            src="./images/arrowEvent.png"
            alt=""
          />
        </div>
        <div className=" absolute z-10 top-[27.5%] left-[40%] ">
          <img src="./images/security.png" alt="" />
          <img
            className="absolute top-[-.7rem]  right-[-.5rem]"
            src="./images/arrowSecurity.png"
            alt=""
          />
        </div>
        <div className=" absolute z-10 top-[50.5%] right-[15.8%]">
          <img src="./images/decorator.png" alt="" />
          <img
            className="absolute top-[-.7rem]  left-[-.5rem]"
            src="./images/arrowDecorator.png"
            alt=""
          />
        </div>
        <div className=" absolute z-10 top-[54.5%] left-[20%]">
          <img src="./images/eventRental.png" alt="" />
          <img
            className="absolute top-[-.9rem]  left-[-.5rem]"
            src="./images/arrowEventRental.png"
            alt=""
          />
        </div>
        <div className=" absolute z-10 bottom-[17%] left-[21.5%]">
          <img src="./images/catering.png" alt="" />
          <img
            className="absolute bottom-[-.7rem]  right-[-.5rem]"
            src="./images/arrowCatering.png"
            alt=""
          />
        </div>
        <div className=" absolute z-10 bottom-[9.5%] right-[2%]">
          <img src="./images/photography.png" alt="" />
          <img
            className="absolute top-[-.7rem]  right-[-.5rem]"
            src="./images/arrowPhotography.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
