import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:93370@cluster0.foxmpt4.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
