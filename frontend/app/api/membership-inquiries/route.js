import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const body = await request.json();
    const inquiryData = body.data || body;

    const referenceId = 'HSC-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const record = {
      referenceId,
      type: 'Club Membership Application',
      submittedAt: new Date().toISOString(),
      ...inquiryData,
    };

    // Save locally
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
      console.warn('Local save error:', fsErr.message);
    }

    // Try Strapi if available
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    try {
      await fetch(`${strapiUrl}/api/membership-inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: inquiryData }),
        signal: AbortSignal.timeout(3000),
      });
    } catch (e) {
      // ignore strapi timeout
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Membership dossier received.',
    }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
