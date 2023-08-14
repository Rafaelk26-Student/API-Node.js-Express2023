// Importação da biblioteca express no projeto
// const express = require('express')
// Constante definida para utilização das rotas
import express from 'express'
import userRouter from './routes/userRouter.js'

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

api.use('/user', userRouter)

// Inicializando o servidor na porta 3000 utilizando api.listen
api.listen(3000, ()=>{
    console.log("Rodando servidor na porta 3000. http://localhost:3000")
})

