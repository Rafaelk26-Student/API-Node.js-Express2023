import express, { Router } from 'express'
import getLogin from '../controllers/auth/getAuthLogin.js'
import getLogout from '../controllers/auth/getAuthLogout.js'

// Rotas do Produto
const router = express.Router()


router.get('/login', getLogin)
router.get('/logout', getLogout)

export default router