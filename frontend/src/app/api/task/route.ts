// app/api/task/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase/firebase";
import { collection, addDoc, query, where, getDocs, updateDoc, doc, writeBatch, orderBy } from "firebase/firestore";


export async function POST(req: NextRequest) {
    try {
        const { task, uid } = await req.json();
        const docRef = await addDoc(collection(db, "tasks"), {
            task,
            uid,
            completed: false,
            added: new Date()
        });

        // Proper success response
        return NextResponse.json({ id: docRef.id }, { status: 200 });
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json({ message: errorMessage }, { status: 400 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const uid = searchParams.get("uid");

        if (!uid) {
            return NextResponse.json({ message: "Missing uid parameter" }, { status: 400 });
        }

        const q = query(collection(db, "tasks"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);

        const tasks = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        const sortedTasks = tasks.sort((a, b) => a.added - b.added).sort((a, b) => a.completed - b.completed);

        return NextResponse.json(tasks, { status: 200 });
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json({ message: errorMessage }, { status: 400 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const { id, completed } = await req.json();

        await updateDoc(doc(db, `tasks/${id}`), {
            completed,
        });

        return NextResponse.json({ message: "Task updated" }, { status: 200 });
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json({ message: errorMessage }, { status: 400 });
    }
}

export async function DELETE(req: NextRequest) {
    const q = query(collection(db, "tasks"), where("completed", "==", true));
    const querySnapshot = await getDocs(q);

    const batch = writeBatch(db);
    querySnapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });

    try{
        await batch.commit();
        return NextResponse.json({ message: "Tasks deleted" }, { status: 200 });
    }
    catch(error){
        const errorMessage = (error as Error).message;
        return NextResponse.json({ message: errorMessage }, { status: 400 });
    }
    

}