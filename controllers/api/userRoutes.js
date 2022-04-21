const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userRoutes");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

module.exports = router;
