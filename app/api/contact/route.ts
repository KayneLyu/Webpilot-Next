// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message, checked, lastName } = await req.json();

  if(!checked) {
    return NextResponse.json({ success: false, error: 'Please read the privacy policy.' }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
  }

  // SMTP 配置（建议使用 .env 配置环境变量）
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"官网留言" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // 接收邮件的地址
      subject: '网站留言',
      html: `
        <p><strong>姓名：</strong> ${name} ${lastName || ''}</p>
        <p><strong>邮箱：</strong> ${email}</p>
        <p><strong>留言内容：</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Send email failed !' }, { status: 500 });
  }
}
