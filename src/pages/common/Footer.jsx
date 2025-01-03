import React from "react";
import { NavLink } from "react-router-dom";
import MobileIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailIcon from "@material-ui/icons/EmailRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2C3E50", padding: "30px 0", color: "#FFFFFF" }}>
      {/* Highlighted tagline */}
      <div className="container text-center mb-3">
        <motion.div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#FFD700",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Your Tech Partner
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="container text-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <p style={{ fontSize: "1.2rem", margin: "0 0 10px" }}>
            We appreciate you choosing to contact us.
          </p>
        </motion.div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <motion.span whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
            <MobileIcon fontSize="medium" style={{ color: "#FFD700" }} />
          </motion.span>
          <span style={{ fontSize: "1rem" }}>+91-8805587310 / 0657-3568866</span>
          <motion.span whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
            <EmailIcon fontSize="medium" style={{ color: "#FFD700" }} />
          </motion.span>
          <span style={{ fontSize: "1rem" }}>ratannarayan@santcorporation.com</span>
        </div>
      </div>

      {/* Address Section */}
      <div className="container text-center mb-4">
        <div>
          <motion.span whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
            <LocationOnIcon fontSize="medium" style={{ color: "#FFD700" }} />
          </motion.span>
          <span style={{ fontSize: "1rem", marginLeft: "10px" }}>
            H. No. 75, River View Colony
Anil Main Road, Uliyan Kadma,
Jamshedpur, Jharkhand 831005
          </span>
        </div>
      </div>

      {/* Links */}
      <div className="container text-center mb-4">
        <p style={{ margin: "0", fontSize: "0.9rem" }}>
          <NavLink to="/term" style={{ color: "#FFD700", textDecoration: "none", margin: "0 5px" }}>
            Terms of Use
          </NavLink>
          |
          <NavLink to="/privacy" style={{ color: "#FFD700", textDecoration: "none", margin: "0 5px" }}>
            Privacy Policy
          </NavLink>
          |
          <NavLink to="/return" style={{ color: "#FFD700", textDecoration: "none", margin: "0 5px" }}>
            Return & Refund Policy
          </NavLink>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="container text-center mb-4">
        <motion.a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ margin: "0 10px" }}
        >
          <FacebookIcon fontSize="medium" style={{ color: "#FFD700" }} />
        </motion.a>
        <motion.a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ margin: "0 10px" }}
        >
          <TwitterIcon fontSize="medium" style={{ color: "#FFD700" }} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ margin: "0 10px" }}
        >
          <LinkedInIcon fontSize="medium" style={{ color: "#FFD700" }} />
        </motion.a>
      </div>

      {/* Footer Note */}
      <div className="container text-center">
        <p style={{ fontSize: "0.9rem", margin: "0" }}>
          Copyright &copy; 2025{" "}
          <a
            href="https://fasik1377.github.io/fasika-abera/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFD700", textDecoration: "none" }}
          >
            Fasika Abera
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
