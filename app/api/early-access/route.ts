import { NextResponse } from "next/server";

export async function POST(request: Request){
  try{
    const data = await request.json();
    console.log("Early access submission:", data);
    return NextResponse.json({ ok: true });
  }catch(e){
    return NextResponse.json({ ok: false, error: "Bad Request" }, { status: 400 });
  }
}