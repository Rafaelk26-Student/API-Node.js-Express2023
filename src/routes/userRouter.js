import express, { Router } from 'express'

// Rotas do Usuário
const router = express.Router()


router.get('/user', (req, res) => {
    res.json({message: "Bem-Vindo a nossa API! user"})
})

router.post('/user', (req, res) => {
    res.json({message: "Método post router user"})
})

router.put('/user', (req, res) => {
    res.json({message: "Método put router user"})
})

router.delete('/user', (req, res) => {
    res.json({message: "Método delete router user"})
})

export default router