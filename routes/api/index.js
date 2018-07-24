const router = require("express").Router();
const lastCallRoutes = require("./lastCallRestaurant");
const lastCallEmails = require("./lastCallEmails");

// Routes
router.use("/parking", lastCallRoutes);
router.use("/emails", lastCallEmails);

module.exports = router;
