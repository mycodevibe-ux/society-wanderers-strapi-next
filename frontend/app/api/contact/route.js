import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const body = await request.json();
    const inquiryData = body.data || body;

    const referenceId = 'HSW-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const record = {
      referenceId,
      submittedAt: new Date().toISOString(),
      ...inquiryData,
    };

    // 1. Persist locally to data/inquiries.json so no inquiry is ever lost
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, 'inquiries.json');
      let currentInquiries = [];
      if (fs.existsSync(filePath)) {
        try {
          currentInquiries = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
          currentInquiries = [];
        }
      }
      currentInquiries.unshift(record);
      fs.writeFileSync(filePath, JSON.stringify(currentInquiries, null, 2), 'utf8');
    } catch (fsErr) {
      console.warn('Could not write to local inquiries file:', fsErr.message);
    }

    // 2. Attempt to forward to Strapi if available
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    try {
      const strapiRes = await fetch(`${strapiUrl}/api/booking-inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: inquiryData }),
        signal: AbortSignal.timeout(3000),
      });
      if (strapiRes.ok) {
        console.log(`[HSW] Contact inquiry ${referenceId} synced to Strapi successfully`);
      }
    } catch (strapiErr) {
      console.log(`[HSW] Strapi sync skipped (${strapiErr.message}), inquiry saved locally`);
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Your message has been received by HSW Global Private Advisory.',
    }, { status: 200 });

  } catch (error) {
    console.error('[HSW] Contact submission error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to process contact message',
    }, { status: 500 });
  }
}
