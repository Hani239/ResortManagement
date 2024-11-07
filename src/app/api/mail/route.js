import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message, to } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'Paradise Pulse Resort',
            port: 465,
            secure: true,
            auth: {
                user: 'paradisepulse4@gmail.com',
                pass: 'usmr hkga akyr gbnm'
            }
        })

        const mailOption = {
            from: 'paradisepulse4@gmail.com',
            to: to,
            subject: subject,
            html: `
        <h2>${subject}</h2>
        <div>${message}</div>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}