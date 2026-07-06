import { NextResponse } from "next/server";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzieHXmK4yP0tCEHuqMTgfcua_dGN1VpvLsn65IcJHqyq2qaJcaEYtKnKZGYoul0noSag/exec";

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