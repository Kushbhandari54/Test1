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
      <header className="w-full p-4">
        <div className="flex justify-around">
            
            <div>
              <Link to="/">Instagram</Link>
            </div>
            <div className="flex justify-between p-1 border-2 border-black rounded-lg">
              <BsSearch size={19} className="mx-2 cursor-pointer" />
              <input type="text" placeholder="Search" />
            </div>

            <div className="flex">
              <Link to='/home'><FaHome size={30} className="mx-2 cursor-pointer" /></Link>
              <Link to='/todo'><FcTodoList size={30} className="mx-2 cursor-pointer" /></Link>
              <Link to='/signup'><FaCompass size={30} className="mx-2 cursor-pointer" /></Link>
              <Link to='/login'><HiLogin size={30} className="mx-2 cursor-pointer" /></Link>
              <Link to='/profile'><ImProfile size={30} className="mx-2 cursor-pointer" /></Link>
              
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
