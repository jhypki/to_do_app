import { NextResponse } from "next/server";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";

export async function POST(){
    try{
        await signOut(auth);
        return NextResponse.json({message: "User signed out successfully"}, {status: 200});
    }
    catch(error){
        const errorMessage = (error as Error).message;
        return NextResponse.json({message: errorMessage}, {status: 400});
    }
}