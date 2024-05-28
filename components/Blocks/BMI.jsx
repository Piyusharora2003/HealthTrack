import React from 'react'
import styles from "./BlockStyles.module.css";

// interface userData {
//     Height: number;
//     Weight: number;
//     Age: number;
//     Gender : "Male" | "Female"
// }

function calculateBMI(height, weight) {
    height = height / 100;
    const bmi = weight / (height * height);
    return bmi.toFixed(2); 
}

function bmiCategory(bmi) {
    let Category = '';
    if (bmi < 18.5) {
        Category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        Category = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        Category = 'Overweight';
    } else {
        Category = 'Obesity';
    }
    return Category;
}

function CategoryColor(category) {
    if(category === "Underweight") {
        return 'bg-blue-800';
    } else if (category === "Normal") {
        return 'bg-green-800';
    } else if (category === "Overweight") {
        return 'bg-yellow-800';
    } else {
        return 'bg-red-800';
    }
}

function BMI({userData}) {
        const {Height , Weight , Age , Gender} = userData;
        const bmi = calculateBMI(Height, Weight);
        const category = bmiCategory(bmi);
    return (
        <div 
            className={`${CategoryColor(category)} w-[300px] m-3 p-4 rounded-lg font-extrabold ${styles.blockHeightAdjustable}`}
            id='bmiBlock'
        >
                BMI : <span className='px-2'>{bmi}<br/></span> 
                Category : <span className='px-2'>{category}</span> 
                <div className='text-xs italic w-full  truncate pt-1'>
                    The Body Mass Index (BMI) is a measure of body fat based on an individual's weight and height. It's calculated by dividing the weight in kilograms by the square of the height in meters. 
                </div>
        </div>
    )
}

export default BMI