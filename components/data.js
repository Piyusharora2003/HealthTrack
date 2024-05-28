export const keys = [{
        name: 'Height' , type: 'number' , scale : "cm"
     },{
         name: 'Weight' , type: 'number' , scale : "kg"
     },{
         name: 'Age' , type: 'number' , scale : "years"
     },{
         name: "Gender" , type: "option" , enum : ["Male","Female"]
     }
]

export const RecommendedExercises = {
    Underweight : {
        Goals : [
            "Increase muscle mass ",
            "Ensure a balanced diet",
            "Improve strength and overall health"
        ],
        Exercises : [
            "Strength Training",
            "Resistance Training",
            "Cardio"
        ], 
    },
    Slightly_Underweight : {
        Goals : [
            "Increase muscle mass ",
            "Maintain cardiovascular health",
            "Improve strength and overall health"
        ],
        Exercises : [
            "Strength Training",
            "Cardio",
            "Flexibility exercises"
        ], 
    },
    Healthy : {
        Goals : [
            "Maintain fitness level",
            "Balanced workout routine including strength, cardio, and flexibility exercises",
        ],
        Exercises : [
            "Strength Training",
            "Flexibility and Mobility",
            "Cardio"
        ], 
    },
    Slightly_Overweight : {
        Goals : [
            "Reduce body fat",
            "Improve cardiovascular health",
            "Build or maintain muscle mass"
        ],
        Exercises : [
            "Strength Training",
            "Flexibility and Mobility",
            "Cardio"
        ], 
    },
    Overweight : {
        Goals : [
            "Reduce body fat",
            "Improve overall fitness",
            "Enhance mobility and flexibility"
        ],
        Exercises : [
            "Strength Training",
            "Flexibility and Mobility",
            "Cardio"
        ], 
    }
}

export const blogCards = {
    Underweight:  [{
            title: "Strength Training",
            image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/11/Strength-training-programs.jpg?fit=1988%2C1327&ssl=1"
        },{
            title: "Resistance Training",
            image: "https://www.verywellfit.com/thmb/wfnguhCstO5GjNzsRHizh4RJ4HY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-455244937-598090e8b2144344af56ba5f836e9072.jpg"
        },{
            title: "Cardio",
            image: "https://www.shutterstock.com/image-photo/group-young-athlete-male-female-600nw-2187804365.jpg"
        }] ,
    Slightly_Underweight : [{
            title: "Strength Training",
            image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/11/Strength-training-programs.jpg?fit=1988%2C1327&ssl=1"
        },{
            title: "Cardio",
            image: "https://www.shutterstock.com/image-photo/group-young-athlete"
    },{
            title: "Flexibility exercises",
            image: "https://hips.hearstapps.com/hmg-prod/images/good-stretch-after-training-royalty-free-image-654424976-1551378236.jpg"
    }],
    Healthy : [{
            title: "Strength Training",
            image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/11/Strength-training-programs.jpg?fit=1988%2C1327&ssl=1"
        },{
            title: "Flexibility and Mobility",
            image: "https://hips.hearstapps.com/hmg-prod/images/good-stretch-after-training-royalty-free-image-654424976-1551378236.jpg"
        },{
            title: "Cardio",
            image: "https://www.shutterstock.com/image-photo/group-young-athlete"
        }
    ],
    Slightly_Overweight : [{
            title: "Strength Training",
            image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/11/Strength-training-programs.jpg?fit=1988%2C1327&ssl=1"
        },{
            title: "Flexibility and Mobility",
            image: "https://hips.hearstapps.com/hmg-prod/images/good-stretch-after-training-royalty-free-image-654424976-1551378236.jpg"
        },{
            title: "Cardio",
            image: "https://www.shutterstock.com/image-photo/group-young-athlete"
        }
    ],
    Overweight : [{
        title: "Strength Training",
        image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/11/Strength-training-programs.jpg?fit=1988%2C1327&ssl=1"
    },{
        title: "Flexibility and Mobility",
        image: "https://hips.hearstapps.com/hmg-prod/images/good-stretch-after-training-royalty-free-image-654424976-1551378236.jpg"
    },{
        title: "Cardio",
        image: "https://www.shutterstock.com/image-photo/group-young-athlete"
    }
],
};

export const images = [{
    title: "Strength Training",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/11/Strength-training-programs.jpg?fit=1988%2C1327&ssl=1"
},{
    title: "Flexibility and Mobility",
    image: "https://hips.hearstapps.com/hmg-prod/images/good-stretch-after-training-royalty-free-image-654424976-1551378236.jpg"
},{
    title: "Cardio",
    image: "https://e1.pxfuel.com/desktop-wallpaper/687/167/desktop-wallpaper-fitness-ultra-cardio.jpg"
}
]