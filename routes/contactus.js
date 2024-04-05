const contactController = require("../controllers/contact");

const express = require("express");

const router = express.Router();

router.get("/", contactController.getContacts);

router.post("/", contactController.postContacts);

router.get("/success", contactController.getSuccess);

module.exports = router;
