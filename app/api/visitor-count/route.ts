import { NextResponse } from 'next/server';

// In a real application, this would be stored in a database
// For this demo, we'll use a simple in-memory counter that resets on server restart
let visitorCount = 1000; // Starting with a base count

export async function GET() {
  return NextResponse.json({ count: visitorCount });
}

export async function POST() {
  // Increment the visitor count
  visitorCount += 1;
  return NextResponse.json({ count: visitorCount });
}

// Add OPTIONS method to handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}