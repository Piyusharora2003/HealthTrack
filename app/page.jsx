"use client";

import { useState } from "react";
import { ShepherdJourneyProvider, useShepherd } from "react-shepherd";
import { Steps } from "./steps.js";

import Navbar from "@/components/Navbar.jsx";
import InputUserForm from "@/components/InputUserForm.jsx";
import Home from "@/components/Home.jsx";
import { useEffect } from "react";


function page() {
  const [userData, setuserData] = useState({});

  useEffect(()=>{
    const savedData = localStorage.getItem("UserData_Health_Tracker");
    if(savedData) {
        setuserData(JSON.parse(savedData));
    }
  },[]);

  

  return (
    <ShepherdJourneyProvider>
      <div className="navbar bg-base-300 flex flex-col md:flex-row fixed ">
        <Navbar showResetBtn = {Object.keys(userData).length !== 0}/>
      </div>

      {
        Object.keys(userData).length === 0 ?
        <div className="flex m-auto w-max h-dvh items-center	">
          <InputUserForm setuserData = {setuserData} /> 
        </div>
        :
        <div className="pt-[64px] w-full">
          <Home userData = {userData} />
        </div>
      }
    </ShepherdJourneyProvider>
  );
}
export default page;
