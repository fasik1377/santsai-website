import React, { useState } from "react";
import Secheader from "./common/Secondaryheader";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import LegalSupport from "@material-ui/icons/ContactPhone";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_5gh9wwf";
    const templateId = "template_klzrmwn";
    const publicKey = "user_GchVwmvQGhyA3aTqusDk5";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_phone: phone,
      to_name: "Santsai",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <Secheader sectitle="Contact" secdesc="We appreciate you choosing to contact us." />

      <section className="contact-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* Form Section */}
            <div className="col-lg-6 col-12">
              <form onSubmit={handleSubmit} className="emailForm p-4">
                <h3 className="text-center mb-3 send_us"><b>Send Us a Message!</b></h3>
                <p className="text-center mb-4">
                  We are ready when you are. If you want to tell us something, or have any queries, feel free to contact us.
                </p>
                <div className="mb-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="E-mail Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control"
                    placeholder="Your Message"
                    rows="3"
                  />
                </div>
                <button type="submit" className="btn col-12" style={{backgroundColor:"#8b0000", color:"white"}}>
                  Send
                </button>
              </form>
            </div>

            {/* Contact Details Section */}
            <div className="col-lg-6 col-12">
              <div className="contact-info p-4">
                <h5 className="mb-3 head_office">Head Office</h5>
                <p>
                  <CallOutlinedIcon /> +91-8805587310 / 0657-3568866 <br />
                  <EmailOutlinedIcon /> info@santcorporation.com
                </p>
                <br></br>
                <h6 className="location">Location:</h6>
                <ul>
                  <li>H. No. 75, River View Colony</li>
                  <li>Anil Main Road, Uliyan Kadma,</li>
                  <li>Jamshedpur, Jharkhand 831005</li>
                </ul>
                <br></br>
                <h6 className="legal_support">Legal Support:</h6>
                <ul>
                  <li>B-300 Saraswati Vihar, Pitampura, New Delhi-110034</li>
                  <li>contact@legalraasta.com</li>
                  <li>+91-8750008585</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;