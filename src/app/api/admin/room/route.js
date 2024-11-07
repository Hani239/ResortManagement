import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/lib/db";
import { roomSchema } from "@/app/lib/roomModel"

export async function POST(request) {
    let payload = await request.json();
    let success= false;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    const room = new roomSchema(payload);
    const result = await room.save()
    if(result){
        success=true;
    }
    return NextResponse.json({ result, success })
}