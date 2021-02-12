import Email from "./Email";
import config from 'config'
import * as nodemailer from 'nodemailer'
import User from "./User";

export default class Sender {

    userName: string
    email: string
    
    constructor(user: User) {
        this.userName = user.name
        this.email = user.email
    }

    async sendMail() {

        const {filename, path, contentType} = Email.getAttachment(this.userName)

        const mailOptions = {
            from: config.get('emailConfig.email') as string,
            to: this.email,
            subject: Email.setSubject(),
            html: Email.setBody(this.userName),
            attachments: [
                {
                    filename,
                    path,
                    contentType
                }
            ]
        }

        const transporter = nodemailer.createTransport({
            host: config.get('emailConfig.host'),
            port: config.get('emailConfig.port'),
            secure: false,
            auth: {
                user: config.get('emailConfig.email'),
                pass: config.get('emailConfig.password')
            },
            tls: { rejectUnauthorized: false }
        })

        if(filename.length) {
            try {
                await transporter.sendMail(mailOptions)
                console.log(`E-mail enviado para ${this.userName}`);
                
            } catch (error) {
                console.error(`O envio do e-mail para ${this.userName} falhou`)
                                
            }
        }

    }
}