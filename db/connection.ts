import mysql from 'mysql2/promise'
import config from 'config'

export default async function connect() {
    
    const base = 'mysql://'
    const connectionString = base + `${config.get('dataBase.user')}:${config.get('dataBase.password')}@${config.get('dataBase.hostName')}:${config.get('dataBase.port')}/${config.get('dataBase.schema')}`
    const connection = await mysql.createConnection(connectionString)
    return connection
}