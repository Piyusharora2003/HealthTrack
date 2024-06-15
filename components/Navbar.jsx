import Link from 'next/link';
import React, { useState } from 'react';
import { GrPowerReset } from "react-icons/gr";
import { MdEmojiPeople } from "react-icons/md";
import {  useShepherd } from "react-shepherd";
import { Steps } from '@/app/steps.js';

function Navbar({showResetBtn}) {

  const shepherd = useShepherd();
  const [tourState, setTourState] = useState(false);
  const tour = new shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        cancelIcon: true,
        scrollTo: false,
        classes:
          "bg-base-100 shadow-xl p-5 w-96 rounded-lg border-2 border-indigo-500 mt-3",
      },
      steps: Steps,
    });
    
    function startTour(){
      if(tourState) {
          alert('Tour already started');
          return;
      }
      tour.start();
      setTourState(true);
    }
  return (
        <div className="flex-1 w-full justify-between px-2">
            <Link
              href="#"
              className="btn btn-ghost text-xl text-accent"
              id='navIcon'
            >
              Health Tracker
            </Link>
            {
              showResetBtn && <div className='flex gap-4'>
              <div 
              className='float-right p-auto m-auto text-white font-extrabold	text-xl cursor-pointer ' 
              id='Reset'
              onClick={() => {
                localStorage.removeItem("UserData_Health_Tracker");
                localStorage.removeItem("locShared");
                window.location.reload();
              }}  
              >   
                <GrPowerReset/>
              </div>
              <button 
                onClick={startTour}
                className=' bottom-6 right-6 text-xl bg-yellow-600 text-black hover:bg-sky-700 rounded-full p-2'
              >
                <MdEmojiPeople />
              </button>
            </div>
          }
        </div>

    )
}

export default Navbar