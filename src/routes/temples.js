const express = require('express');
const router = express.Router();
const templeController = require('../controllers/templeController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Temple:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated MongoDB ID
 *         name:
 *           type: string
 *           description: The name of the temple
 *         location:
 *           type: string
 *           description: The location of the temple
 *         description:
 *           type: string
 *           description: Description of the temple
 *         established:
 *           type: string
 *           description: When the temple was established
 *         type:
 *           type: string
 *           description: Type of temple (Buddhist, Hindu, etc.)
 *         dedicated:
 *           type: string
 *           format: date
 *           description: The dedication date
 *         imageUrl:
 *           type: string
 *           description: URL to the temple image
 */

/**
 * @swagger
 * /temples:
 *   get:
 *     summary: Retrieve a list of all temples
 *     tags: [Temples]
 *     responses:
 *       200:
 *         description: A list of temples
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Temple'
 */
router.get('/', templeController.getAllTemples);

/**
 * @swagger
 * /temples/{id}:
 *   get:
 *     summary: Get a temple by ID
 *     tags: [Temples]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The temple ID
 *     responses:
 *       200:
 *         description: Temple details
 *       404:
 *         description: Temple not found
 */
router.get('/:id', templeController.getTempleById);

/**
 * @swagger
 * /temples:
 *   post:
 *     summary: Create a new temple
 *     tags: [Temples]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Temple'
 *     responses:
 *       201:
 *         description: Temple created successfully
 *       400:
 *         description: Invalid input data
 */
router.post('/', templeController.createTemple);

/**
 * @swagger
 * /temples/{id}:
 *   put:
 *     summary: Update a temple by ID
 *     tags: [Temples]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The temple ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Temple'
 *     responses:
 *       200:
 *         description: Temple updated successfully
 *       404:
 *         description: Temple not found
 */
router.put('/:id', templeController.updateTemple);

/**
 * @swagger
 * /temples/{id}:
 *   delete:
 *     summary: Delete a temple by ID
 *     tags: [Temples]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The temple ID
 *     responses:
 *       200:
 *         description: Temple deleted successfully
 *       404:
 *         description: Temple not found
 */
router.delete('/:id', templeController.deleteTemple);

module.exports = router;