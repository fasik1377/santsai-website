import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./pages/common/Navbar";
import Footer from "./pages/common/Footer";
import Career from "./pages/Career";
import Term from "./pages/Term";
import Privacy from "./pages/Privacy";
import Appointment from "./pages/Appointment";
import Signin from "./pages/Signin";
import AdminMain from "./pages/AdminMain";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Return from "./pages/Return.jsx";
import CaseStudy from "./pages/caseStudy.jsx";
import PaymentCanceledPage from './pages/PaymentCanceledPage.js'
import PaymentCompletePage from './pages/PaymentCompletePage.js'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
      
        <Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/about" element={<About />} />
  <Route exact path="/service" element={<Service />} />
  <Route exact path="/career" element={<Career />} />
  <Route exact path="/contact" element={<Contact />} />
  <Route exact path="/term" element={<Term />} />
  <Route exact path="/privacy" element={<Privacy />} />
  <Route exact path="/return" element={<Return />} />
  <Route exact path="/appointment" element={<Appointment />} />
  <Route exact path="/signin" element={<Signin />} />
  <Route exact path="/adminMain" element={<AdminMain />} />
  <Route exact path="/blog" element={<Blog />} />
  <Route exact path="/case-study" element={<CaseStudy />} />
  <Route exact path="/paypal-completed" element={<PaymentCompletePage />} />
  <Route exact path="/paypal-canceld" element={<PaymentCanceledPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
