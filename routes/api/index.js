const router = require("express").Router();
const lastCallRoutes = require("./lastCallRestaurant");

// Routes
router.use("/parking", lastCallRoutes);

module.exports = router;
