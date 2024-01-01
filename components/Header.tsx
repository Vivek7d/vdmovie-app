'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiBell } from "react-icons/hi";
import Link from "next/link";
import useAuth from "@/hooks/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const [isScrolled,setScrolled]= useState(false);
  const {logout} = useAuth()

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  const notifyLogOut=()=>{
    toast.success("Logout Sucessful",{position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",})
  }
  return (
    <header className={ `${isScrolled && 'bg-[#141414]'}`} >
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">News & Popular</li>
          <li className="headerLink">My list</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <IoSearch className="hidden h-6 w-6 sm:inline " />
        <p className="hidden lg:inline headerLink">Kids</p>
       
          <img
          onClick={()=>{logout();notifyLogOut();}}
            src="https://rb.gy/g1pwyx"
            alt="account img"
            className="cursor-pointer rounded"
          />

      </div>
      
    </header>
  );
}

export default Header;
