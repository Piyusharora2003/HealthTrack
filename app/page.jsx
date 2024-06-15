"use client";

import { useState } from "react";
import { ShepherdJourneyProvider, useShepherd } from "react-shepherd";

import Navbar from "@/components/Navbar.jsx";
import InputUserForm from "@/components/InputUserForm.jsx";
import Home from "@/components/Home.jsx";
import { useEffect } from "react";
import { fetchState } from "@/BasicFunctions/SetGeoLocations";
import addToDb from "@/BasicFunctions/addToDb";


function page() {
  const [userData, setuserData] = useState({});

  useEffect(()=>{
    const savedData = localStorage.getItem("UserData_Health_Tracker");
    if(savedData) {
        setuserData(JSON.parse(savedData));
    }
  },[]);

  useEffect(()=>{
    const userLocation = localStorage.getItem("User_location");
    if ( !userLocation ) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        fetchState(latitude, longitude).then((state) =>{ 
          localStorage.setItem("User_location", state);
        });
      });
    }
  },[])

  useEffect(()=>{
    if(Object.keys(userData).length !== 0 && localStorage.getItem("locShared") === null  && localStorage.getItem("User_location") !== null) {
      const state =  localStorage.getItem("User_location");
      async function addDb() {
        const stat = await addToDb(userData, state);
        if(stat === true) localStorage.setItem("locShared", true);
      }
      addDb();
    }
  },[userData]);

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
