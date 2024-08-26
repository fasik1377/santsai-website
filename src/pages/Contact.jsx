import React, { useState } from "react";
import Secheader from "./common/Secondaryheader"
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LegalSupport from '@material-ui/icons/ContactPhone';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const serviceId = 'service_5gh9wwf';
		const templateId = 'template_klzrmwn';
		const publicKey = 'user_GchVwmvQGhyA3aTqusDk5';

		const templateParams = {
			from_name: name,
			from_email: email,
			to_phone: phone,
			to_name: 'Santsai',
			message: message,
		};

		emailjs.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log('Email sent successfully!', response);
				setName('');
				setEmail('');
				setPhone('');
				setMessage('');

			}).catch((error) => {
				console.error('Error sending email:', error);
			});
	}
	return (
		<>

			<Secheader
				sectitle="Contact"
				secdesc="We appreciate you choosing to contact us."
			/>

			<section>
				<div className="container row py-5 m-auto">
					<div className="col-md-6 d-flex align-items-center justify-content-center order-1">
						<form onSubmit={handleSubmit} className="emailForm col-lg-8 col-12 col-md-10 text-center">
							<h4 className="text-center mb-2">Send Us a Message!</h4>
							<p>We are ready when you are. If you want to tell us something, or have any queries, feel free to contact us.</p>
							<div className="mb-3">
								<input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Full Name" required />
							</div>
							<div className="mb-3">
								<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="E-mail Address" required />
							</div>
							<div className="mb-3">
								<input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="form-control" id="number" placeholder="Phone Number" required />
							</div>
							<div className="mb-3">
								<textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control form_textarea" id="message" placeholder="Your Message" rows="3"></textarea>
							</div>
							<button type="submit" className="btn btn-lg btn_custom btn_shadow col-12">Send</button>
						</form>
					</div>

					<div className="col-md-6 d-flex align-items-center order-lg-1 order-md-2 flex-column py-5">
						<div className="row col-12">
							<div className="col-md-12">
								<span className="lead mb-3"><b>Head Office</b></span>
								<p className="small">
									You can contact our head office<br /><br />
									<span className="m-2 ml-0 hdrcolor"><CallOutlinedIcon /></span>+91-8805587310/ 0657-3568866<br /><br />
									<span className="m-2 ml-0 hdrcolor"><EmailOutlinedIcon /></span>info@santcorporation.com<br /><br />
									<div className="row justify-content-start"><div class="col-6 mt-3"><span className="m-2 ml-0 hdrcolor"><LocationOnOutlinedIcon /></span><b>Location</b>
									<ul className="contact_list">
										<li>&nbsp; H. No. 75, River View Colony</li>
										<li>&nbsp; Anil Main Road,Uliyan Kadma,</li>
										<li>&nbsp; Jamshedpur, Jharkhand 831005</li>
										</ul></div> <div class="col-6 mt-3"><table><tr><b>Corporate ID</b></tr><tr>CIN U62099JH2023PTC020031<tr></tr>GST 20ABKCS2863B1ZP</tr><tr>IEC ABKCS2863B</tr></table>
										 </div></div>
									<div className="row justify-content-start"><div class="col-8 mt-3"><span className="m-2 ml-0 hdrcolor"><LegalSupport /></span><b>Legal support</b> <ul className="contact_list">
										<li>&nbsp; B-300 Saraswati Vihar, Pitampura,</li>
										<li>&nbsp; New Delhi-110034</li>
										<li>&nbsp; contact@legalraasta.com</li>
										<li>&nbsp; +91-8750008585</li></ul>
									</div> <div class="col-6 mt-3">
										 </div></div>
								</p>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;