const AdminAuth = require('./Admin/AdminRouter');
const UserAuth = require('./Users/UserAuthRouter');
const router = require("express").Router();


router.post("/admin", AdminAuth); 
router.post("/user", UserAuth);

module.exports = router;