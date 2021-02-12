import path from 'path'
import fs from 'fs'

export default class Email {


    static setSubject() {
        return `Boleto passagens AUMORE`
    }
    
    static setBody(userName: string): string {
        return `
            <div>
                <p>Prezado associado ${userName}, segue em anexo seu boleto.</p>
            </div>
            ${Email.setFooter()}
        `
    }

    static setFooter(): string {
        return `
            <div>
                <p>Email automático, por favor não responda este email.</p>
            </div>
        `
    }

    static getAttachment(userName: string) {
        const file = path.join(__dirname, `boletos/${userName}.pdf`)
        if (fs.existsSync(file)) {
            return {
                filename: `${userName}.pdf`,
                path: file,
                contentType: 'application/pdf'
            }
        } else return {
            filename: '',
            path: '',
            contentType: ''
        }
    }
}