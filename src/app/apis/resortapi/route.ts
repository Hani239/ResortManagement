import { connectionStr } from "@/app/lib/db";
import { resortSchema } from "@/app/lib/modelResort";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
    })
    try {
        const data = await resortSchema.find();
        console.log(data);
        return NextResponse.json({ data });

    } catch (error) {
        console.error("Error retrieving data:", error);
        return NextResponse.error(new Error("Failed to fetch data"));
    }
    // return NextResponse.json({ result: true })
}

export async function POST(request){
    let payload= await request.json();
    let result;
    await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
    })

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