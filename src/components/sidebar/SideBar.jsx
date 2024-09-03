"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [isHolidaysOpen, setIsHolidaysOpen] = useState(false);

  const toggleHolidays = () => {
    setIsHolidaysOpen(!isHolidaysOpen);
  };

  const pathname = usePathname();
  useEffect(() => {
    if (
      !["profile", "attendance", "tasks"].some((route) =>
        pathname.includes(route)
      )
    ) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
    }
    if (!["holidays"].some((route) => pathname.includes(route))) {
      setIsHolidaysOpen(false);
    } else {
      setIsHolidaysOpen(true);
    }
  }, [pathname]);

  return (
    <div className="hidden lg:flex flex-col sticky left-0 top-8 basis-[23%] custom-min-h rounded-[40px] shadow-[1px_1px_3px_0px_#CACACA26] border-[1px] border-[#A2A1A833] bg-[#F9F9F9]">
      <Image
        src={logo}
        width={247}
        // height={158}
        alt="logo"
        className="self-center object-contain h-[158px]"
      />
      <ul className="flex flex-col gap-6">
        <li className="p-2 pl-16">
          <Link href="/dashboard" className="flex text-center font-[500]">
            <span
              className={`flex gap-5 ${
                pathname.includes("dashboard") ? "text-[#EE232F]" : ""
              }`}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.16669 5.41667C2.16669 4.84203 2.39496 4.29093 2.80129 3.8846C3.20762 3.47827 3.75872 3.25 4.33335 3.25H10.8334V22.75H4.33335C3.75872 22.75 3.20762 22.5217 2.80129 22.1154C2.39496 21.7091 2.16669 21.158 2.16669 20.5833V5.41667ZM15.1667 3.25H21.6667C22.2413 3.25 22.7924 3.47827 23.1987 3.8846C23.6051 4.29093 23.8334 4.84203 23.8334 5.41667V10.8333H15.1667V3.25ZM15.1667 15.1667H23.8334V20.5833C23.8334 21.158 23.6051 21.7091 23.1987 22.1154C22.7924 22.5217 22.2413 22.75 21.6667 22.75H15.1667V15.1667Z"
                  stroke={
                    pathname.includes("dashboard") ? "#EE232F" : "#242223"
                  }
                  //   stroke="#242223"
                  strokeWidth="2.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Dashboard
            </span>
          </Link>
        </li>
        <li
          className={
            isDropdownOpen
              ? "relative before:content-[''] before:block before:absolute before:left-0 before:top-0 before:w-[5px] before:h-[50px] before:bg-[#EC232B]"
              : ""
          }
        >
          <div
            onClick={toggleDropdown}
            className={`cursor-pointer flex justify-between items-center font-[500] ${
              isDropdownOpen
                ? "bg-red-100 rounded-[0px_25px_25px_0px] p-2 pl-16 pr-5"
                : "p-2 pl-16 pr-5"
            }`}
          >
            <span
              className={`flex items-center gap-5 ${
                isDropdownOpen ? "text-[#EE232F]" : ""
              }`}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9083 15.8569C16.8148 15.8454 15.7492 15.5107 14.8456 14.8948C13.942 14.2789 13.2408 13.4094 12.8303 12.3959C12.4198 11.3823 12.3183 10.2699 12.5387 9.19883C12.759 8.12773 13.2914 7.14576 14.0687 6.37657C14.846 5.60738 15.8335 5.08535 16.9068 4.87621C17.9802 4.66707 19.0914 4.78016 20.1006 5.20126C21.1098 5.62235 21.9719 6.33262 22.5783 7.24264C23.1847 8.15265 23.5083 9.22173 23.5083 10.3153C23.498 11.792 22.9029 13.2044 21.8532 14.2431C20.8036 15.2818 19.385 15.8621 17.9083 15.8569ZM17.9083 6.71805C17.1995 6.72955 16.5098 6.95025 15.926 7.35244C15.3421 7.75464 14.8901 8.32038 14.6268 8.97862C14.3635 9.63685 14.3005 10.3582 14.4458 11.0521C14.5911 11.746 14.9383 12.3815 15.4436 12.8788C15.9489 13.3761 16.5899 13.7129 17.2861 13.847C17.9822 13.9812 18.7025 13.9066 19.3564 13.6327C20.0103 13.3588 20.5687 12.8978 20.9615 12.3076C21.3542 11.7174 21.5638 11.0242 21.5639 10.3153C21.5536 9.35429 21.1633 8.43646 20.4783 7.76239C19.7933 7.08833 18.8693 6.71286 17.9083 6.71805Z"
                  fill="black"
                />
                <path
                  d="M17.9084 15.8569C16.8149 15.8454 15.7492 15.5107 14.8456 14.8948C13.942 14.2789 13.2408 13.4094 12.8303 12.3959C12.4198 11.3823 12.3183 10.2699 12.5387 9.19883C12.7591 8.12773 13.2914 7.14576 14.0687 6.37657C14.846 5.60738 15.8335 5.08535 16.9068 4.87621C17.9802 4.66707 19.0914 4.78016 20.1006 5.20126C21.1099 5.62235 21.9719 6.33262 22.5783 7.24264C23.1847 8.15265 23.5083 9.22173 23.5084 10.3153C23.4981 11.792 22.9029 13.2044 21.8533 14.2431C20.8036 15.2818 19.3851 15.8621 17.9084 15.8569ZM17.9084 6.71805C17.1995 6.72955 16.5098 6.95025 15.926 7.35244C15.3421 7.75464 14.8902 8.32038 14.6268 8.97862C14.3635 9.63685 14.3005 10.3582 14.4458 11.0521C14.5912 11.746 14.9383 12.3815 15.4436 12.8788C15.9489 13.3761 16.5899 13.7129 17.2861 13.847C17.9822 13.9812 18.7025 13.9066 19.3564 13.6327C20.0103 13.3588 20.5687 12.8978 20.9615 12.3076C21.3542 11.7174 21.5638 11.0242 21.5639 10.3153C21.5536 9.35429 21.1634 8.43646 20.4784 7.76239C19.7934 7.08833 18.8694 6.71286 17.9084 6.71805ZM21.3014 17.1597C16.9892 16.4093 12.5498 17.0923 8.66252 19.1042C8.38658 19.2574 8.15809 19.4835 8.00205 19.7579C7.84601 20.0322 7.76843 20.3442 7.7778 20.6597V24.1208C7.7778 24.3787 7.88023 24.626 8.06255 24.8083C8.24488 24.9906 8.49217 25.0931 8.75002 25.0931C9.00787 25.0931 9.25516 24.9906 9.43748 24.8083C9.61981 24.626 9.72224 24.3787 9.72224 24.1208V20.7861C13.3269 18.9774 17.4261 18.4035 21.3889 19.1528L21.3014 17.1597Z"
                  fill={isDropdownOpen ? "#EE232F" : "#16151C"}
                />
                <path
                  d="M32.0833 21.3889H25.5694V19.95C25.5694 19.6922 25.467 19.4449 25.2847 19.2625C25.1023 19.0802 24.8551 18.9778 24.5972 18.9778C24.3394 18.9778 24.0921 19.0802 23.9097 19.2625C23.7274 19.4449 23.625 19.6922 23.625 19.95V21.3889H16.5278C16.2699 21.3889 16.0226 21.4913 15.8403 21.6737C15.658 21.856 15.5555 22.1033 15.5555 22.3611V32.0833C15.5555 32.3412 15.658 32.5885 15.8403 32.7708C16.0226 32.9531 16.2699 33.0556 16.5278 33.0556H32.0833C32.3412 33.0556 32.5885 32.9531 32.7708 32.7708C32.9531 32.5885 33.0555 32.3412 33.0555 32.0833V22.3611C33.0555 22.1033 32.9531 21.856 32.7708 21.6737C32.5885 21.4913 32.3412 21.3889 32.0833 21.3889ZM31.1111 31.1111H17.5V23.3333H23.625V23.7319C23.625 23.9898 23.7274 24.2371 23.9097 24.4194C24.0921 24.6017 24.3394 24.7042 24.5972 24.7042C24.8551 24.7042 25.1023 24.6017 25.2847 24.4194C25.467 24.2371 25.5694 23.9898 25.5694 23.7319V23.3333H31.1111V31.1111Z"
                  fill={isDropdownOpen ? "#EE232F" : "#16151C"}
                />
                <path
                  d="M21.2042 26.6583H26.9986V28.0194H21.2042V26.6583ZM10.5389 11.9C7.84725 11.945 5.20227 12.6104 2.80974 13.8444C2.54953 13.9819 2.33157 14.1875 2.17917 14.4392C2.02676 14.6909 1.94563 14.9793 1.94446 15.2736V18.2875C1.94446 18.5453 2.04689 18.7926 2.22922 18.975C2.41154 19.1573 2.65883 19.2597 2.91668 19.2597C3.17453 19.2597 3.42182 19.1573 3.60415 18.975C3.78647 18.7926 3.8889 18.5453 3.8889 18.2875V15.4681C6.17489 14.3302 8.70584 13.7726 11.2583 13.8444C10.9244 13.2351 10.682 12.5799 10.5389 11.9ZM32.1903 13.8347C30.0445 12.7091 27.6862 12.0466 25.2681 11.8903C25.1257 12.569 24.8867 13.2238 24.5583 13.8347C26.8363 13.8892 29.0741 14.447 31.1111 15.4681V18.2875C31.1111 18.5453 31.2136 18.7926 31.3959 18.975C31.5782 19.1573 31.8255 19.2597 32.0833 19.2597C32.3412 19.2597 32.5885 19.1573 32.7708 18.975C32.9531 18.7926 33.0556 18.5453 33.0556 18.2875V15.2736C33.0562 14.9777 32.9759 14.6872 32.8234 14.4336C32.6709 14.18 32.452 13.9729 32.1903 13.8347ZM10.3639 10.3153V9.66389C9.60228 9.56196 8.90931 9.17023 8.42925 8.57023C7.94919 7.97023 7.71902 7.2082 7.78667 6.44278C7.85432 5.67735 8.21457 4.9675 8.79242 4.461C9.37028 3.9545 10.1212 3.69038 10.8889 3.72361C11.6874 3.72217 12.4549 4.03265 13.0278 4.58889C13.5332 4.17198 14.0884 3.8193 14.6806 3.53889C14.0191 2.77828 13.1426 2.23595 12.1668 1.9834C11.1909 1.73085 10.1614 1.77992 9.214 2.12415C8.26658 2.46838 7.4457 3.09161 6.85956 3.91169C6.27341 4.73177 5.94952 5.71022 5.93057 6.71806C5.95097 7.95157 6.43048 9.13317 7.27544 10.0321C8.12041 10.931 9.27012 11.4826 10.5 11.5792C10.4175 11.1627 10.372 10.7398 10.3639 10.3153ZM24.082 1.77917C23.4138 1.77932 22.7525 1.91266 22.1365 2.17141C21.5205 2.43015 20.9623 2.80911 20.4945 3.28611C21.1517 3.52428 21.7732 3.85139 22.3417 4.25833C22.7956 3.94327 23.3264 3.75728 23.8777 3.72022C24.429 3.68315 24.98 3.79639 25.472 4.04787C25.9639 4.29934 26.3784 4.67962 26.6713 5.14816C26.9641 5.61669 27.1243 6.15592 27.1347 6.70833C27.1286 7.27576 26.9619 7.82985 26.6539 8.30645C26.3459 8.78306 25.9093 9.16269 25.3945 9.40139C25.4336 9.70119 25.4531 10.0032 25.4528 10.3056C25.4502 10.6964 25.4177 11.0864 25.3556 11.4722C26.4147 11.1999 27.3541 10.5851 28.0276 9.72354C28.701 8.86194 29.0707 7.80187 29.0792 6.70833C29.0663 5.39321 28.5336 4.13662 27.5972 3.21304C26.6609 2.28946 25.3971 1.77397 24.082 1.77917Z"
                  fill={isDropdownOpen ? "#EE232F" : "#16151C"}
                />
              </svg>
              Employees
            </span>
            <span>
              {isDropdownOpen ? (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7502 9.375L12.5002 15.625L6.25015 9.375"
                    stroke="#EE232F"
                    strokeWidth="2.91667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L8.25 8.25L2 14.5"
                    stroke="#242223"
                    strokeWidth="2.91667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          <ul
            className={` flex flex-col overflow-hidden transition-all duration-300 ${
              isDropdownOpen ? "max-h-48" : "max-h-0"
            }`}
          >
            <li className="p-2 pl-24">
              <Link
                href="/profile/personal-information"
                className={`font-light flex items-center gap-2 ${
                  pathname.includes("profile") ? "text-[#7B7B7B]" : ""
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.25 7C15.25 8.79493 13.7949 10.25 12 10.25V11.75C14.6234 11.75 16.75 9.62335 16.75 7H15.25ZM12 3.75C13.7949 3.75 15.25 5.20507 15.25 7H16.75C16.75 4.37665 14.6234 2.25 12 2.25V3.75ZM8.75 7C8.75 5.20507 10.2051 3.75 12 3.75V2.25C9.37665 2.25 7.25 4.37665 7.25 7H8.75ZM12 10.25C10.2051 10.25 8.75 8.79493 8.75 7H7.25C7.25 9.62335 9.37665 11.75 12 11.75V10.25ZM18.25 17C18.25 17.7193 17.733 18.517 16.5776 19.1772C15.4435 19.8253 13.8267 20.25 12 20.25V21.75C14.0393 21.75 15.9225 21.2792 17.3219 20.4796C18.7 19.6921 19.75 18.4899 19.75 17H18.25ZM12 13.75C13.8267 13.75 15.4435 14.1747 16.5776 14.8228C17.733 15.483 18.25 16.2807 18.25 17H19.75C19.75 15.5101 18.7 14.3079 17.3219 13.5204C15.9225 12.7208 14.0393 12.25 12 12.25V13.75ZM5.75 17C5.75 16.2807 6.26701 15.483 7.42236 14.8228C8.55649 14.1747 10.1733 13.75 12 13.75V12.25C9.96067 12.25 8.07752 12.7208 6.67815 13.5204C5.3 14.3079 4.25 15.5101 4.25 17H5.75ZM12 20.25C10.1733 20.25 8.55649 19.8253 7.42236 19.1772C6.26701 18.517 5.75 17.7193 5.75 17H4.25C4.25 18.4899 5.3 19.6921 6.67815 20.4796C8.07752 21.2792 9.96067 21.75 12 21.75V20.25Z"
                    // fill="#7B7B7B"
                    fill={pathname.includes("profile") ? "#7B7B7B" : "#16151C"}
                  />
                </svg>
                Profile
              </Link>
            </li>
            <li className="p-2 pl-24">
              <Link
                href="/attendance"
                className={`font-light flex items-center gap-2 ${
                  pathname.includes("attendance") ? "text-[#7B7B7B]" : ""
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V5"
                    // stroke="#242223"
                    stroke={
                      pathname.includes("attendance") ? "#7B7B7B" : "#16151C"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V5"
                    // stroke="#242223"
                    stroke={
                      pathname.includes("attendance") ? "#7B7B7B" : "#16151C"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
                    // stroke="#242223"
                    stroke={
                      pathname.includes("attendance") ? "#7B7B7B" : "#16151C"
                    }
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 15L10.7528 16.4023C11.1707 16.7366 11.7777 16.6826 12.1301 16.2799L15 13"
                    // stroke="#242223"
                    stroke={
                      pathname.includes("attendance") ? "#7B7B7B" : "#16151C"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 9H21"
                    // stroke="#242223"
                    stroke={
                      pathname.includes("attendance") ? "#7B7B7B" : "#16151C"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Attendance
              </Link>
            </li>
            <li className="p-2 pl-24">
              <Link
                href="/tasks"
                className={`font-light flex items-center gap-2 ${
                  pathname.includes("tasks") ? "text-[#7B7B7B]" : ""
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 22C8.86748 22 10.4361 20.7202 10.8766 18.9899C11.0128 18.4547 11.4477 18 12 18H19M7 22C4.79086 22 3 20.2091 3 18V5C3 3.34315 4.34315 2 6 2H16C17.6569 2 19 3.34315 19 5V18M7 22H19C20.8675 22 22.4361 20.7202 22.8766 18.9899C23.0128 18.4547 22.5523 18 22 18H19M15 7H7M11 12H7"
                    stroke={pathname.includes("tasks") ? "#7B7B7B" : "#16151C"}
                    // stroke="#16151C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Tasks
              </Link>
            </li>
          </ul>
        </li>
        <li className="p-2 pl-16">
          <Link
            href="/payroll"
            className={`flex items-center gap-5 font-[500]  ${
              pathname.includes("payrol") ? "text-[#EE232F]" : ""
            } `}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="13.5"
                cy="13.5"
                r="11.25"
                stroke={pathname.includes("payrol") ? "#EE232F" : "#242223"}
                // stroke="#16151C"

                strokeWidth="1.5"
              />
              <path
                d="M15.75 11.25C15.75 10.0074 14.7426 9 13.5 9C12.2574 9 11.25 10.0074 11.25 11.25C11.25 12.4926 12.2574 13.5 13.5 13.5"
                // stroke="#16151C"
                stroke={pathname.includes("payrol") ? "#EE232F" : "#242223"}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M13.5 13.5C14.7426 13.5 15.75 14.5074 15.75 15.75C15.75 16.9926 14.7426 18 13.5 18C12.2574 18 11.25 16.9926 11.25 15.75"
                stroke={pathname.includes("payrol") ? "#EE232F" : "#242223"}
                // stroke="#16151C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M13.5 7.3125V9"
                stroke={pathname.includes("payrol") ? "#EE232F" : "#242223"}
                // stroke="#16151C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 18V19.6875"
                stroke={pathname.includes("payrol") ? "#EE232F" : "#242223"}
                // stroke="#16151C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Payroll
          </Link>
        </li>
        <li
          className={
            isHolidaysOpen
              ? "relative before:content-[''] before:block before:absolute before:left-0 before:top-0 before:w-[5px] before:h-[50px] before:bg-[#EC232B]"
              : ""
          }
        >
          <div
            onClick={toggleHolidays}
            className={`cursor-pointer flex justify-between items-center ${
              isHolidaysOpen
                ? "bg-red-100 rounded-[0px_25px_25px_0px] p-2 pl-16 pr-5"
                : "p-2 pl-16 pr-5"
            }`}
          >
            <span
              className={`flex py-1 items-center gap-5 font-[500] ${
                isHolidaysOpen ? "text-[#EE232F]" : ""
              }`}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8125 17.0269L8.78344 13.9978L7.59375 15.1875L11.8125 19.4063L19.4062 11.8125L18.2166 10.6144L11.8125 17.0269Z"
                  //   fill="#16151C"
                  fill={isHolidaysOpen ? "#EE232F" : "#16151C"}
                />
                <path
                  d="M21.0938 4.21875H18.5625V3.375C18.5625 2.92745 18.3847 2.49822 18.0682 2.18176C17.7518 1.86529 17.3226 1.6875 16.875 1.6875H10.125C9.67745 1.6875 9.24823 1.86529 8.93176 2.18176C8.61529 2.49822 8.4375 2.92745 8.4375 3.375V4.21875H5.90625C5.4587 4.21875 5.02947 4.39654 4.71301 4.71301C4.39654 5.02947 4.21875 5.4587 4.21875 5.90625V23.625C4.21875 24.0726 4.39654 24.5018 4.71301 24.8182C5.02947 25.1347 5.4587 25.3125 5.90625 25.3125H21.0938C21.5413 25.3125 21.9705 25.1347 22.287 24.8182C22.6035 24.5018 22.7812 24.0726 22.7812 23.625V5.90625C22.7812 5.4587 22.6035 5.02947 22.287 4.71301C21.9705 4.39654 21.5413 4.21875 21.0938 4.21875ZM10.125 3.375H16.875V6.75H10.125V3.375ZM21.0938 23.625H5.90625V5.90625H8.4375V8.4375H18.5625V5.90625H21.0938V23.625Z"
                  //   fill="#16151C"
                  fill={isHolidaysOpen ? "#EE232F" : "#16151C"}
                />
              </svg>
              Holidays
            </span>
            <span>
              {isHolidaysOpen ? (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7502 9.375L12.5002 15.625L6.25015 9.375"
                    stroke="#EE232F"
                    strokeWidth="2.91667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L8.25 8.25L2 14.5"
                    stroke="#242223"
                    strokeWidth="2.91667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          <ul
            className={`overflow-hidden transition-all duration-300 ${
              isHolidaysOpen ? "max-h-48" : "max-h-0"
            }`}
          >
            <li className="p-2 pl-24">
              <Link href="/holidays/page1" className="font-light">
                Page1
              </Link>
            </li>
          </ul>
        </li>
        <li className="p-2 pl-16">
          <Link
            href="/advanced-payment"
            className={`flex items-center gap-5 font-[500] 
            ${pathname.includes("advanced-payment") ? "text-[#EE232F]" : ""}
            `}
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.3333 22.8639H3.66667C2.19391 22.8639 1 21.67 1 20.1972V8.19725C1 6.72449 2.19391 5.53058 3.66667 5.53058H22.3333C23.8061 5.53058 25 6.72449 25 8.19725V20.1972C25 21.67 23.8061 22.8639 22.3333 22.8639Z"
                // stroke="#16151C"
                stroke={
                  pathname.includes("advanced-payment") ? "#EE232F" : "#242223"
                }
                strokeWidth="1.5"
              />
              <path
                d="M19.0001 14.8638C18.632 14.8638 18.3334 14.5653 18.3334 14.1972C18.3334 13.829 18.632 13.5305 19.0001 13.5305C19.3682 13.5305 19.6668 13.829 19.6668 14.1972C19.6668 14.5653 19.3682 14.8638 19.0001 14.8638Z"
                // stroke="#16151C"
                stroke={
                  pathname.includes("advanced-payment") ? "#EE232F" : "#242223"
                }
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 5.5305V3.66812C21 1.91604 19.3392 0.640054 17.6463 1.09149L2.97956 5.00262C1.81223 5.31391 1 6.37111 1 7.57924V8.19716"
                // stroke="#16151C"
                stroke={
                  pathname.includes("advanced-payment") ? "#EE232F" : "#242223"
                }
                strokeWidth="1.5"
              />
            </svg>
            Advanced Payment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
