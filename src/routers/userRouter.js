import express, { Router } from 'express'
import getUser from '../controllers/user/getUser.js'
import postUser from '../controllers/user/postUser.js'
import putUser from '../controllers/user/putUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

// Rotas do Usuário
const router = express.Router()


router.get('/', getUser)

router.post('/', postUser) 

router.put('/', putUser)

router.delete('/', deleteUser)
 
export default router