import React from "react";
import { NavLink } from "react-router-dom";
import MobileIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailIcon from "@material-ui/icons/EmailRounded";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#8B0000", padding: "20px 0" }}>
        <div className="showmelocal">
          <motion.div
            className="container text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
              style={{ fontSize: "16px", color: "#FFD700" }}
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Your Tech Partner
            </motion.div>
          </motion.div>
        </div>

        <div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
          <motion.div
            className="text-white medium we_appreciate"
            style={{ marginTop: "-120px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            We appreciate you choosing to contact us.
          </motion.div>
        </div>

        <div
          className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto"
          style={{ marginTop: "-60px" }}
        >
          <div className="text-white">
            <motion.span
              className="mx-2"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MobileIcon fontSize="medium" />
            </motion.span>
          </div>
          <div className="text-white medium">+91-8805587310 / 0657-3568866</div>
          <div className="text-white">
            <motion.span
              className="mx-2"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <EmailIcon fontSize="medium" />
            </motion.span>
          </div>
          <div className="text-white medium">ratannarayan@santcorporation.com</div>
        </div>

        <div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
          <div className="text-white small">
            <NavLink className="terms" to="/term">
              Terms of Use
            </NavLink>{" "}
            |{" "}
            <NavLink className="terms" to="/privacy">
              Privacy Policy
            </NavLink>{" "}
            |{" "}
            <NavLink className="terms" to="/return">
              Return & Refund Policy
            </NavLink>
          </div>
        </div>

        <div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
          <div className="text-white small">
            Copyright &copy; 2025 {" "}
            <a
              className="anchor"
              href="https://fasik1377.github.io/fasika-abera/"
              style={{ color: "#FFD700" }}
            >
              Fasika Abera
            </a>{" "}
            - All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
