import React from "react";
import Secheader from "./common/Secondaryheader";


const Tcard = (props) => {
    return (

        <figure className="figure col-md-3 text-center">
            <img src={props.timage} className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" alt="team3" />
            <figcaption className="figure-caption text-dark">{props.ttitle}</figcaption>
        </figure>
    );
};

const Privacy = () => {
    return (
        <>

            <Secheader
                sectitle="Privacy Policy"
                secdesc="The Company for Web Solutions"
            />

            <section>
                <div className="container mx-auto py-5 col-lg-10 col-xl-9">
                    <div className="mb-5">
                        <h5 className="mb-1">Last Updated: March 29, 2018</h5><br />
                        <p >This privacy statement (the "Policy") explains how Santsai Corporation and its affiliated businesses (the "Company") gather, utilise, and distribute customer users' personal information on this website (the "Site"). All of our other websites that have this policy posted are also subject to its provisions. Websites that publish statements that differ from this one are not covered by this policy.</p>

                        <h5 className="mb-1">WHAT DO WE DO WITH YOUR INFORMATION?</h5><p>We obtain the personal information you provide us, including your name, address, and email address, when you make a purchase from our store as part of the buying and selling process.

                            We also automatically obtain your computer's internet protocol (IP) address when you browse our store, which gives us information about your operating system and browser.

                            Email marketing (if applicable): With your consent, we might send you emails with information about our store, upcoming releases, and other news.

                        </p><h5 className="mb-1">CONSENT</h5><h6 className="mb-1 text-muted"><b>How do you get my consent?</b></h6><p>We assume that you agree to our collecting and use of your personal information for the purposes of completing transactions, verifying credit card information, placing orders, arranging delivery, or returning merchandise.

                            We will either ask for your express consent up front or give you the option to decline if we need your personal information for unrelated purposes, such as marketing.
                        </p>
                        <h6 className="mb-1 text-muted"><b>How do I withdraw my consent?</b></h6><p>You may withdraw your consent for us to contact you for the ongoing collection, use, or disclosure of your information at any time after you opt-in by sending us us at <span className="text-muted"><b>info@santcorporation.com</b></span>.
                        </p>
                        <h5 className="mb-1">DISCLOSURE</h5><p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.


                        </p><h5 className="mb-1">PAYMENT</h5><p>We process payments using Razorpay. Your card information is not kept on Razorpay's servers by us. When processing payments, the Payment Card Industry Data Security Standard (PCI-DSS) encrypts the data. We only keep your purchase transaction data for as long as it takes to finish your purchase. Your purchase transaction information is not kept after that is finished.

                            Our payment gateway complies with PCI-DSS standards, which are overseen by the PCI Security Standards Council, an alliance of major credit card companies, American Express, Discover, and Visa.

                            The PCI-DSS regulations aid in guaranteeing that our store and its service providers handle credit card information securely.
                            You might also want to read the terms and conditions of Razorpay on for additional information. <a className="razo" href="https://razorpay.com">https://razorpay.com</a>




                        </p><h5 className="mb-1">THIRD-PARTY SERVICES</h5><p>Generally speaking, the third-party vendors we work with will only gather, utilise, and share your data as needed to enable them to carry out the services they offer to us.

                            Regarding the information we must give them for your purchase-related transactions, some third-party service providers, like payment gateways and other payment transaction processors, have their own privacy policies.

                            It is advised that you review the privacy policies of these providers in order to comprehend how these providers will handle your personal information.

                            Specifically, keep in mind that some providers might have facilities or be based in a different jurisdiction than you or us. Therefore, your information may be governed by the laws of the jurisdiction(s) in which the third-party service provider or its facilities are located if you choose to move forward with a transaction involving their services.

                            This Privacy Policy and the Terms of Service on our website no longer apply to you once you leave our store's website or are routed to a third-party website or application.

                        </p>
                        <span className="text-muted"><b>Link</b></span> <p>Links on our store may take you out of our website when you click on them. You should read the privacy statements of other websites as we have no control over their policies.
                        </p><h5 className="mb-1">SECURITY</h5><p>We use appropriate safeguards and industry best practices to ensure that your personal information is not improperly lost, misused, accessed, disclosed, altered, or destroyed.
                        </p><h5 className="mb-1">COOKIES</h5><p>Cookies help us to keep track of your user's session. On other websites, it is not used to personally identify you.</p>
                        <h5 className="mb-1">AGE OF CONSENT</h5><p>By accessing this website, you attest that you are either the legal age of majority in your state or province of residence, or that you are the legal age of majority in your state or province of residence and that you have granted us permission to grant any minor dependents you may have access to this website.</p>
                        <h5 className="mb-1">CHANGES TO THIS PRIVACY POLICY</h5><p>Please check this privacy policy often as we reserve the right to make changes at any time. Any updates and clarifications will become effective as soon as they are posted on the website. To ensure that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it, we will notify you here of any significant changes to this policy.

                            Your information might be given to the new owners of our store if it is bought out or merges with another business, allowing us to keep selling you goods.
                        </p>         
                                       <h5 className="mb-1">QUESTIONS AND CONTACT INFORMATION</h5><p>Contact our Privacy Compliance Officer at <b>info@santcorporation.com</b> if you would like to register a complaint, obtain, amend, or delete any personal information we may have about you, or if you just want more information.

</p><br />
<p>[Re: Privacy Compliance Officer]</p>
<p>[ Santsai Corporation, Jharkhand, India]</p>
                    </div>
                    <p></p>
                </div>
            </section>


        </>
    );
};

export default Privacy;