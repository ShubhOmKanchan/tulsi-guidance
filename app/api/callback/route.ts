import { NextResponse } from "next/server";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbz2e02fSwOPFu7dFpSk73C4de0fcB-tFdJOCTTKOC2bLjsb8s0RSAcvaRhaaUzU6g5bLA/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const text = await response.text();

    console.log(text);

    return NextResponse.json({
    success: true,
    response: text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Submission failed.",
      },
      {
        status: 500,
      }
    );
  }
}