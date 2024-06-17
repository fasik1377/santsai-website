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


                        </p><h5 className="mb-1">PAYMENT</h5><p>Aside from using reasonable efforts to provide accurate information through its website, the Company makes no warranties that this website is free of viruses, worms, Trojan horses, or the like, or that its content is appropriate for your particular use or up to date. The Company reserves the right to change the information at any time without notice. All materials, including downloadable software, contained in the Company's website are provided «as is» and without warranty of any kind to the extent permitted by the applicable law. Any outcomes obtained from using any software found on this website are not guaranteed by the company. Any use of the content on this website is entirely your responsibility.



                            The information on this website does not change or add to any warranty that you might be entitled to because of a business agreement you have with the company.

                            The Company shall not be responsible for any incidental, consequential, or indirect damages, including but not restricted to lost income or profits, interruption of business, or loss of data resulting from or related to the use, incapacity to use, or reliance on any content on this or any linked website.

                            In any case, the Company's liability for direct damages resulting from or related to the use, incapacity to use, or reliance on any content on this website or any linked website will never be more than INR 1,000.






                        </p><h4 className="mb-1">6. Users’ Comments</h4><p>The Company disclaims all responsibility to keep an eye on any content you may post on its website.

                            You guarantee that no information you transmit to the Company through the website violates any applicable laws or intellectual property rights, including any comments you send us that are not personal data. Materials (the term "Material" refers to any projects, files, or other attachments sent to us). Such data, materials, or remarks shall be regarded as non-proprietary and non-confidential. By providing any data or material, you grant the Company the right, indefinitely, and unrestricted use to perform, display, alter, and transmit such data, material, or comments, including any underlying concept, idea, or know-how (the term "Material" is meant to encompass all projects, files, or other attachments sent to us). The Company reserves the right to use such information in any way it chooses.
                        </p><h4 className="mb-1">7. Applicable law – Severability</h4><p>TIndian law will apply to any dispute or claim relating to or arising out of the Terms of Use.


                            The remainder of these Terms of Use will still be in full force and effect even if a court rules that any one of these provisions is unlawful, void, or unenforceable.

                        </p><h4 className="mb-1">8. Modifications of the Terms of Use</h4><p>The Company reserves the right to change the Terms of Use under which this website is offered at any time and without notice. You will be automatically bound by these modifications when you use this site, and should periodically read the Terms of Use.
                        </p>
                    </div>
                    <p></p>
                </div>
            </section>


        </>
    );
};

export default Privacy;