import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { genRefCode } from "@/lib/genRefCode";
import { SITE_URL } from "@/lib/env";
import { upsertUser, getUserByEmail } from "@/lib/db";

export async function POST(request: Request){
  try{
    const body = await request.json();
    const email = (body.email || '').trim().toLowerCase();
    const name = (body.name || '').trim();
    if(!email || !email.includes('@')){
      return NextResponse.json({ ok:false, error:"Email inválido" }, { status: 400 });
    }

    // Use existing user if present; otherwise generate a new code
    const existing = await getUserByEmail(email);
    const code = existing?.code || genRefCode(name, email);

    // capture referrer from cookie (if different from my own code)
    const refCookie = cookies().get('ref')?.value;
    const referrer = refCookie && refCookie !== code ? refCookie : existing?.referrer || null;

    const user = await upsertUser({ email, name, code, referrer });

    const shareUrl = new URL(SITE_URL);
    shareUrl.searchParams.set('r', user.code);

    return NextResponse.json({ ok:true, code: user.code, referrer: user.referrer ?? null, shareUrl: shareUrl.toString() });
  }catch(e:any){
    return NextResponse.json({ ok: false, error: e?.message || "Bad Request" }, { status: 400 });
  }
}
