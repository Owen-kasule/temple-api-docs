const { body, validationResult } = require('express-validator');

const validateTemple = [
    body('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
    body('location').isString().withMessage('Location must be a string').notEmpty().withMessage('Location is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('establishedYear').optional().isInt({ min: 0 }).withMessage('Established Year must be a positive integer'),
];

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateTemple,
    validateRequest,
};