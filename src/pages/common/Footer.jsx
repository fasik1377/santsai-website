import React from "react";
import MobileIcon from '@material-ui/icons/PhoneAndroidOutlined';
import EmailIcon from '@material-ui/icons/EmailRounded';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white medium">We're glad you decided to get in touch with us.</div>
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white">
						<span className="mx-2"><MobileIcon fontSize="medium" /></span>
					</div>
					<div className="text-white medium">+91 70-32234521</div>
					<div className="text-white">
						<span className="mx-2"><EmailIcon fontSize="medium" /></span>
					</div>
					<div className="text-white medium">info@dslab.in</div>
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white small">Terms of Use | Privacy Policy | Return & Refund Policy</div>
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 medium text-center ms-auto">
					<div className="text-white small">Copyright © 2024 <a className="anchor" href="https://fasik1377.github.io/fasika-abera/">Fasika Abera</a>  - All rights reserved</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;