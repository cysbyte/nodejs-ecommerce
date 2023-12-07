const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

/**
 * @swagger
 * tags: 
 *   name: Products
 *   description: API endpoints to manage products
 */

/**
 * @swagger
 *   /products:
 *     get:
 *       summary: Get all products
 *       tags: [Products]
 *       responses:
 *         "200":
 *           description: The list of all products
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Product'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuth, shopController.getCart);

router.post('/cart', isAuth, shopController.postCart);

router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

router.post('/create-order', isAuth, shopController.postOrder);

router.get('/orders', isAuth, shopController.getOrders);

module.exports = router;
