import React from "react";
import logo from "../assets/logo1.png";
import { useState } from "react";
import { FaLayerGroup } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { MdLogin, MdLogout } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Navbar = ({ setCards }) => {
  const [queryinput, setQueryinput] = useState("");
  const token = localStorage.getItem('token');
  console.log(token);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page after logout
  };
  const handleQuery = async (e) => {
    e.preventDefault();
    console.log(queryinput);
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/api/getRecommendations/?query=${queryinput}`);
      setCards(response.data);
    }
    fetchData();
    setQueryinput("");
  };
  return (
    <div className="">
      <div className="bg-[#0071dc] px-3 py-2 lg:px-8 text-white flex justify-between items-center">
        {/* Left */}
        <div className="flex  items-center gap-x-3 shrink-0">
          <a className="hover:bg-[#06529a] p-2 rounded-full" href="/">
            <img src={logo} alt="" className=" h-12" />
          </a>

          <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full">
            <FaLayerGroup className="text-[17px]" />
            <p className="text-[16px] font-semibold">Sections</p>
          </div>
          <div className="flex  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full ">
            <HiUserGroup className="text-[20px]" />
            <p className="text-[16px] font-semibold">Partners</p>
          </div>
        </div>
        {/* Middle */}
        <form onSubmit={handleQuery} className="flex items-center flex-1 mx-6 text-black">
          <input
            type="search"
            className="rounded-full py-1.5 outline-0 flex-1"
            value={queryinput}
            onChange={(e) => { setQueryinput(e.target.value) }}
          />
          {/* <div className="absolute bg-[#ffc220] p-1.5 rounded-full left-1.5"> */}
          <GoSearch type='submit' onClick={handleQuery} />
          {/* </div> */}
        </form>
        {/* Right */}
        <div className="flex  items-center gap-x-2">
          {
            !token ? (
              <>
                <a className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full" href="/signup">
                  <MdLogin className="text-[17px] rotate-90" />
                  <p className="text-[16px] font-semibold">Sign up</p>
                </a>
                <a className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap" href="/login">
                  <MdLogout className="text-[20px] -rotate-90" />
                  <p className="text-[16px] font-semibold">Log in</p>
                </a>
                <div className="hover:bg-[#06529a] p-3 rounded-full">
                  <AiOutlineShoppingCart className="w-7 h-7" />
                </div>
              </>
            )
              :
              (
                <a className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap" onClick={handleLogout}>
                  <MdLogout className="text-[20px] -rotate-90" />
                  <p className="text-[16px] font-semibold">Log out</p>
                </a>
              )
          }
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#0071dc] mt-[1px] text-white px-3 py-2 lg:px-8 flex items-center gap-6">
        <div className="flex items-center gap-1 hover:underline">
          <BsPhone />
          <p className="text-[15px] font-bold">Place an order on the App</p>
        </div>
        <div className="flex items-center gap-1 hover:underline">
          <BiWorld />
          <p className="text-[15px] hover:underline">TX Adress 87358</p>
        </div>
        <p className="flex hover:underline">Deals on Phones</p>
        <p className="flex font-bold hover:underline">
          $499 OFF on Laptops
        </p>
      </div>
    </div>
  );
};

export default Navbar;
