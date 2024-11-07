import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { roomSchema } from "@/app/lib/roomModel";
import { NextResponse } from "next/server";

export async function GET(request, content){
    const id = content.params.id
    // console.log(id)
    let success = false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const result = await roomSchema.find();
    if(result){
        success=true;
    }
    return NextResponse.json({result, success})
}

export async function DELETE(request, content){
    const id = content.params.id
    // console.log(id)
    let success = false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const result = await roomSchema.deleteOne({_id:id});
    if(result.deletedCount>0){
        success=true;
    }
    return NextResponse.json({result, success})
}