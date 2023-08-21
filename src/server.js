// Importação da biblioteca express no projeto
// const express = require('express')
// Constante definida para utilização das rotas
import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import authRouter from './routers/authRouter.js'

const Router = express.Router()
const api = express()

// Primeira rota configurada "/ <- Home"
api.get('/', (req, res) => {
    // Retorna um objeto json com uma mensagem simples
    res.json({message: "Bem-Vindo a nossa API!"})
})

api.post('/', (req, res) => {
    // Retorna um objeto json com uma mensagem simples
    res.json({message: "Método post"})
})

api.put('/', (req, res) => {
    // Retorna um objeto json com uma mensagem simples
    res.json({message: "Método put"})
})

api.delete('/', (req, res) => {
    // Retorna um objeto json com uma mensagem simples
    res.json({message: "Método delete"})
})

api.use('/user', userRouter);
api.use('/produto', productRouter);
api.use('/auth', authRouter);


// Inicializando o servidor na porta 3000 utilizando api.listen
api.listen(3000, ()=>{
    console.log("Rodando servidor na porta 3000. http://localhost:3000")
})

