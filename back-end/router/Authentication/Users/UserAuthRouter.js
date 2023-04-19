const UserAuth = require('../../../controller/Authentication/User/userAuthController');
const router = require("express").Router();


//Authorization and validation left
router.post("/register", UserAuth.CreateNewUserAccount);
router.post("/login", UserAuth.LoginUser);


module.exports = router;