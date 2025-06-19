import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: '缺少字段' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'qiye.aliyun.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, // 邮箱地址
      pass: process.env.MAIL_PASS, // SMTP授权码
    },
  });

  try {
    await transporter.sendMail({
      from: `"公司门户网站" <${process.env.MAIL_USER}>`,
      to: 'your-company@email.com', // 公司接收邮件地址
      subject: '网站留言',
      html: `
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>邮箱：</strong> ${email}</p>
        <p><strong>留言内容：</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('邮件发送失败', error);
    return NextResponse.json({ error: '邮件发送失败' }, { status: 500 });
  }
}
