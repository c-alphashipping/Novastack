import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const data = new URLSearchParams()
    data.append("name", body.name || "")
    data.append("email", body.email || "")
    data.append("message", body.message || "")
    data.append("source", "NovaStack Website")

    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbx4fdIp1rL53vQqEsgN32ENuJvf3SxoxWN9mrOw0f3xQO8zfg_VqLiV_cAZUjhi0FlU/exec"

    const res = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    })

    const text = await res.text()

    return NextResponse.json({ success: true, result: text })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}
