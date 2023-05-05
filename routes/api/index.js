// Import the required modules
const router = require('express').Router(); // Express router module
const categoryRoutes = require('./category-routes'); // Custom category routes module
const productRoutes = require('./product-routes'); // Custom product routes module
const tagRoutes = require('./tag-routes'); // Custom tag routes module

// Set up routes for each module
router.use('/categories', categoryRoutes); // Use category routes at /categories
router.use('/products', productRoutes); // Use product routes at /products
router.use('/tags', tagRoutes); // Use tag routes at /tags

// Export the router to be used in other files
module.exports = router;