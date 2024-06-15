"use server";
import User from "@/model/DataModel";
import connectDB from "./ConnectDB";

export default async function addToDb(userData , state , city) {
    // console.log("adding to db called");
    // console.log(userData);
    try{
        await connectDB();
        const { Age, Weight , Height , Gender  } = userData;

        const newUser = new User({
            age : Age,
            weight: Weight,
            height: Height,
            gender: String(Gender).toLowerCase(),
            state: state,
            city: city || ""
        });
        await newUser.save();
        // console.log("Data Added to Database" , newUser);
        return true; 
    }
    catch(err) {
        console.log(err);
    }   
    return false;
}