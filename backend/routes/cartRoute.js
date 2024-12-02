import express from 'express'
import { getUserCart, updateCart, addToCart } from '../controllers/cartController.js'
import authUser from '../middlewares/auth.js'

const cartRoute = express.Router()

cartRoute.post('/get', authUser, getUserCart)
cartRoute.post('/update', authUser, updateCart)
cartRoute.post('/add', authUser, addToCart)

export default cartRoute

