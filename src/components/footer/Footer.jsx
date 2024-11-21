import footerLinks from "./footerLinks";
import { GrTwitter, GrLinkedinOption, GrYoutube } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className=" bg-DarkMode pt-[5rem]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[2rem] mt-[90px] px-5 md:px-0 ">
          <div>
            <div className="relative h-8 w-32">
              <a href="/">
                <img className=" h-full " src="./Logo.svg" alt="E-vent" />
              </a>
            </div>
            <p className=" text-[#F2F9FC] mt-8">hello@e-vent.com</p>
          </div>
          {footerLinks.map(({ id, heading, list }) => {
            return (
              <div key={id} className="text-white  ">
                <div className="text-xl font-medium">{heading}</div>
                <div className="flex flex-col gap-[16px] mt-7 list-none">
                  {list.map((listItem, i) => (
                    <li key={i} className="  text-darkModeText text-base">
                      {listItem}
                    </li>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white w-full h-[1px] mt-10"></div>
        <div className="text-darkModeText font-normal py-11  md:flex justify-between px-5 md:px-0">
          <div className="md:flex gap-5 ">
            <div className="flex gap-4 text-3xl pb-4 md:pb-0">
              <GrTwitter />
              <GrLinkedinOption />
              <FaFacebookSquare />
              <GrYoutube />
            </div>
            <div className="flex gap-5 pb-4 md:pb-0">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
          <p>&copy; 2023 E-vent All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
