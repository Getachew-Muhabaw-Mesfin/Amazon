const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });
      console.log(paymentIntent);
      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  } else {
    res.status(403).json({
      message: "Total payment must be greater than 0",
    });
  }
};

module.exports = {
  createPaymentIntent,
};
