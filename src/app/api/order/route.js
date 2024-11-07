import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/lib/db";
import { orderSchema } from "@/app/lib/ordersModel";
import { roomSchema } from "@/app/lib/roomModel";

export async function POST(request) {
    let payload = await request.json();
    let success= false;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    const orderObj = new orderSchema(payload);
    const result = await orderObj.save();
    if(result){
        success=true;
    }
    console.log(payload);
    return NextResponse.json({ result, success })
}

// export async function GET(request){
//     const userId= request.nextUrl.searchParams.get('id')
//     // let result = userId;
//     await mongoose.connect(connectionStr, { useNewUrlParser: true });
//     let result= await orderSchema.find({user_id:userId});
//     let success=false;
//     // console.log(result)
//     if(result){
//         let roomData = await Promise.all(
//             result.map(async (item)=>{
//                 let roomInfo={};
//                 roomInfo.data = await roomSchema.findOne({ _id: item.room_id})
//                 // roomInfo.amount=item.amount;
//                 // roomInfo.status=item.status;
//                 return roomInfo;
//             })
//         )
//         result = roomData;
//         // console.log(roomInfo)
//         success=true;
//     }
//     // console.log(result)
//     return NextResponse.json({result, success})
// }


export async function GET(request) {
    const userId = request.nextUrl.searchParams.get('id');
    
    // Connect to the database
    await mongoose.connect(connectionStr, { useNewUrlParser: true });

    // Fetch orders for the given user ID
    let result = await orderSchema.find({ user_id: userId });
    let success = false;

    if (result && result.length > 0) {
        // Iterate through orders and fetch room details for each room_id
        let roomData = await Promise.all(
            result.map(async (item) => {
                // Split the room_id string into an array of room IDs
                let roomIds = item.room_id.split(',');

                // Fetch details for each room
                let roomsInfo = await Promise.all(
                    roomIds.map(async (roomId) => {
                        return await roomSchema.findOne({ _id: roomId });
                    })
                );

                return {
                    order: item,    // Original order data
                    rooms: roomsInfo // Array of room details
                };
            })
        );

        result = roomData;  // Update result with room and order data
        success = true;
    }

    // Return response with fetched result and success status
    return NextResponse.json({ result, success });
}
