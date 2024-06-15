export function calculateBMI(height , weight ) {
    height = height / 100;
    const bmi = weight / (height * height);
    return Number(bmi.toFixed(2)); 
}

export function calculateBFP(height , gender, age  , weight )  {  
    height = height / 100;
    const bmi = calculateBMI(height, weight);
    let bfp;
    if (gender === "Male") {
        bfp = 1.20 * bmi + 0.23 * age - 16.2;
    } else {
        bfp = 1.20 * bmi + 0.23 * age - 5.4;
    }
    return Number(bfp.toFixed(2));
}

export function calculateBMR(height , weight , age , gender) {
    let bmr ;
    if (gender === 'Male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return Number(bmr.toFixed(2));
}