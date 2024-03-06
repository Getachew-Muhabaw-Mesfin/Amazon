const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const paymentRoute = require("./routes/stripePaymentRoute");

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.use("/payment", paymentRoute);

const HOST = process.env.HOST;
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on http://${HOST}:${PORT}`);
});













// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const app = express();
// app.use(cors({ origin: true }));

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Success",
//   });
// });

// app.post("/payment/create", async (req, res) => {
//   const total = parseInt(req.query.total);
//   if (total > 0) {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: "usd",
//     });
//     console.log(paymentIntent);
//     res.status(201).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } else {
//     res.status(403).json({
//       message: "total payment must be greater than 0",
//     });
//   }
// });

// const HOST = process.env.HOST;
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, HOST, (err) => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log(`Server is running on http://${HOST}:${PORT}`);
// });


