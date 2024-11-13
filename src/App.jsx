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
import OnlyAdminPrivateRoute from "./pages/AdminRoute/adminRoute.jsx";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Return from "./pages/Return.jsx";
import CaseStudy from "./pages/caseStudy.jsx";
import PaymentCanceledPage from './pages/PaymentCanceledPage.js';
import PaymentCompletePage from './pages/PaymentCompletePage.js';
import LoginPage from "./pages/loginPage.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import EditBlog from "./pages/dashboard/editBlog.jsx";
import CreateBlog from "./pages/dashboard/createBlog.jsx";
import CaseStudyTable from "./pages/CaseStudy/CaseStudyTable.jsx"
import EditCaseStudyPage from "./pages/CaseStudy/CreateCaseStudyPage.jsx"
import CreateCaseStudyPage from "./pages/CaseStudy/CreateCaseStudyPage.jsx"
const App = () => {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/login" ||
    location.pathname === "/caseStudyTable"||
    location.pathname === "/casestudy/edit/:id"||
    location.pathname === "/blog/edit/:id";


  const userExists = localStorage.getItem("user");

  return (
    <>
      {/* Render Navbar and Footer only if the user does not exist in localStorage and is not on an admin route */}
      {!isAdminRoute && !userExists && <Navbar />}

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
        <Route exact path="/login" element={<LoginPage />} />

        {/* Admin routes */}
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/edit/:id" element={<EditBlog />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/caseStudyTable" element={<CaseStudyTable />} />
          <Route path='/casestudy/edit/:id' element={<EditCaseStudyPage/>}/>
          <Route path='/createCaseStudyPage' element={<CreateCaseStudyPage/>}/>


          {/* Additional admin routes can be added here */}
        </Route>
      </Routes>

      {/* Conditionally render Footer only if not on login or admin routes and if user does not exist in localStorage */}
      {!isAdminRoute && !userExists && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
