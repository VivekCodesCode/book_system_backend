
const user_data = require("../controllers/user_data")

const express = require('express');
const router = express.Router();
router.post("/check_data",user_data.check_data);
router.post("/insert_data",user_data.insert_data);
module.exports = router;