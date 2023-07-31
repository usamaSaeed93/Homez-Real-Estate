"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { LogInFunction } from "@/utils/requests";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { isLogin } from "@/app/redux/features/slice";
import Alert from "@mui/material/Alert";
interface SignInForm {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const [created, setcreated] = useState(false);
  const [status, setStatus] = useState<boolean>(false);
  // const router=useRouter();
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
    console.log(res)
    setcreated(res);
  };
  const onSubmit = (data: SignInForm) => {
    fetchData(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 mx-auto bg-white rounded-md shadow-md w-96">
        {/* <h2 className="mb-6 text-2xl font-bold text-center">Sign In</h2>{
        !created?<Alert severity="error">Username or Password is not correct. Try Again</Alert> : <Alert severity="success">User has Loged in Successfully</Alert>} */}
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
      </div>
    </div>
  );
};

export default SignIn;
