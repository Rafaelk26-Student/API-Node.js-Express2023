// Importação da biblioteca express no projeto
// const express = require('express')
// Constante definida para utilização das rotas
import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import authRouter from './routers/authRouter.js'
import { port } from './config.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const api = express()


// converte toda requisição com body json para objeto no req.body
api.use(cors())
api.use(bodyParser.json())

// Primeira rota configurada "/ <- Home"
api.get('/', (req, res) => {
    // Retorna um objeto json com uma mensagem simples
    res.json({message: "Bem-Vindo a nossa API!"})
})


api.use('/user', userRouter);
api.use('/produto', productRouter);
api.use('/auth', authRouter);


// Inicializando o servidor na porta 3000 utilizando api.listen
api.listen(port, ()=>{
    console.log(`Rodando servidor na porta ${port}. http://localhost:${port}`)
})

