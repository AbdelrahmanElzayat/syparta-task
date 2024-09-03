"use client";
import React, { useState } from "react";
import Image from "next/image";
// import profilePic from "../../assets/images/avatar.png";
import { useGetUserProfileQuery } from "../redux/profile-reducer/profile";
import { useDispatch } from "react-redux";
import { clearToken } from "../redux/auth-reducer/authSlice";
import { useRouter } from "next/navigation";

const HeaderProfile = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGetUserProfileQuery();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(clearToken());
    router.push("/login");
  };

  return (
    <div className="relative ml-auto">
      <div className="flex items-center gap-8">
        <button className="p-3 flex justify-center items-center rounded-xl overflow-hidden focus:outline-none bg-[#A2A1A81A]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.67964 8.79403C6.05382 5.49085 8.77095 3 12 3C15.2291 3 17.9462 5.49085 18.3204 8.79403L18.6652 11.8385C18.7509 12.595 19.0575 13.3069 19.5445 13.88C20.5779 15.0964 19.7392 17 18.1699 17H5.83014C4.26081 17 3.42209 15.0964 4.45549 13.88C4.94246 13.3069 5.24906 12.595 5.33476 11.8385L5.67964 8.79403Z"
              stroke="#16151C"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M15 19C14.5633 20.1652 13.385 21 12 21C10.615 21 9.43668 20.1652 9 19"
              stroke="#16151C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          onClick={toggleDropdown}
          className="w-15 h-15 rounded-full overflow-hidden focus:outline-none"
        >
          <Image
            src={data?.image ?? ""}
            alt="ProfilePicture"
            width={60}
            height={60}
            className="object-cover w-[60px] h-[60px]"
          />
        </button>
      </div>

      {isDropdownOpen && (
        <ul className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <li
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeaderProfile;
