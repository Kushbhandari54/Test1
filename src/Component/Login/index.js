import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginAPI } from "../../services/signIn/index";
import { loginSchema } from "../../helpers/signIn";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    loginAPI(data);
  };

  return (
    <>
      <h1 className="mx-auto my-4 text-4xl font-bold text-center ">
        Login Form
      </h1>
      <p className="mx-auto my-4 text-xl font-bold text-center">
        Welcome Back to Login Page
      </p>

      <div className="w-1/4 mx-auto ">
        <form
          className="px-8 pt-6 pb-8 mb-4 shadow-md rounded-3xl bg-slate-700"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="block p-2 my-2 text-sm font-bold text-gray-700 border-4 rounded-xl"
            {...register("email")}
            placeholder="Email or Phone Number"
          />
          <p class=" text-red-600 mb-2">
            {errors.email && <span> This field is required </span>}
          </p>
          <input
            className="block p-2 mb-4 text-sm font-bold text-gray-700 border-4 rounded-xl"
            {...register("password")}
            placeholder="Enter Password"
          />
          <p class=" text-red-600 mb-2">
            {errors.password && <span> This field is required </span>}
          </p>
          <button className="justify-end object-center px-12 py-4 text-white bg-blue-500 w-44 rounded-xl hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
