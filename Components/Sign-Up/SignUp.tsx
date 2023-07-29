"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFunction } from "@/utils/requests";
import { useState, useEffect } from "react";
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<FormValues >({firstName:"",lastName:"",email:"",password:""}) ;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();
  const fetchData = async (data:object) => {
    const res = await SignUpFunction(data);
    console.log(res);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
  fetchData(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First Name is required",
                })}
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last Name is required" })}
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
