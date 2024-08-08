import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import UserCart from "./pages/UserCart";
import Footer from "./components/Footer";
import Checkout from "./pages/checkOut";
import OrderTracking from "./pages/OrderTracking";
import UserDashbord from "./pages/UserDashbord";
import Confirmation from "./pages/Confirmation";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/check_out" element={<Checkout />} />
        <Route path="/profile" element={<UserDashbord />} />
        <Route path="/shopping_cart" element={<UserCart />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/order_tracking" element={<OrderTracking />} />
        <Route path="/product_details/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
