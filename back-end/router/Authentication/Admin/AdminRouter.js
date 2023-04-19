const AdminAuth = require('../../../controller/Authentication/Admin/adminAuthController');
const router = require("express").Router();


//Authorization  and validation left here
router.post("/register", AdminAuth.RegisterNewAdmin);
router.post("/changepassword", AdminAuth.ChangePassword);



module.exports = router;