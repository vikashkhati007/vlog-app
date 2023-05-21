const MONGO_URl:any = process.env.MONGODB_URL;
import mongoose from "mongoose";

async function connectMongo(){
   return await mongoose.connect(MONGO_URl);
} 

export default connectMongo;