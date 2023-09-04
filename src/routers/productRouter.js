import express, { Router } from 'express'
import getProduct from '../controllers/product/getProduct.js'
import postProduct from '../controllers/product/postProduct.js'
import putProduct from '../controllers/product/putProduct.js'
import deleteProduct from '../controllers/product/deleteProduto.js'

// Rotas do Produto
const router = express.Router()


router.get('/', getProduct)
router.post('/', postProduct)
router.put('/', putProduct)
router.delete('/', deleteProduct)

export default router