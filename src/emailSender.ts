import fs from 'fs'
import path from 'path'
import connect from '../db/connection'
import Sender from './Sender'
import { getUserSql } from './queries/user'
import User from './User'

export default async function emailSender() {
    
    try {
        const dirPath = path.join(__dirname, 'boletos')
        const files = fs.readdirSync(dirPath)
    
        for (const file of files) {
            if (path.extname(file) === '.pdf') {
                const userName = await getUser(file.replace('.pdf', ''))
                await new Sender(userName).sendMail()
            }
        }
    } catch (error) {
        console.log(error)
    }
}

async function getUser(userName: string): Promise<User> {
    const conn = await connect()
    const [query] = await conn.query(getUserSql(), [`%${userName}%`])
    const result =  query[0]
    if (result)
        return {
            name: result.NOME,
            email: result.EMAIL
        }
    else throw new Error(`Usuário ${userName} não encontrado`)
}

emailSender()