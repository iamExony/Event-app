import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight, GoInfo } from "react-icons/go";
import { MdCheck } from "react-icons/md";


function ProfileSettings() {
  const [display, setDisplay] = useState("profile");
  // const navigate = useNavigate()
  let [facilities, setFacilities] = useState([""]);
  let [invitee, setInvitee] = useState([''])
  const[addCollaborator, setAddCollaborator] = useState(false)
  const [openedRow, setOpenedRow] = useState(null);

  // const [accessPrescriptions, setAccessPrescriptions] = useState(false)
  // const [accessPatients, setAccessPatients] = useState(false)
  // const [accessAppointments, setAccessAppointments] = useState(false)
  // const [accessBilling, setAccessBilling] = useState(false)
  // const [accessPartners, setAccessPartners] = useState(false)
  // const [accessInventory, setAccessInventory] = useState(false)

  const test = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    isOpen: false,
    accessEventSourcing: false,
    accessPlanner: false,
    accessBackoffice: false,
    accessCRM: false,
  }));
  const [data, setData] = useState(test);

  function grantOrRmvAccess(id) {
    
        // if(id === data.id){
        //   return  {...data, 
        //     data.accessEventSourcing: !data.accessEventSourcing}
        // }
        // ...data, accessEventSourcing: id === data.id ? true : false };
  }

  const dropdownRef = useRef(null);

  const toggleDropdown = (itemId) => {
    setData((prevReport) =>
      prevReport.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        }
        return {
          ...item,
          isOpen: false, // Close dropdown for other items
        };
      })
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setData((prevReport) =>
          prevReport.map((item) => ({
            ...item,
            isOpen: false,
          }))
        );
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
 

      <div className=" p-[1.3rem] border-2 border-t-0 rounded-md shadow shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.17)] flex justify-start gap-8">
        <div className="border-r-2 border-slate-300 w-[24rem] flex flex-col items-start">
          <div className="w-[22.1875rem] h-[14.5625rem] rounded-[1.25rem] bg-primaryColC flex flex-col items-center gap-4 p-3 mr-3">
            <div className="flex items-center gap-3 ">
              <div className="w-[7.6875rem] h-[7.6875rem]">
                {/* <CircularProgress size={"lg"} determinate value={75} >75</CircularProgress> */}
                <CircularProgressbar
                  value={75}
                  text="75%"
                  styles={buildStyles({
                    textSize: "2.25rem",
                    trailColor: "rgba(255, 255, 255, 0.19)",
                    backgroundColor: "rgba(255, 255, 255, 0.19)",
                    pathColor: "white",
                    textColor: "white",
                  })}
                />
              </div>
              <div className="text-base text-white w-[11.75rem]">
                Complete you profile information to unlock all features
              </div>
            </div>

            <button className="bg-white text-primaryColC  rounded-full w-[19.3125rem] h-[3.125rem] font-medium text-base">
              {" "}
              complete my profile
            </button>
          </div>

          {/* Profile */}
          <div
            onClick={() => setDisplay("profile")}
            className="flex gap-4 items-center w-full border-b-2 pb-2 mt-16 cursor-pointer"
          >
            <span>
              {display === "profile" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
            <p
              className={`w-[80%]  text-base font-medium ${
                display === "profile" ? "text-primaryColC" : "text-[#4F4F4F]"
              }`}
            >
              Profile
            </p>
            <span>
              {display === "profile" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
          </div>

          {/* Address */}
          {/* <div
            onClick={() => setDisplay("address")}
            className="flex gap-4 items-center w-full border-b-2 pb-2 mt-16 cursor-pointer"
          >
            <span>
              {display === "address" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="#EA7956"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#EA7956"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="#4F4F4F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#4F4F4F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </span>
            <p
              className={`w-[80%]  text-base font-medium ${
                display === "address" ? "text-primaryColC" : "text-[#4F4F4F]"
              }`}
            >
              Address
            </p>
            <span>
              {display === "address" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
          </div> */}

          {/* Password */}
          <div
            onClick={() => setDisplay("password")}
            className="flex gap-4 items-center w-full border-b-2 pb-2 mt-16 cursor-pointer"
          >
            <span>
              {display === "password" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 16C9 16.2652 8.89464 16.5196 8.70711 16.7071C8.51957 16.8946 8.26522 17 8 17C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15C8.26522 15 8.51957 15.1054 8.70711 15.2929C8.89464 15.4804 9 15.7348 9 16ZM13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16ZM16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16C17 15.7348 16.8946 15.4804 16.7071 15.2929C16.5196 15.1054 16.2652 15 16 15C15.7348 15 15.4804 15.1054 15.2929 15.2929C15.1054 15.4804 15 15.7348 15 16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17Z"
                    fill="#EA7956"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.25 8V9.303C5.023 9.319 4.81 9.339 4.608 9.367C3.708 9.487 2.95 9.747 2.348 10.348C1.746 10.95 1.488 11.708 1.367 12.608C1.25 13.475 1.25 14.578 1.25 15.945V16.055C1.25 17.422 1.25 18.525 1.367 19.392C1.487 20.292 1.747 21.05 2.348 21.652C2.95 22.254 3.708 22.512 4.608 22.634C5.475 22.75 6.578 22.75 7.945 22.75H16.055C17.422 22.75 18.525 22.75 19.392 22.634C20.292 22.512 21.05 22.254 21.652 21.652C22.254 21.05 22.512 20.292 22.634 19.392C22.75 18.525 22.75 17.422 22.75 16.055V15.945C22.75 14.578 22.75 13.475 22.634 12.608C22.512 11.708 22.254 10.95 21.652 10.348C21.05 9.746 20.292 9.488 19.392 9.367C19.1787 9.33891 18.9646 9.31757 18.75 9.303V8C18.75 6.20979 18.0388 4.4929 16.773 3.22703C15.5071 1.96116 13.7902 1.25 12 1.25C10.2098 1.25 8.4929 1.96116 7.22703 3.22703C5.96116 4.4929 5.25 6.20979 5.25 8ZM12 2.75C10.6076 2.75 9.27225 3.30312 8.28769 4.28769C7.30312 5.27225 6.75 6.60761 6.75 8V9.253C7.123 9.25 7.522 9.25 7.945 9.25H16.055C16.478 9.25 16.877 9.25 17.25 9.253V8C17.25 5.1 14.9 2.75 12 2.75ZM4.808 10.853C4.074 10.952 3.686 11.133 3.409 11.409C3.132 11.686 2.952 12.074 2.853 12.809C2.752 13.564 2.75 14.565 2.75 16C2.75 17.435 2.752 18.436 2.853 19.192C2.952 19.926 3.133 20.314 3.409 20.591C3.686 20.868 4.074 21.048 4.809 21.147C5.563 21.248 6.565 21.25 8 21.25H16C17.435 21.25 18.436 21.248 19.192 21.147C19.926 21.048 20.314 20.867 20.591 20.591C20.868 20.314 21.048 19.926 21.147 19.191C21.248 18.436 21.25 17.435 21.25 16C21.25 14.565 21.248 13.563 21.147 12.808C21.048 12.074 20.867 11.686 20.591 11.409C20.314 11.132 19.926 10.952 19.191 10.853C18.436 10.752 17.435 10.75 16 10.75H8C6.565 10.75 5.563 10.752 4.808 10.853Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 16C9 16.2652 8.89464 16.5196 8.70711 16.7071C8.51957 16.8946 8.26522 17 8 17C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15C8.26522 15 8.51957 15.1054 8.70711 15.2929C8.89464 15.4804 9 15.7348 9 16ZM13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16ZM16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16C17 15.7348 16.8946 15.4804 16.7071 15.2929C16.5196 15.1054 16.2652 15 16 15C15.7348 15 15.4804 15.1054 15.2929 15.2929C15.1054 15.4804 15 15.7348 15 16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17Z"
                    fill="#4F4F4F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.25 8V9.303C5.023 9.319 4.81 9.339 4.608 9.367C3.708 9.487 2.95 9.747 2.348 10.348C1.746 10.95 1.488 11.708 1.367 12.608C1.25 13.475 1.25 14.578 1.25 15.945V16.055C1.25 17.422 1.25 18.525 1.367 19.392C1.487 20.292 1.747 21.05 2.348 21.652C2.95 22.254 3.708 22.512 4.608 22.634C5.475 22.75 6.578 22.75 7.945 22.75H16.055C17.422 22.75 18.525 22.75 19.392 22.634C20.292 22.512 21.05 22.254 21.652 21.652C22.254 21.05 22.512 20.292 22.634 19.392C22.75 18.525 22.75 17.422 22.75 16.055V15.945C22.75 14.578 22.75 13.475 22.634 12.608C22.512 11.708 22.254 10.95 21.652 10.348C21.05 9.746 20.292 9.488 19.392 9.367C19.1787 9.33891 18.9646 9.31757 18.75 9.303V8C18.75 6.20979 18.0388 4.4929 16.773 3.22703C15.5071 1.96116 13.7902 1.25 12 1.25C10.2098 1.25 8.4929 1.96116 7.22703 3.22703C5.96116 4.4929 5.25 6.20979 5.25 8ZM12 2.75C10.6076 2.75 9.27225 3.30312 8.28769 4.28769C7.30312 5.27225 6.75 6.60761 6.75 8V9.253C7.123 9.25 7.522 9.25 7.945 9.25H16.055C16.478 9.25 16.877 9.25 17.25 9.253V8C17.25 5.1 14.9 2.75 12 2.75ZM4.808 10.853C4.074 10.952 3.686 11.133 3.409 11.409C3.132 11.686 2.952 12.074 2.853 12.809C2.752 13.564 2.75 14.565 2.75 16C2.75 17.435 2.752 18.436 2.853 19.192C2.952 19.926 3.133 20.314 3.409 20.591C3.686 20.868 4.074 21.048 4.809 21.147C5.563 21.248 6.565 21.25 8 21.25H16C17.435 21.25 18.436 21.248 19.192 21.147C19.926 21.048 20.314 20.867 20.591 20.591C20.868 20.314 21.048 19.926 21.147 19.191C21.248 18.436 21.25 17.435 21.25 16C21.25 14.565 21.248 13.563 21.147 12.808C21.048 12.074 20.867 11.686 20.591 11.409C20.314 11.132 19.926 10.952 19.191 10.853C18.436 10.752 17.435 10.75 16 10.75H8C6.565 10.75 5.563 10.752 4.808 10.853Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
            <p
              className={`w-[80%]  text-base font-medium ${
                display === "password" ? "text-primaryColC" : "text-[#4F4F4F]"
              }`}
            >
              Password
            </p>
            <span>
              {display === "password" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
          </div>
          {/* Permissions */}
          <div
            onClick={() => setDisplay("permissions")}
            className="flex gap-4 items-center w-full border-b-2 pb-2 mt-16 cursor-pointer"
          >
            <span>
              {display === "permissions" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.6316 16.5881C20.101 15.675 19.3126 13.0997 19.3126 9.75C19.3126 7.8106 18.5422 5.95064 17.1708 4.57928C15.7994 3.20792 13.9395 2.4375 12.0001 2.4375C10.0607 2.4375 8.20073 3.20792 6.82937 4.57928C5.45801 5.95064 4.68758 7.8106 4.68758 9.75C4.68758 13.1006 3.89821 15.675 3.36758 16.5881C3.25116 16.7875 3.18938 17.014 3.18849 17.2449C3.18759 17.4758 3.2476 17.7028 3.36247 17.903C3.47734 18.1033 3.643 18.2697 3.84274 18.3855C4.04247 18.5013 4.26922 18.5623 4.50008 18.5625H8.48258C8.61921 19.3964 9.04778 20.1545 9.69177 20.7016C10.3358 21.2486 11.1532 21.549 11.9982 21.549C12.8432 21.549 13.6607 21.2486 14.3047 20.7016C14.9486 20.1545 15.3772 19.3964 15.5138 18.5625H19.5001C19.7308 18.562 19.9573 18.5007 20.1568 18.3848C20.3562 18.2689 20.5216 18.1024 20.6363 17.9022C20.7509 17.702 20.8108 17.4751 20.8098 17.2444C20.8088 17.0137 20.7471 16.7874 20.6307 16.5881H20.6316ZM12.0001 20.4375C11.4516 20.4373 10.9191 20.2521 10.4889 19.9119C10.0586 19.5716 9.75573 19.0962 9.62915 18.5625H14.371C14.2444 19.0962 13.9415 19.5716 13.5113 19.9119C13.081 20.2521 12.5486 20.4373 12.0001 20.4375ZM19.6604 17.3438C19.645 17.3725 19.6219 17.3964 19.5938 17.4129C19.5657 17.4295 19.5336 17.438 19.501 17.4375H4.50008C4.46748 17.438 4.43538 17.4295 4.40728 17.4129C4.37918 17.3964 4.35615 17.3725 4.34071 17.3438C4.32425 17.3152 4.31559 17.2829 4.31559 17.25C4.31559 17.2171 4.32425 17.1848 4.34071 17.1562C5.0504 15.9375 5.81258 13.0959 5.81258 9.75C5.81258 8.10897 6.46448 6.53516 7.62486 5.37478C8.78524 4.2144 10.3591 3.5625 12.0001 3.5625C13.6411 3.5625 15.2149 4.2144 16.3753 5.37478C17.5357 6.53516 18.1876 8.10897 18.1876 9.75C18.1876 13.095 18.9507 15.9328 19.6604 17.1562C19.6769 17.1848 19.6855 17.2171 19.6855 17.25C19.6855 17.2829 19.6769 17.3152 19.6604 17.3438Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.6316 16.5881C20.101 15.675 19.3126 13.0997 19.3126 9.75C19.3126 7.8106 18.5422 5.95064 17.1708 4.57928C15.7994 3.20792 13.9395 2.4375 12.0001 2.4375C10.0607 2.4375 8.20073 3.20792 6.82937 4.57928C5.45801 5.95064 4.68758 7.8106 4.68758 9.75C4.68758 13.1006 3.89821 15.675 3.36758 16.5881C3.25116 16.7875 3.18938 17.014 3.18849 17.2449C3.18759 17.4758 3.2476 17.7028 3.36247 17.903C3.47734 18.1033 3.643 18.2697 3.84274 18.3855C4.04247 18.5013 4.26922 18.5623 4.50008 18.5625H8.48258C8.61921 19.3964 9.04778 20.1545 9.69177 20.7016C10.3358 21.2486 11.1532 21.549 11.9982 21.549C12.8432 21.549 13.6607 21.2486 14.3047 20.7016C14.9486 20.1545 15.3772 19.3964 15.5138 18.5625H19.5001C19.7308 18.562 19.9573 18.5007 20.1568 18.3848C20.3562 18.2689 20.5216 18.1024 20.6363 17.9022C20.7509 17.702 20.8108 17.4751 20.8098 17.2444C20.8088 17.0137 20.7471 16.7874 20.6307 16.5881H20.6316ZM12.0001 20.4375C11.4516 20.4373 10.9191 20.2521 10.4889 19.9119C10.0586 19.5716 9.75573 19.0962 9.62915 18.5625H14.371C14.2444 19.0962 13.9415 19.5716 13.5113 19.9119C13.081 20.2521 12.5486 20.4373 12.0001 20.4375ZM19.6604 17.3438C19.645 17.3725 19.6219 17.3964 19.5938 17.4129C19.5657 17.4295 19.5336 17.438 19.501 17.4375H4.50008C4.46748 17.438 4.43538 17.4295 4.40728 17.4129C4.37918 17.3964 4.35615 17.3725 4.34071 17.3438C4.32425 17.3152 4.31559 17.2829 4.31559 17.25C4.31559 17.2171 4.32425 17.1848 4.34071 17.1562C5.0504 15.9375 5.81258 13.0959 5.81258 9.75C5.81258 8.10897 6.46448 6.53516 7.62486 5.37478C8.78524 4.2144 10.3591 3.5625 12.0001 3.5625C13.6411 3.5625 15.2149 4.2144 16.3753 5.37478C17.5357 6.53516 18.1876 8.10897 18.1876 9.75C18.1876 13.095 18.9507 15.9328 19.6604 17.1562C19.6769 17.1848 19.6855 17.2171 19.6855 17.25C19.6855 17.2829 19.6769 17.3152 19.6604 17.3438Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
            <p
              className={`w-[80%]  text-base font-medium ${
                display === "permissions" ? "text-primaryColC" : "text-[#4F4F4F]"
              }`}
            >
              Permissions
            </p>
            <span>
              {display === "permissions" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
          </div>

          {/* Appearance */}
          <div
            onClick={() => setDisplay("appearance")}
            className="flex gap-4 items-center w-full  pb-2 mt-16 cursor-pointer"
          >
            <span>
              {display === "appearance" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 6.5C13.8387 6.49389 15.6419 7.00678 17.2021 7.97973C18.7624 8.95267 20.0164 10.3462 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C3.98362 10.3462 5.23763 8.95267 6.79788 7.97973C8.35813 7.00678 10.1613 6.49389 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C12.663 9.5 13.2989 9.76339 13.7678 10.2322C14.2366 10.7011 14.5 11.337 14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5C11.337 14.5 10.7011 14.2366 10.2322 13.7678C9.76339 13.2989 9.5 12.663 9.5 12C9.5 11.337 9.76339 10.7011 10.2322 10.2322C10.7011 9.76339 11.337 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 6.5C13.8387 6.49389 15.6419 7.00678 17.2021 7.97973C18.7624 8.95267 20.0164 10.3462 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C3.98362 10.3462 5.23763 8.95267 6.79788 7.97973C8.35813 7.00678 10.1613 6.49389 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C12.663 9.5 13.2989 9.76339 13.7678 10.2322C14.2366 10.7011 14.5 11.337 14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5C11.337 14.5 10.7011 14.2366 10.2322 13.7678C9.76339 13.2989 9.5 12.663 9.5 12C9.5 11.337 9.76339 10.7011 10.2322 10.2322C10.7011 9.76339 11.337 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
            <p
              className={`w-[80%]  text-base font-medium ${
                display === "appearance" ? "text-primaryColC" : "text-[#4F4F4F]"
              }`}
            >
              Appearance
            </p>
            <span>
              {display === "appearance" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#EA7956"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M10.6528 8.64502L3.8152 15.2856C3.3426 15.7446 2.57839 15.7446 2.11082 15.2856L0.974567 14.1821C0.501967 13.7231 0.501967 12.981 0.974567 12.5269L5.82123 7.81982L0.974567 3.11279C0.501967 2.65381 0.501967 1.91162 0.974567 1.45752L2.10579 0.344238C2.57839 -0.114746 3.3426 -0.114746 3.81017 0.344238L10.6478 6.98486C11.1254 7.44385 11.1254 8.18604 10.6528 8.64502Z"
                    fill="#4F4F4F"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-full pr-12">
          <div className="flex gap-6">
            <div>
              <img src="/public/images/profilePic.png" alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-base font-medium">Profile logo</h5>
              <p className="text-[0.8125rem] font-light">
                600 X600 or larger recommended
              </p>
              {display !== "address" && (
                <button className="w-[8.375rem] h-[2.375rem] shrink-0 bg-primaryColC text-white text-base font-normal rounded-full">
                  Upload Photo
                </button>
              )}
            </div>
          </div>

          {/* Personal Details */}
          {display === "profile" && (
            <div>
              <h5 className="text-base font-medium">Personal Details</h5>

              <form action="" className="my-10 grid grid-cols-2 gap-3 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstname" className="text-sm font-normal">
                    First name
                  </label>
                  <input
                    name="firstname"
                    type="text"
                    className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastname" className="text-sm font-normal">
                    Last name
                  </label>
                  <input
                    name="lastname"
                    type="text"
                    className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-normal">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phonenumber" className="text-sm font-normal">
                    Phone number
                  </label>
                  <input
                    name="phonenumber"
                    type="text"
                    className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="state" className="text-sm font-normal">
                    State
                  </label>
                  <input
                    name="state"
                    type="text"
                    className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="text-sm font-normal">
                    Address
                  </label>
                  <input
                    name="address"
                    type="text"
                    className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                  />
                </div>
              </form>

              <div className="flex justify-center items-center gap-2 mt-24">
                <button className="w-[11.875rem] h-[2.8125rem] shrink-0 rounded-full border-[1px]  border-[#FE370C] text-sm font-normal ">
                  Discard Changes
                </button>
                <button className="w-[11.875rem] h-[2.8125rem] shrink-0 rounded-full border-[1px]  border-[#049561] text-sm font-normal ">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Address */}
          {/* {display === "address" && (
            <div>
              <div className="flex justify-between items-center  w-[38.4375rem]">
                <h5 className="text-base font-medium">Address</h5>
                <button
                  className="w-[11.6875rem] h-[2.375rem] shrink-0 bg-primaryColC text-white text-base font-normal rounded-full"
                  onClick={() => setFacilities([...facilities, ""])}
                >
                  Add another facility
                </button>
              </div>

              <div className="h-[450px] overflow-auto">
                {facilities.map((_, i) => (
                  <form
                    action=""
                    className="my-10 grid grid-cols-2 gap-3 gap-y-6 w-[38.4375rem] h-[20.25rem] shrink-0 border p-3 pt-10"
                    key={i}
                  >
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="facilityname"
                        className="text-sm font-normal"
                      >
                        Facility name
                      </label>
                      <input
                        name="facilityname"
                        type="text"
                        className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="headoffacility"
                        className="text-sm font-normal"
                      >
                        Head of facility
                      </label>
                      <input
                        name="headoffacility"
                        type="text"
                        className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="state" className="text-sm font-normal">
                        State
                      </label>
                      <input
                        name="state"
                        type="text"
                        className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="address" className="text-sm font-normal">
                        Address
                      </label>
                      <input
                        name="address"
                        type="text"
                        className="w-[17.3125rem] h-[4.375rem] shrink-0 border-2 text-base font-light p-2 focus:outline-[#049561]"
                      />
                    </div>
                  </form>
                ))}
              </div>

              <div className="flex justify-center items-center gap-2 mt-24">
                <button className="w-[11.875rem] h-[2.8125rem] shrink-0 rounded-full border-[1px]  border-[#FE370C] text-sm font-normal ">
                  Discard Changes
                </button>
                <button className="w-[11.875rem] h-[2.8125rem] shrink-0 rounded-full border-[1px]  border-[#049561] text-sm font-normal ">
                  Save Changes
                </button>
              </div>
            </div>
          )} */}

          {/* Permissions */}
          {display === "permissions" && (
            <div>
              <div className="flex justify-between items-start w-full">
                <div>
                  <h5 className="text-base font-semibold">Collaborators</h5>
                  <p className="text-sm font-normal">
                    Detailed list of collaborators on this practice management
                  </p>
                </div>
                <button
                  className="w-[11.6875rem] h-[2.375rem] shrink-0 bg-primaryColC text-white text-base font-normal rounded-full"
                  onClick={() => 
                  {  document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                    setAddCollaborator(true)}}
                >
                  Add new collaborators
                </button>
              </div>

              <div className="flex gap-3 justify-between my-6 relative ">
                <FaSearch
                  size={15}
                  className="absolute top-[50%] -translate-y-[50%] left-3 text-[#ccc] lowercase"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="w-[27.6875rem] h-[2.5rem] p-3 pl-10 focus:outline-none bg-[#F9F9F9] rounded-full"
                />
                <button className="w-[8.5rem] h-[2.625rem] flex items-center justify-center gap-2 text-primaryColC border-primaryColC border rounded-full">
                  <img src={"filterIcon"} alt="" /> Filter
                </button>
              </div>

              <div className=" border-2 shadow-md rounded-[0.5rem] w-full border-slate-500">
                {/* Table Head */}
                <div className="bg-primaryColC rounded-t-[0.5rem] text-white flex justify-between gap-3 px-6 py-3 text-sm font-medium leading-[1.125rem]">
                  <span className="w-[35%] pl-12">Name</span>
                  <span className="w-[20%]  flex gap-2 items-center">
                    Role{" "}
                    <AiOutlineQuestionCircle className="text-white" size={15} />
                  </span>
                  <span className="w-[35%] "> Email address</span>
                  <span className="w-[10%] "></span>
                </div>

                {/* Table Body */}

                <div className="flex flex-col h-[367px] overflow-auto">
                  {data.map((data, i) => (
                    <div className="border-b-2 border-slate-600 py-3 px-6">
                      <div
                        className="flex justify-between items-center text-sm  gap-3   cursor-pointer"
                       
                      >
                        <div className="w-[35%] flex gap-2 items-center text-sm font-normal leading-[1.125rem] ">
                          <span>
                            <input
                              type="checkbox"
                              className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#EA7956 h-5 w-5 border-4 border-[#4F4F4F] rounded-md mr-2"
                            />
                          </span>{" "}
                          <span className="w-12 h-12 border-2 border-primaryColC bg-white text-primaryColC rounded-full flex items-center justify-center text-base font-semibold">
                            JE
                          </span>{" "}
                          <span>Joseph Emmanuel </span>
                        </div>
                        <span className="w-[20%]  ">Admin</span>
                        <span className="w-[35%] ">adetunji@gmail.com</span>
                        <div className="w-[10%] " ref={dropdownRef}>
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown(data.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4Z"
                                fill="#4F4F4F"
                              />
                            </svg>
                          </span>
                          {data.isOpen && (
                            <div className=" absolute p-3 flex flex-col gap-2 bg-white shadow-md rounded-md w-[140px] -mt-10">
                              <p className="flex gap-1 items-center text-xs ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M8 9.12L10.32 11.44C10.4667 11.5867 10.6533 11.66 10.88 11.66C11.1067 11.66 11.2933 11.5867 11.44 11.44C11.5867 11.2933 11.66 11.1067 11.66 10.88C11.66 10.6533 11.5867 10.4667 11.44 10.32L9.12 8L11.44 5.68C11.5867 5.53333 11.66 5.34667 11.66 5.12C11.66 4.89333 11.5867 4.70667 11.44 4.56C11.2933 4.41333 11.1067 4.34 10.88 4.34C10.6533 4.34 10.4667 4.41333 10.32 4.56L8 6.88L5.68 4.56C5.53333 4.41333 5.34667 4.34 5.12 4.34C4.89333 4.34 4.70667 4.41333 4.56 4.56C4.41333 4.70667 4.34 4.89333 4.34 5.12C4.34 5.34667 4.41333 5.53333 4.56 5.68L6.88 8L4.56 10.32C4.41333 10.4667 4.34 10.6533 4.34 10.88C4.34 11.1067 4.41333 11.2933 4.56 11.44C4.70667 11.5867 4.89333 11.66 5.12 11.66C5.34667 11.66 5.53333 11.5867 5.68 11.44L8 9.12ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9493 3.06 14.3795 2.34 13.66C1.62 12.94 1.05013 12.0933 0.6304 11.12C0.210667 10.1467 0.000533333 9.10667 0 8C0 6.89333 0.210133 5.85333 0.6304 4.88C1.05067 3.90667 1.62053 3.06 2.34 2.34C3.06 1.62 3.90667 1.05013 4.88 0.6304C5.85333 0.210667 6.89333 0.000533333 8 0C9.10667 0 10.1467 0.210133 11.12 0.6304C12.0933 1.05067 12.94 1.62053 13.66 2.34C14.38 3.06 14.9501 3.90667 15.3704 4.88C15.7907 5.85333 16.0005 6.89333 16 8C16 9.10667 15.7899 10.1467 15.3696 11.12C14.9493 12.0933 14.3795 12.94 13.66 13.66C12.94 14.38 12.0933 14.9501 11.12 15.3704C10.1467 15.7907 9.10667 16.0005 8 16ZM8 14.4C9.78667 14.4 11.3 13.78 12.54 12.54C13.78 11.3 14.4 9.78667 14.4 8C14.4 6.21333 13.78 4.7 12.54 3.46C11.3 2.22 9.78667 1.6 8 1.6C6.21333 1.6 4.7 2.22 3.46 3.46C2.22 4.7 1.6 6.21333 1.6 8C1.6 9.78667 2.22 11.3 3.46 12.54C4.7 13.78 6.21333 14.4 8 14.4Z"
                                    fill="#AF290B"
                                  />
                                </svg>
                                Delete
                              </p>
                              <p className="flex gap-1 items-center text-xs ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M0.5 15.5H3.625L12.8417 6.28336L9.71667 3.15836L0.5 12.375V15.5ZM2.16667 13.0667L9.71667 5.51669L10.4833 6.28336L2.93333 13.8334H2.16667V13.0667ZM13.3083 0.741689C13.2312 0.664436 13.1397 0.603147 13.0389 0.561329C12.938 0.519511 12.83 0.497986 12.7208 0.497986C12.6117 0.497986 12.5036 0.519511 12.4028 0.561329C12.302 0.603147 12.2104 0.664436 12.1333 0.741689L10.6083 2.26669L13.7333 5.39169L15.2583 3.86669C15.3356 3.78959 15.3969 3.69802 15.4387 3.59721C15.4805 3.4964 15.502 3.38833 15.502 3.27919C15.502 3.17005 15.4805 3.06198 15.4387 2.96117C15.3969 2.86036 15.3356 2.76878 15.2583 2.69169L13.3083 0.741689Z"
                                    fill="#4F4F4F"
                                  />
                                </svg>
                                Edit
                              </p>

                              <p className="flex gap-1 items-center text-xs  whitespace-nowrap"  onClick={(e) => {
                        //   e.stopPropagation();
                          openedRow === data.id
                            ? setOpenedRow(null)
                            : setOpenedRow(data.id);
                        }}>
                                {/* <div className="border-2 border-gray-500 rounded-full p-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="4"
                                    height="8"
                                    viewBox="0 0 4 8"
                                    fill="none"
                                  >
                                    <path
                                      d="M2.5 7V3H0.5V4H1.5V7H0V8H4V7H2.5ZM2 0C1.85166 0 1.70666 0.0439866 1.58332 0.126398C1.45999 0.208809 1.36386 0.325943 1.30709 0.462987C1.25032 0.600032 1.23547 0.750832 1.26441 0.896318C1.29335 1.0418 1.36478 1.17544 1.46967 1.28033C1.57456 1.38522 1.7082 1.45665 1.85368 1.48559C1.99917 1.51453 2.14997 1.49968 2.28701 1.44291C2.42406 1.38614 2.54119 1.29001 2.6236 1.16668C2.70601 1.04334 2.75 0.898336 2.75 0.75C2.75 0.551088 2.67098 0.360322 2.53033 0.21967C2.38968 0.0790175 2.19891 0 2 0Z"
                                      fill="#4F4F4F"
                                    />
                                  </svg>{" "}
                                  <InfoIcon />
                                </div> */}
                                <GoInfo  size={15}/>
                                Custom access
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      {openedRow === data.id && (
                        <div className="mt-3">
                          <div className="flex text-sm ml-24  my-2">
                            <p className="w-[48%]">Event Sourcing </p>

                                <button className=" relative flex items-center justify-center text-sm gap-2 text-white bg-primaryColC rounded-full w-[9.1875rem] h-[1.9375rem] hover:before:content-['Remove_access'] hover:before:bg-slate-200 hover:before:w-full hover:before:rounded-full hover:before:absolute hover:before:bg-opacity-80 hover:before:h-full hover:before:flex hover:before:justify-center hover:before:items-center hover:before:text-red-500">
                              {" "}
                              <MdCheck /> Access granted
                            </button> 
                          </div>

                          <div className="flex text-sm ml-24  my-2">
                            <p className="w-[48%]">Planner</p>
                            <button className="flex items-center justify-center text-sm gap-2 text-primaryColC bg-transparent border border-primaryColC rounded-full w-[6.125rem] h-[1.9375rem]">
                              {" "}
                              Allow access
                            </button>
                          </div>
                          <div className="flex text-sm ml-24  my-2">
                            <p className="w-[48%]">Back office</p>
                            <button className=" relative flex items-center justify-center text-sm gap-2 text-white bg-primaryColC rounded-full w-[9.1875rem] h-[1.9375rem] hover:before:content-['Grant_access'] hover:before:bg-slate-200 hover:before:w-full hover:before:rounded-full hover:before:absolute hover:before:bg-opacity-80 hover:before:h-full hover:before:flex hover:before:justify-center hover:before:items-center hover:before:text-green-500">
                              {" "}
                              Allow access
                            </button>
                          </div>
                          <div className="flex text-sm ml-24  my-2">
                            <p className="w-[48%]">CRM</p>
                            <button className="flex items-center justify-center text-sm gap-2 text-primaryColC bg-transparent border border-primaryColC rounded-full w-[6.125rem] h-[1.9375rem]">
                              {" "}
                              Allow access
                            </button>
                          </div>
                         
                          <div className="flex items-center gap-12 mt-8 ml-24">
                            <button className="w-[11.875rem] h-[2.8125rem] shrink-0 rounded-full border-[1px]  border-[#FE370C] text-sm font-normal ">
                              Discard Changes
                            </button>
                            <button className="w-[11.875rem] h-[2.8125rem] shrink-0 rounded-full border-[1px]  border-[#049561] text-sm font-normal ">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination */}

                <div className="bg-primaryColC rounded-b-[0.5rem] text-white flex justify-between gap-3 px-6 py-3 text-sm font-medium leading-[1.125rem]">
                  <span className="flex items-center justify-center gap-2 p-3 w-[7.0625rem] bg-white text-black rounded-full cursor-pointer">
                    <GoArrowLeft /> Previous
                  </span>
                  <span className="w-[2.5rem] h-[2.5rem] rounded-full bg-white text-black flex justify-center items-center cursor-pointer">
                    1
                  </span>
                  <span className="w-[2.5rem] h-[2.5rem] rounded-full text-slate-300 flex justify-center items-center cursor-pointer">
                    2
                  </span>
                  <span className="w-[2.5rem] h-[2.5rem] rounded-full text-slate-300 flex justify-center items-center cursor-pointer">
                    3
                  </span>
                  <span className="w-[2.5rem] h-[2.5rem] rounded-full text-slate-300 flex justify-center items-center cursor-pointer">
                    ...
                  </span>

                  <span className="w-[2.5rem] h-[2.5rem] rounded-full text-slate-300 flex justify-center items-center cursor-pointer">
                    8
                  </span>
                  <span className="w-[2.5rem] h-[2.5rem] rounded-full text-slate-300 flex justify-center items-center cursor-pointer">
                    9
                  </span>
                  <span className="w-[2.5rem] h-[2.5rem] rounded-full text-slate-300 flex justify-center items-center cursor-pointer">
                    10
                  </span>

                  <span className="flex items-center justify-center gap-2 p-3 w-[5.5625rem] bg-white text-black rounded-full cursor-pointer">
                    Next <GoArrowRight />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Add collaborators popUp */}
      {addCollaborator &&  <div className="">
          <div className="absolute  w-full h-[1000px] left-0 top-0  backdrop-blur-sm z-10 ">
            <div className=" relative border-2 border-black rounded-xl w-[60rem]  max-h-[500px] overflow-auto left-[50%] -translate-x-[50%] top-[100px] ">
              <div className="bg-primaryColC rounded-t-xl  flex items-center justify-center">
                <h5 className="text-white text-2xl font-bold p-4">
                  Add & invite new collaborators
                </h5>
                <div className="absolute right-4 top-6" onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                setAddCollaborator(false)}}>
                  <FaTimes className="text-slate-200"/>
                </div>
              </div>
              <div className="p-6 bg-white rounded-b-xl  flex flex-col gap-4 items-center">
                {invitee.map((_,i) => <form
                  action=""
                  className="flex justify-between items-start w-[80%] m-auto gap-2 mb-3"
                  key={i}
                >
                  <input
                    type="text"
                    placeholder="Enter collaborator's name"
                    className="border-2 border-slate-200 rounded-md px-3 py-2 text-base focus:outline-primaryColC font-normal w-[15.25rem]"
                  />
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    className="border-2 border-slate-200 rounded-md px-3 py-2 text-base focus:outline-primaryColC font-normal w-[15.25rem]"
                  />
                  <select
                    name=""
                    id=""
                    className="border-2 border-slate-200 rounded-md px-3 py-2 text-base focus:outline-primaryColC font-normal w-[15.25rem]"
                  >
                    <option value="">Select role</option>
                    <option value="Admin">Admin</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Physician">Physician</option>
                    <option value="Laboratory">Laboratory</option>
                    <option value="Patients records">Patients records</option>
                    <option value="Diagonistic imaging">
                      Diagonistic imaging
                    </option>
                    <option value="Others">Others</option>
                  </select>
                  <div>
                    <FaTimes className="text-slate-300" />
                  </div>
                </form>)}

                <button onClick={() => setInvitee([...invitee,''])} className="w-[20rem] border-2 border-dotted border-primaryColC rounded-md  font-medium text-primaryColC p-2">
                  + Invite another collaborator
                </button>

                <div className="flex flex-col gap-4 my-3">
                  <button className="w-[25rem] bg-primaryColC text-white rounded-full p-2 font-semibold text-base">
                    Send Invite
                  </button>
                  <button onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                setAddCollaborator(false)}} className="w-[25rem] bg-[#e1e8ec] text-black rounded-full p-2 font-semibold text-base">
                    Cancel
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default ProfileSettings;
