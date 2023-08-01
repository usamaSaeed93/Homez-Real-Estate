"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { LogInFunction } from "@/utils/requests";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { isLogin } from "@/app/redux/features/slice";
import Alert from "@mui/material/Alert";
import Link from "next/link";
import { info } from "console";
interface SignInForm {
  email: string;
  password: string;
}
interface SetCreatedInterface {
  message: string;
  type: string;
}
const SignIn: React.FC = () => {
  const router = useRouter();
  const [created, setcreated] = useState<SetCreatedInterface>({
    message: "Welcome Back. Please Log In",
    type: "info",
  });
  const [status, setStatus] = useState<boolean>(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  if (token) {
    router.push("/");
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignInForm>();
  const [formData, setFormData] = useState<SignInForm>({
    email: "",
    password: "",
  });
  const fetchData = async (data: object) => {
    const res = await LogInFunction(data);
    if (res) {
      setcreated((prevState) => ({
        ...prevState,
        message: "Logged In. Redirecting towards Home.",
        type: "success",
      }));
      setTimeout(() => {
        router.back();
      }, 3000);
    } else {
      setcreated((prevState) => ({
        ...prevState,
        message: "Email or Password is not correct. Try Again.",
        type: "error",
      }));
    }
  };
  const onSubmit = (data: SignInForm) => {
    fetchData(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 mx-auto bg-white rounded-md shadow-md w-96">
        <Alert severity={`${created.type}`}>{created.message}</Alert>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-indigo-500"
                  }`}
                />
              )}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-indigo-500"
                  }`}
                />
              )}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex flex-row text-black text-xl text-medium justify-center items-center ">
          <p>New to homez ? </p>
          <Link href="/sign-up">
            <p className="text-blue-700">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
