const router = require("express").Router();
const {
  loginUser,
  signInUser,
  updateUser,
  deleteUser,
  getUser,
} = require("../Controllers/userController");

router.get("/getuser", getUser);
router.post("/login", loginUser);
router.post("/signin", signInUser);
router.put("/updateuser", updateUser);
router.delete("/deleteuser", deleteUser);


module.exports = router;
