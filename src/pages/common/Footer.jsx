import React from "react";
import { NavLink } from "react-router-dom";
import MobileIcon from '@material-ui/icons/PhoneAndroidOutlined';
import EmailIcon from '@material-ui/icons/EmailRounded';

const Footer = () => {
	return (
		<>
			<footer>
				{/* Show me local is added */}
				<div className="showmelocal">
				<a href="https://www.showmelocal.com/profile.aspx?bid=37667698" target="_blank"><img src="https://www.showmelocal.com/showmelocal-member-37667698" alt="Santsai Corporation Pvt. Ltd..,Software Company,Jamshedpur,Jharkhand" /></a>
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white medium we_appreciate" style={{ marginTop: '-120px' }}>We appreciate you choosing to contact us.</div>
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