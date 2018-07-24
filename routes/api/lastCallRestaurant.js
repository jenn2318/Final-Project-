const router = require("express").Router();
const lastCallController = require("../../controllers/lastCallController.js");


router.route("/")
  .get(lastCallController.findAll)
  .post(lastCallController.create);


router
  .route("/:id")
  .get(lastCallController.findById)
  .put(lastCallController.update)
  .delete(lastCallController.remove);

module.exports = router;
