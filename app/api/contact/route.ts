import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectIdea, techStack } = body;
    
    // Validate required fields
    if (!name || !email || !projectIdea) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Collaboration request received:', {
      name,
      email,
      projectIdea,
      techStack
    });

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn('Email credentials not configured. Skipping email sending.');
      return NextResponse.json(
        { success: true, message: 'Your collaboration request has been received!', warning: 'Email sending is not configured on the server.' },
        { status: 200 }
      );
    }

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'anuj.jain@adypu.edu.in', // Your email address
        replyTo: email,
        subject: `New Collaboration Request from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Project Idea: ${projectIdea}
          Tech Stack: ${techStack || 'Not specified'}
        `,
        html: `
          <h2>New Collaboration Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Idea:</strong> ${projectIdea}</p>
          <p><strong>Tech Stack:</strong> ${techStack || 'Not specified'}</p>
        `,
      });

      return NextResponse.json(
        { success: true, message: 'Your collaboration request has been received!' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { success: true, message: 'Your request was received, but there was an issue sending the email notification.' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing collaboration request:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}

// Add OPTIONS method to handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}