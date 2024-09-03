"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../assets/images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import {
  // resetUserData,
  // setUserData,
  toggleEditable,
} from "../redux/profile-reducer/profileSlice";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../redux/profile-reducer/profile";
const InfoHeader = () => {
  const dispatch = useDispatch();
  const { isEditable, userData } = useSelector((state) => state.profile);
  const { refetch, data, loading } = useGetUserProfileQuery();

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const handleSave = async () => {
    try {
      await updateUserProfile(userData);
      dispatch(toggleEditable());
    } catch (error) {
      console.error("Failed to save profile", error);
    }
  };

  // const handleCancel = async () => {
  //   try {
  //     await refetch(); // Reload data from the API
  //     dispatch(toggleEditable()); // Switch back to view mode
  //   } catch (error) {
  //     console.error("Failed to fetch profile data", error);
  //   }
  // };

  return (
    <div className="InfoHeader flex flex-col lg:flex-row justify-center lg:justify-start items-start lg:items-end gap-3 pt-[30px] pb-8 mb-10 border-b-[1px] border-b-solid border-b-[#A2A1A833]">
      <div className="InfoHeaderData flex items-center justify-center lg:justify-start gap-4 flex-[1]">
        <Image
          src={data?.image}
          width={100}
          height={100}
          alt="avatar"
          style={{ borderRadius: "10px", objectFit: "cover", height: "100px" }}
        />
        <div className="data flex flex-col justify-center items-start gap-2">
          <h1 className="font-semibold capitalize text-lg md:text-2xl">
            {data?.name}
          </h1>
          <span className="flex items-center justify-center gap-3 text-sm md:text-[16px] font-light">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z"
                stroke="#16151C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14 12.16V13.16C14 13.17 14 13.17 14 13.18C14 14.27 13.99 15.16 12 15.16C10.02 15.16 10 14.28 10 13.19V12.16C10 11.16 10 11.16 11 11.16H13C14 11.16 14 11.16 14 12.16Z"
                stroke="#16151C"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {data?.bio}
          </span>
          <span className="flex items-center justify-center gap-3 text-sm md:text-[16px] font-light">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="4"
                stroke="#16151C"
                strokeWidth="1.5"
              />
              <path
                d="M2 7L9.50122 13.001C10.9621 14.1697 13.0379 14.1697 14.4988 13.001L22 7"
                stroke="#16151C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {data?.email}
          </span>
          {/* <div className="data-user">
          </div> */}
        </div>
      </div>
      {
        !isEditable ? (
          <button
            onClick={() => dispatch(toggleEditable())}
            className="mr-10 rounded-xl py-3 px-5 bg-[#242223] text-white font-light flex items-center justify-center gap-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 21H21M13.7844 5.31171C13.7844 5.31171 13.7844 6.94634 15.419 8.58096C17.0537 10.2156 18.6883 10.2156 18.6883 10.2156M7.31963 17.9881L10.7523 17.4977C11.2475 17.4269 11.7064 17.1975 12.06 16.8438L20.3229 8.58096C21.2257 7.67818 21.2257 6.21449 20.3229 5.31171L18.6883 3.67708C17.7855 2.77431 16.3218 2.77431 15.419 3.67708L7.15616 11.94C6.80248 12.2936 6.57305 12.7525 6.50231 13.2477L6.01193 16.6804C5.90295 17.4432 6.5568 18.097 7.31963 17.9881Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="mr-10 rounded-xl py-3 px-5 bg-[#EC232B] text-white font-light flex items-center justify-center gap-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 21H21M13.7844 5.31171C13.7844 5.31171 13.7844 6.94634 15.419 8.58096C17.0537 10.2156 18.6883 10.2156 18.6883 10.2156M7.31963 17.9881L10.7523 17.4977C11.2475 17.4269 11.7064 17.1975 12.06 16.8438L20.3229 8.58096C21.2257 7.67818 21.2257 6.21449 20.3229 5.31171L18.6883 3.67708C17.7855 2.77431 16.3218 2.77431 15.419 3.67708L7.15616 11.94C6.80248 12.2936 6.57305 12.7525 6.50231 13.2477L6.01193 16.6804C5.90295 17.4432 6.5568 18.097 7.31963 17.9881Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Save Changes
          </button>
        )
        //  : (
        //   <div className="flex gap-2">
        //     <button
        //       type="button"
        //       onClick={handleCancel}
        //       className="rounded-xl py-3 px-5 bg-red-500 text-white font-light"
        //     >
        //       Cancel
        //     </button>
        //     {isEditable && (
        //       <button
        //         type="button"
        //         onClick={handleSave}
        //         className="rounded-xl py-3 px-5 bg-[#242223] text-white font-light"
        //       >
        //         Save Changes
        //       </button>
        //     )}
        //   </div>
        // )
      }
    </div>
  );
};

export default InfoHeader;
