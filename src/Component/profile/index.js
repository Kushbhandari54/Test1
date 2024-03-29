import { GoVerified } from "react-icons/go";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);


  
  const showTime=()=>{
    console.log("helloworld")
  }
  

  const getUsers = async () => {
    try {
      setloading(false);
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      console.log(" My Error is", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return (
      <>
        <h1 className="align-middle ">Loading....</h1>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="p-3 text-2xl font-bold text-center">
          List of GitHub Users
        </h1>
        <span className="">
          <CheckCircleOutlineIcon style={{ fontSize: 50, color: "green" }} />
        </span>
      </div>

      <div className="absolute bg-red-500 rounded-lg right-2 top-28 " onClick={showTime}>
        <button className="p-2 font-bold text-zinc-200">Show Time</button>
      </div>

      <div className="grid grid-cols-3 gap-2 p-4">
        {users?.map((items) => {
          return (
            <div
              key={items.id}
              className="max-w-sm p-4 mb-2 overflow-hidden border-4 rounded shadow-lg group"
            >
              <div className="flex justify-between ">
                <div className="">
                  <img
                    src={items?.avatar_url}
                    alt="User Image"
                    className="border-4 rounded-xl group-hover:border-cyan-800"
                  />
                </div>
                <div className="px-3">
                  <div className="flex">
                    <h1 className="font-serif text-2xl uppercase">
                      {items?.login}
                    </h1>
                    <span className="align-baseline">
                      <GoVerified size={18} className="ml-2 cursor-pointer " />
                    </span>
                  </div>
                  <div>
                    <h1 className="ml-2 ">Another name</h1>
                  </div>
                  <div className="flex flex-initial p-2 bg-gray-400">
                    <div className="flex flex-col mr-2">
                      <span>Article</span>
                      <span>38</span>
                    </div>
                    <div className="flex flex-col mr-2">
                      <span>Followers</span>
                      <span>194</span>
                    </div>
                    <div className="flex flex-col">
                      <span>Rating</span>
                      <span>3.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
