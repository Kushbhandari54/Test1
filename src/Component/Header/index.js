import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {FaHome,FaCompass} from 'react-icons/fa';
import {HiLogin} from 'react-icons/hi'; 
import { ImProfile} from "react-icons/im";
import { FcTodoList } from "react-icons/fc";


const Header = () => {
 
  return (
    <>
      <nav className="w-full p-8 bg-black">
        <div className="flex justify-around text-white">
            
            <div className="text-2xl font-bold text-green-50">
              <Link to="/">DEMO APP</Link>
            </div>
            <div className="flex justify-between p-1 border-2 border-white rounded-2xl">
              <BsSearch size={19} className="mx-2 cursor-pointer" />
              <input type="text" placeholder="Search" />
            </div>

            <div className="flex mx-4">
              <Link to='/home'><FaHome size={30} className="mx-2 cursor-pointer" /></Link>
              <Link to='/todo'><FcTodoList size={30} className="mx-2 cursor-pointer" /></Link>
              <Link to='/signup'><FaCompass size={30} className="mx-2 cursor-pointer" /></Link>
              <Link to='/login'><HiLogin size={30} className="mx-2 cursor-pointer" /></Link>
              <Link to='/profile'><ImProfile size={30} className="mx-2 cursor-pointer" /></Link>
              
            </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
