import { BiSolidError } from "react-icons/bi";

const ErrorMessage = ({ response }) => {
  return (
    <div className="rounded-md py-4 px-10 bg-[#F8D7DA] flex gap-2 w-full items-center justify-center">
      <BiSolidError color="rgb(223 54 2)" size={22} />
      <p className=" text-primaryCol text-base ">
        {response.body || response.message}
      </p>
    </div>
  );
};
export default ErrorMessage;
