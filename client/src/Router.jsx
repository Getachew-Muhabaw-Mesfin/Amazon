import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Landing,
  Auth,
  Payment,
  Orders,
  Cart,
  Results,
  ProductDetail,
} from "./pages";
// import Auth from "./pages/Auth/Auth";
// import Payment from "./pages/Payment/Payment";
// import Orders from "./pages/Orders/Orders";
// import Cart from "./pages/Cart/Cart";
// import Results from "./pages/Results/Result";
// import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

const Routing = () => {
  const stripePromise = loadStripe(
    "pk_test_51OrCQYA7KA8qCJrYNiFhE424K6pHovFqqgWaXK8r9gs7O3cmoax3NLUJiGtylVCTrX0ZWQEZ8IgYE4b5nVKMqN5w00btHiLSvI"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must log in to pay !"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to access orders !"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
