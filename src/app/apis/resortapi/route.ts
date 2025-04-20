import { connectionStr } from "@/app/lib/db";
import { resortSchema } from "@/app/lib/modelResort";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr); // no need for options
  
    try {
      const data = await resortSchema.find();
      console.log(data);
      return NextResponse.json({ data });
  
    } catch (error) {
      console.error("Error retrieving data:", error);
      return NextResponse.json(
        { success: false, message: "Failed to fetch data" },
        { status: 500 }
      );
    }
  }

export async function POST(request: { json: () => any; }){
    let payload= await request.json();
    let result;
    await mongoose.connect(connectionStr); // no need for options

    if(payload.login){
        //For Login
        result=await resortSchema.findOne({email:payload.email, password:payload.password})
    }
    else{
        //For Signup
        const demo1 = new resortSchema(payload)
        const result = await demo1.save();
    }
    return NextResponse.json({result,success:true})
}