import React from "react";
import { useState } from "react";

function SignIn() {
  const [value, setValue] = useState({ userName: "", password: "" });
  const handleChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    console.log(feild, value);
    setValue({ [feild]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center">SignIn</h1>
      <div className="mx-auto  w-96">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>UserName</label>
          <input
            type="text"
            name="userName"
            value={value["userName"]}
            onChange={handleChange}
            className="border-2 "
          />

          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            value={value["password"]}
            onChange={handleChange}
            className="border-2"
          />
          <button
            type="submit"
            value="submit"
            className="w-20 mx-auto mt-2 border-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
