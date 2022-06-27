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
    <div className="container p-10 mx-auto mt-5 border-4 shadow-md bg-slate-400">
      <div className="container text-4xl font-bold text-center text-blue-600">
        <h1 className="">Login Form</h1>
      </div>
      
      <div>
        <div className="w-1/4 mx-auto my-10 border-4 shadow-2xl hover:border-cyan-700 rounded-xl ">
          <form
            className="px-8 pt-6 pb-8 mb-4 "
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
            <div className="container">
            <button className="py-4 mx-5 text-white uppercase bg-blue-500 w-44 rounded-xl hover:bg-blue-700 focus:outline-none focus:shadow-outline">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
