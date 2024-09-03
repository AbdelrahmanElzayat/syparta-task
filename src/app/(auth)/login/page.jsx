"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../../assets/images/logo2.png";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const page = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true)
      const response = await axios.post(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        values
      );
      await Cookies.set("token", response.data.access, { expires: 7 });
      router.push("/profile/personal-information"); 
      toast.success("Logged in successfully")
      setLoading(false)
    } catch (error) {
      toast.error("Login failed: The email or password is incorrect");
      setLoading(false);
    }
  };

  return (
    <div className="container h-full w-full items-center justify-center flex flex-col">
      <div className="text-center">
        <Image
          src={logo}
          width={200}
          height={100}
          alt="Logo"
          className="mx-auto"
        />
      </div>
      <div className=" bg-white py-14 px-8 rounded-[16px] shadow-[0px_4px_4px_0px_#9D9D9D33] border-[0.6px] border-[#E9E9E9] w-full max-w-xl">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="nouran@cyparta.com"
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#262626] focus:border-[#262626] sm:text-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <Field
                    type={!showPass ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="************"
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#262626] focus:border-[#262626] sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {/* Eye Icon */}
                    {!showPass ? (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.53 9.97L9.47004 15.03C8.82004 14.38 8.42004 13.49 8.42004 12.5C8.42004 10.52 10.02 8.92 12 8.92C12.99 8.92 13.88 9.32 14.53 9.97Z"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.82 6.27C16.07 4.95 14.07 4.23 12 4.23C8.46997 4.23 5.17997 6.31 2.88997 9.91C1.98997 11.32 1.98997 13.69 2.88997 15.1C3.67997 16.34 4.59997 17.41 5.59997 18.27"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.42004 20.03C9.56004 20.51 10.77 20.77 12 20.77C15.53 20.77 18.82 18.69 21.11 15.09C22.01 13.68 22.01 11.31 21.11 9.9C20.78 9.38 20.42 8.89 20.05 8.43"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5099 13.2C15.2499 14.61 14.0999 15.76 12.6899 16.02"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.47 15.03L2 22.5"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 2.5L14.53 9.97"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.046.152-.102.305-.168.458"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#262626] text-white py-4 px-4 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isSubmitting}
              >
                {
                  loading ? 'loading...' : 'Login'
                }
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default page;
