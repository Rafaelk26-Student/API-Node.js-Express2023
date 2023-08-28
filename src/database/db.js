import mysql from 'mysql2/promise'
import { DB_HOST, DB_USER, DB_PASS, DB_NAME } from '../config.js'

const pool = await mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})

export default pool