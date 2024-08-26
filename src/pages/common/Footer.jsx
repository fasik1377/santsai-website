import React from "react";
import { NavLink } from "react-router-dom";
import MobileIcon from '@material-ui/icons/PhoneAndroidOutlined';
import EmailIcon from '@material-ui/icons/EmailRounded';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white medium">We appreciate you choosing to contact us.</div>
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white">
						<span className="mx-2"><MobileIcon fontSize="medium" /></span>
					</div>
					<div className="text-white medium">+91-8805587310/ 0657-3568866</div>
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