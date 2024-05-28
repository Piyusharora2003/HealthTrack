import React from 'react'
import styles from "./BlockStyles.module.css";

// interface userData {
//     Height: number; 
//     Weight: number;
//     Age: number;
//     Gender : "Male" | "Female"
// }

function calculateBFP(height, gender , age , weight) {  
    height = height / 100;
    const bmi = weight / (height * height);
    let bfp;
    if (gender === "Male") {
        bfp = 1.20 * bmi + 0.23 * age - 16.2;
    } else {
        bfp = 1.20 * bmi + 0.23 * age - 5.4;
    }
    return bfp.toFixed(2);
}

//  Categories are : [Essential Fat, Athletes, Fitness, Average, Obese]
function findCategory(bfp , Gender) {
    if(Gender === "Male") {
        if(bfp < 6) {
            return "Essential Fat"
        } else if (bfp < 14) {
            return "Athletes"
        } else if (bfp < 18) {
            return "Fitness"
        } else if (bfp < 25) {
            return "Average"
        } else {
            return "Obese"
        }
    } else {
        if(bfp < 14) {
            return "Essential Fat"
        } else if (bfp < 21) {
            return "Athletes"
        } else if (bfp < 25) {
            return "Fitness"
        } else if (bfp < 32) {
            return "Average"
        } else {
            return "Obese"
        }
    }
}

function CategoryColor(category) {
    if(category === "Essential Fat" || category === "obese") {
        return 'bg-red-800';
    } else {
        return 'bg-green-800';
    } 
}

function BFP({userData}) {
        const {Height , Weight , Gender , Age} = userData;
        const bfp = calculateBFP(Height, Gender , Age , Weight);
        const outcome = findCategory(bfp , Gender);

    return (
        <div className={`${CategoryColor(outcome)} w-[300px] m-3 p-4 rounded-lg font-extrabold ${styles.blockHeightAdjustable}`}>
                Body Fat Percentage : <span className='px-2'>{bfp} %<br/></span> 
                Outcome : <span className='px-2'>{outcome}</span>
                <div className='text-xs italic w-full  truncate pt-1'>
                    Body fat percentage provides a more direct assessment of body composition than BMI, which does not distinguish between muscle and fat mass. High body fat percentage can increase the risk of metabolic syndrome, cardiovascular diseases, and other health conditions.
                </div>
        </div>
    )
}

export default BFP;