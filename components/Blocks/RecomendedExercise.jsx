import { RecommendedExercises } from "../data.js";
import styles from "./BlockStyles.module.css";

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

function RecomendedExercise({userData}) {
    const {Height , Weight , Gender} = userData;

    const ibw = calculateIBW(Height, Gender);
    
    const healthStatus = function(){
        const weightDifference = (Math.abs(Weight - ibw) / ibw) * 100;
        const category = Weight - ibw > 0 ? "Overweight" : "Underweight";
        if(weightDifference < 5) {
            return "Healthy";
        }else if(weightDifference < 10) {
            return `Slightly_${category}`;
        } else {
            return category;
        }
    }()
    
    // returns @object {Goals : [], Exercises : []}
    const recommended = RecommendedExercises[healthStatus]; 
    
    return (
    <div className={` w-[300px] m-3 py-3 px-2 rounded-lg bg-indigo-950	 font-bold`}>
        <div className='text-center font-extrabold text-xl'>Recommended Exercises</div>
        <div className='flex flex-col '>
            <div className=" my-2 rounded-lg p-2 bg-blue-800">
                <div className='font-extrabold text-xl mt-1 '>Goals : </div>
                <ul className='list-disc list-inside text-sm'>
                    {
                        recommended.Goals.map((goal, index) => {
                            return <li key={index}>{goal}</li>
                        })
                    }
                </ul>
            </div>

            <div className=" mb-2 mt-1 bg-green-800 rounded-lg p-2">
                <div className='font-extrabold text-xl mt-1 '>Exercises : </div>
                <ul className='list-disc list-inside text-sm'>
                    {
                        recommended.Exercises.map((goal, index) => {
                            return <li key={index}>{goal}</li>
                        })
                    }
                </ul>
            </div>
        </div>    
   </div>
  )
}

export default RecomendedExercise