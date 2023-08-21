import express, { Router } from 'express'
import getProduct from '../controllers/product/getProduct.js'
import postProduct from '../controllers/product/postProduct.js'

// Rotas do Produto
const router = express.Router()


router.get('/', getProduct)
router.post('/', postProduct)

export default router