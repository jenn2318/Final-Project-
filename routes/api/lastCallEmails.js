const router = require("express").Router();
const emails = require("../../controllers/lastCallEmailsController");


router.route("/")
    .post(emails.create);


/*router
    .route("/:id")
    .get(Emails.findById)
    .put(Emails.update)
    .delete(Emails.remove);*/

module.exports = router;
