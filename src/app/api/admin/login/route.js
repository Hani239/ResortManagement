import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/lib/db";
import { adminSchema } from "@/app/lib/adminModel";

export async function POST(request) {
    let payload = await request.json();
    let success= false;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    const result = await adminSchema.findOne({email: payload.email, password: payload.password});
    if(result){
        success=true;
    }
    return NextResponse.json({ result, success })
}