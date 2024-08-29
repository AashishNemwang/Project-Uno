import express from "express";
import { createProduct, getProduct, getProductByUserID } from "../controller/product.js";

const router = express.Router();

router.post('/product',createProduct)
router.get('/getproduct',getProductByUserID)
router.get('/getproduct/:id',getProduct)

export default router;
