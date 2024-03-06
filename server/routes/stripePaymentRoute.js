const express = require("express");
const paymentController = require("../controllers/stripePaymentController");

const router = express.Router();

router.post("/stripe", paymentController.createPaymentIntent);

module.exports = router;
