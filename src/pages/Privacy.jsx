import React from "react";
import Secheader from "./common/Secondaryheader";

const Tcard = ({ timage, ttitle }) => {
    return (
        <figure className="figure col-md-3 text-center">
            <img src={timage} className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" alt="team3" />
            <figcaption className="figure-caption text-dark">{ttitle}</figcaption>
        </figure>
    );
};

const Privacy = () => {
    return (
        <>
            <Secheader
                sectitle="Privacy Policy"
                secdesc="Your Privacy is Our Priority"
            />

            <section className="privacy-policy">
                <div className="container mx-auto py-5 col-lg-10 col-xl-9">
                    <div className="mb-5">
                        <h5 className="text-primary mb-3">Last Updated: March 29, 2018</h5>
                        <p className="text-muted">This privacy statement (the "Policy") explains how Santsai Corporation and its affiliated businesses (the "Company") gather, utilize, and distribute personal information on this website (the "Site"). All of our other websites that have this policy posted are also subject to its provisions.</p>

                        <h5 className="text-dark mt-4">What Do We Do With Your Information?</h5>
                        <p>When you make a purchase from our store, we collect the personal information you provide, such as your name, address, and email address, as part of the buying and selling process. Additionally, we collect your computer's IP address to provide information about your operating system and browser.</p>
                        <p>Email marketing (if applicable): With your consent, we may send you emails about our store, new products, and updates.</p>

                        <h5 className="text-dark mt-4">Consent</h5>
                        <h6 className="text-muted"><b>How do you get my consent?</b></h6>
                        <p>When you provide personal information for transactions, verifying credit card details, or arranging delivery, we imply your consent. If we need your information for unrelated purposes, we will explicitly ask for your consent or provide an option to decline.</p>

                        <h6 className="text-muted"><b>How do I withdraw my consent?</b></h6>
                        <p>You can withdraw your consent anytime by contacting us at <b className="text-primary">info@santcorporation.com</b>.</p>

                        <h5 className="text-dark mt-4">Disclosure</h5>
                        <p>We may disclose your information if required by law or if you violate our Terms of Service.</p>

                        <h5 className="text-dark mt-4">Payment</h5>
                        <p>We process payments securely using Razorpay, complying with PCI-DSS standards. Your card information is encrypted and securely handled. For more details, visit <a className="text-primary" href="https://razorpay.com" target="_blank" rel="noopener noreferrer">https://razorpay.com</a>.</p>

                        <h5 className="text-dark mt-4">Third-Party Services</h5>
                        <p>Third-party vendors will use your data as needed to provide their services. Review their privacy policies to understand how your data is managed, especially if the provider operates in a different jurisdiction.</p>

                        <h6 className="text-muted"><b>Links</b></h6>
                        <p>Links on our site may redirect you to third-party websites. We are not responsible for their privacy practices. Please review their policies.</p>

                        <h5 className="text-dark mt-4">Security</h5>
                        <p>We implement industry best practices to safeguard your personal information from loss, misuse, or unauthorized access.</p>

                        <h5 className="text-dark mt-4">Cookies</h5>
                        <p>Cookies help us track your session on our website but are not used to identify you personally.</p>

                        <h5 className="text-dark mt-4">Age of Consent</h5>
                        <p>By using this site, you confirm that you are of the legal age of majority in your jurisdiction or have consented on behalf of minors under your care.</p>

                        <h5 className="text-dark mt-4">Changes to This Privacy Policy</h5>
                        <p>We reserve the right to modify this policy at any time. Changes will be posted here. Significant updates will be communicated to ensure transparency.</p>

                        <h5 className="text-dark mt-4">Questions and Contact Information</h5>
                        <p>For inquiries or to amend/delete your information, contact our Privacy Compliance Officer at <b className="text-primary">info@santcorporation.com</b>.</p>

                        <p className="text-muted mt-3">[Re: Privacy Compliance Officer]</p>
                        <p className="text-muted">[Santsai Corporation, Jharkhand, India]</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Privacy;
