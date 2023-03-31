import { NextResponse } from "next/server";

export async function POST(ctx: Request) {
 const response = await fetch("https://localhost:3000/api/getImages", {
  cache: "no-store",
 })

 const textData = await response.text();

 return new Response(JSON.stringify(textData.trim()), {
  status: 200,
 });
}