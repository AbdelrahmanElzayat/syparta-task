"use client";
import React, { useEffect, useState } from "react";
import CommonHeader from "../../../../../components/navbar-profile/CommonHeader.jsx";
import Breadcrumb from "../../../../../components/breadcrumb/BreadCrumb";
import { useGetUserProfileQuery } from "../../../../../components/redux/profile-reducer/profile.js";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserData,
  setOriginalData,
} from "../../../../../components/redux/profile-reducer/profileSlice.js";

const page = () => {
  const [maritalStatus, setMaritalStatus] = useState("Single");
  const [gender, setGender] = useState("Male");
  const [nationality, setNationality] = useState("Egyptian");
  const [address, setAddress] = useState("elnady st");
  const [city, setCity] = useState("cairo");
  const [state, setState] = useState("cairo");
  const [zipCode, setZipCode] = useState("35624");

  const dispatch = useDispatch();
  const { isEditable, userData } = useSelector(
    (state) => state.profile
  );


  const breadcrumbs = [{ name: "Employees" }, { name: "Profile" }];

  const { data, error, isLoading } = useGetUserProfileQuery();
  const [dateOfBirth, setDateOfBirth] = useState();

  useEffect(() => {
    setDateOfBirth(
      data?.date_joined
        ? new Date(data.date_joined).toISOString().split("T")[0]
        : ""
    );

    dispatch(
      setUserData({
        first_name: data?.first_name,
        last_name: data?.last_name,
        email: data?.email,
        phone: data?.phone,
        bio: data?.bio,
      })
    );
  }, [data]);

  // if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="personalInfo p-2 w-full">
      <Breadcrumb crumbs={breadcrumbs} />
      <CommonHeader />

      {
      error ? 
      <p>error:</p> :
      isLoading && !error ? (
        <p>Loading...</p>
      ) : (
        <form className="mt-5">
          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <div className="basis-[40%]">
              <label className="block text-[#A2A1A8] text-sm">First Name</label>
              <input
                type="text"
                defaultValue={data?.first_name}
                onChange={(e) =>
                  dispatch(
                    setUserData({ ...userData, first_name: e.target.value })
                  )
                }
                readOnly={!isEditable}
                className={`w-full bg-transparent border-b-[1px] border-[#A2A1A81A] outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
            <div className="basis-[40%]">
              <label className="block text-[#A2A1A8] text-sm">Last Name</label>
              <input
                type="text"
                defaultValue={data?.last_name}
                onChange={(e) =>
                  dispatch(
                    setUserData({ ...userData, last_name: e.target.value })
                  )
                }
                readOnly={!isEditable}
                className={`w-full bg-transparent border-b-[1px] border-[#A2A1A81A] outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <div className="basis-[40%]">
              <label className="block text-[#A2A1A8] text-sm">Email</label>
              <input
                type="email"
                defaultValue={data?.email}
                onChange={(e) =>
                  dispatch(setUserData({ ...userData, email: e.target.value }))
                }
                readOnly={!isEditable}
                className={`w-full bg-transparent border-b-[1px] border-[#A2A1A81A] outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
            <div className="basis-[40%]">
              <label className="block text-[#A2A1A8] text-sm">
                Mobile Number
              </label>
              <input
                type="text"
                defaultValue={data?.phone}
                onChange={(e) =>
                  dispatch(setUserData({ ...userData, phone: e.target.value }))
                }
                readOnly={!isEditable}
                className={`w-full bg-transparent border-b-[1px] border-[#A2A1A81A] outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <div className="flex flex-col basis-[40%]">
              <label className="text-[#A2A1A8] text-sm">Date of Birth</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                readOnly={!isEditable}
                className={`border-b-[1px] border-[#A2A1A81A] outline-none py-2 bg-transparent ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
            <div className="flex flex-col basis-[40%]">
              <label htmlFor="maritalStatus" className="text-[#A2A1A8] text-sm">
                Marital Status
              </label>
              <select
                id="maritalStatus"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                disabled={!isEditable}
                className={`w-full border-b-[1px] border-b-[#A2A1A81A] bg-transparent focus:outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <div className="flex flex-col basis-[40%]">
              <label htmlFor="gender" className="text-[#A2A1A8] text-sm">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                disabled={!isEditable}
                className={`w-full border-b-[1px] border-b-[#A2A1A81A] bg-transparent focus:outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col basis-[40%]">
              <label htmlFor="nationality" className="text-[#A2A1A8] text-sm">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                value={nationality}
                readOnly={!isEditable}
                className={`w-full border-b-[1px] border-b-[#A2A1A81A] bg-transparent focus:outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <div className="flex flex-col basis-[40%]">
              <label htmlFor="address" className="text-[#A2A1A8] text-sm">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                readOnly={!isEditable}
                className={`w-full border-b-[1px] border-b-[#A2A1A81A] bg-transparent focus:outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
            <div className="flex flex-col basis-[40%]">
              <label htmlFor="city" className="text-[#A2A1A8] text-sm">
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                readOnly={!isEditable}
                className={`w-full border-b-[1px] border-b-[#A2A1A81A] bg-transparent focus:outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <div className="flex flex-col basis-[40%]">
              <label htmlFor="state" className="text-[#A2A1A8] text-sm">
                State
              </label>
              <input
                type="text"
                id="state"
                value={state}
                readOnly={!isEditable}
                className={`w-full border-b-[1px] border-b-[#A2A1A81A] bg-transparent focus:outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
            <div className="flex flex-col basis-[40%]">
              <label htmlFor="zipCode" className="text-[#A2A1A8] text-sm">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                readOnly={!isEditable}
                className={`w-full border-b-[1px] border-b-[#A2A1A81A] bg-transparent focus:outline-none py-2 ${
                  isEditable ? "border-b-gray-400" : ""
                }`}
              />
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap lg:flex-nowrap w-full mt-4">
            <div className="flex flex-col basis-[40%]">
              <label className="text-sm text-[#818181]">Work's hours</label>
              <span className="text-base text-[#000] py-2">180 hours</span>
            </div>
            <div className="flex flex-col basis-[30%]">
              <label className="text-sm text-[#818181]">Salary/hour</label>
              <span className="text-base text-[#000] py-2">180 EGP</span>
            </div>
            <div className="flex flex-col basis-[30%]">
              <label className="text-sm text-[#EE232F]">Total salary</label>
              <span className="text-base text-[#000] py-2">54,000 EGP</span>
            </div>
          </div>
          {/* 
          <div className="flex gap-2 mt-4">
            <button
              type="button"
              onClick={handleEditClick}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {isEditable ? "Cancel" : "Edit"}
            </button>
            {isEditable && (
              <button
                type="button"
                onClick={handleSaveClick}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Save
              </button>
            )}
          </div> */}
        </form>
      )}
    </div>
  );
};

export default page;
