import React from "react";
import { NavLink } from "react-router-dom";
import MobileIcon from '@material-ui/icons/PhoneAndroidOutlined';
import EmailIcon from '@material-ui/icons/EmailRounded';
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<>
			<footer>
				{/* Show me local is added */}

				 {/*<input type="radio" name="color" class="purple" checked />
<input type="radio" name="color" className="blue" />
<input type="radio" name="color" className="green" />
<input type="radio" name="color" className="red" />
<input type="radio" name="color" className="orange" />
<input type="radio" name="color" className="yellow" />
<input type="radio" name="color" className="silver" />
<div id="wrapper">
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="screen"></div>
  <div className="standWrapper">
    <div className="stand"></div>
    <div className="stand"></div>
    <div className="front"></div>
    <div className="back"></div>
    <div className="top"></div>
    <div className="bottom"></div>
  </div>
</div> 
				*/}
				<div className="showmelocal">
				<a href="https://www.showmelocal.com/profile.aspx?bid=37667698" target="_blank"><img src="https://www.showmelocal.com/showmelocal-member-37667698" alt="Santsai Corporation Pvt. Ltd..,Software Company,Jamshedpur,Jharkhand" /></a>
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
<motion.div
  className="text-white medium we_appreciate"
  style={{ marginTop: '-120px' }}
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
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto" style={{ marginTop: '-60px' }}>
					<div className="text-white">
						<span className="mx-2"><MobileIcon fontSize="medium" /></span>
					</div>
					<div className="text-white medium" >+91-8805587310/ 0657-3568866</div>
					<div className="text-white">
						<span className="mx-2"><EmailIcon fontSize="medium" /></span>
					</div>
					<div className="text-white medium">info@santcorporation.com</div>
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white small">
						<table><tr><td></td></tr></table>
						<NavLink className="terms" to="/term">
							Terms of Use</NavLink>| <NavLink className="terms" to="/privacy">
							Privacy Policy</NavLink> | <NavLink className="terms" to="/return">
							Return & Refund Policy</NavLink> </div>
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white small">Copyright © 2024 <a className="anchor" href="https://fasik1377.github.io/fasika-abera/">Fasika Abera</a>  -  All rights reserved</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;