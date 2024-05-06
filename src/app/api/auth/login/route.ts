import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function POST(req: NextRequest){
    try{
        const {email, password} = await req.json();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return NextResponse.json(userCredential, {status: 200});
    }
    catch(error){
        const errorMessage = (error as Error).message;
        return NextResponse.json({message: errorMessage}, {status: 400});
    }
}

