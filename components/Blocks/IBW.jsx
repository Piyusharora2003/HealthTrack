import React from 'react'
import styles from "./BlockStyles.module.css";

// interface userData {
//     Height: number; 
//     Weight: number;
//     Age: number;
//     Gender : "Male" | "Female"
// }

function calculateIBW(height, gender) {  
    const heightInInches = height / 2.54;
    let ibw;
    if (gender === 'Male') {
        ibw = 50 + 2.3 * (heightInInches - 60);
    } else {
        ibw = 45.5 + 2.3 * (heightInInches - 60);
    }
    return ibw.toFixed(2);
}

function CategoryColor(category) {
    if(category === "Underweight" || category === "Overweight") {
        return 'bg-red-800';
    } else if (category === "Normal") {
        return 'bg-green-800';
    } else {
        return 'bg-blue-800';
    }
}

function IBW({userData}) {
        const {Height , Weight , Gender} = userData;
        const ibw = calculateIBW(Height, Gender);
        // setIBWOutcome(ibw);
        const outcome = function(){
            const weightDifference = (Math.abs(Weight - ibw) / ibw) * 100;
            const category = Weight - ibw > 0 ? "Overweight" : "Underweight";
            if(weightDifference < 5) {
                return "Healthy";
            }else if(weightDifference < 10) {
                return `Slightly ${category}`;
            } else {
                return category;
            }
        }();
    return (
        <div className={`${CategoryColor(outcome)} w-[300px] m-3 p-4 rounded-lg font-extrabold ${styles.blockHeightAdjustable}`}>
                Ideal Body Weight : <span className='px-2'>{ibw}<br/></span> 
                Current Weight : <span className='px-2'>{Weight}<br/></span> 
                Outcome : <span className='px-2'>{outcome}</span>
                <div className='text-xs italic w-full  truncate pt-1'>
                IBW is used as a guide for healthy body weight. Deviations from IBW can indicate underweight or overweight conditions and help assess nutritional status.
                </div>
        </div>
    )
}

export default IBW;