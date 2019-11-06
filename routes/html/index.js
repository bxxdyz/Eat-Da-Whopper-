/*Set express to a constant global variable called with the "Router Function"*/
const router = require("express").Router();

router
  .route("/")
  .get();

/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;