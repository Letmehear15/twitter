import nodemailer from 'nodemailer'

const options = {
    host: process.env.MAILERHOST || 'smtp.mailtrap.io',
    port: Number(process.env.MAILERPORT) || 2525,
    auth: {
      user: process.env.MAILERUSER,
      pass: process.env.MAILERPASSWORD
    }
}

export const transport = nodemailer.createTransport(options)