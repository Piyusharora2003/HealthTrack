import Link from 'next/link';
import React from 'react';
import { GrPowerReset } from "react-icons/gr";


function Navbar({showResetBtn}) {
  return (
        <div className="flex-1 justify-between px-2">
            <Link
              href="#"
              className="btn btn-ghost text-xl text-accent"
              id='navIcon'
            >
              Health Tracker
            </Link>
            {
              showResetBtn &&
            <div 
            className='float-right	text-white font-extrabold	text-xl cursor-pointer ' 
            id='Reset'
            onClick={() => {
              localStorage.removeItem("UserData_Health_Tracker");
              window.location.reload();
            }}  
            >   
              <GrPowerReset/>
            </div>
          }
        </div>

    )
}

export default Navbar