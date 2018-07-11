const router = require("express").Router();
const lastCallController = require("../../controllers/lastCallController");

// Matches with "/api/parking"
router.route("/")
  .get(lastCallController.findAll)
  .post(lastCallController.create);

// Matches with "/api/parking/:id"
router
  .route("/:id")
  .get(lastCallController.findById)
  .put(lastCallController.update)
  .delete(lastCallController.remove);

module.exports = router;
