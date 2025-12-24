import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbyAunfrubyCJmYkfA7WXUhqiIFqkXwOn8gtD0FTngxwAxbkcsOW5jZPz2_R2L7PsBy1Bw/exec"

    const res = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        website: body.website,
        businessType: body.businessType,
        source: "Website Audit",
      }),
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
