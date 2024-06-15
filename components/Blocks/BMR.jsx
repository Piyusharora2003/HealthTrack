"use client";
import React from 'react'
import styles from "./BlockStyles.module.css";
import { calculateBMR } from '@/BasicFunctions/HealthIndexes';


function BMR({userData}) {
        const {Height , Weight , Age , Gender} = userData;
        const bmr = calculateBMR(Height, Weight, Age, Gender);
    return (
        <div 
            className={` w-[300px] m-3 p-4 rounded-lg font-extrabold  bg-slate-700  ${styles.blockHeightAdjustable} `}   
        >
                BMR : <span className='px-2'>{bmr} calories/day</span> 
                <br/>
                <div className='text-xs italic w-full pt-1 truncate'>Basal Metabolic Rate : the number of calories required to keep your body functioning while you're not doing any physical activities</div>
        </div>
    )
}

export default BMR;