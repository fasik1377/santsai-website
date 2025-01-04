import React from "react";
import Secheader from "./common/Secondaryheader";

const Tcard = ({ timage, ttitle }) => {
    return (
        <figure className="figure col-md-3 text-center">
            <img 
                src={timage} 
                className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" 
                alt="team" 
            />
            <figcaption className="figure-caption text-dark">{ttitle}</figcaption>
        </figure>
    );
};

const Term = () => {
    return (
        <>
            <Secheader
                sectitle="Terms of Use"
                secdesc="The Company for Web Solutions"
                style={{ color: "#000000" }}
            />

            <section className="terms-section">
                <div className="container mx-auto py-5 col-lg-10 col-xl-9">
                    <div className="mb-5">
                        <h2 className="text-primary mb-4">Terms of Use</h2>

                        <h4 className="mb-3">1. Acceptance</h4>
                        <p>
                            By using and/or downloading any content from the Santsai Corporation Pvt. Ltd. (the “Company”) website, you acknowledge and agree to these Terms of Use. This includes accessing, browsing, or otherwise engaging with the website.
                        </p>

                        <h4 className="mb-3">2. Purpose of the Website</h4>
                        <p>
                            Content on the Company's website is provided solely for informational purposes. It should not be interpreted as a commercial offer, license, advisory, fiduciary, or professional relationship. 
                            Note that certain information or services may not be available in your region.
                        </p>

                        <h4 className="mb-3">3. Links to Third-Party Websites</h4>
                        <p>
                            Links to third-party websites are provided for convenience and do not indicate approval or endorsement. The Company disclaims liability for the content on any linked website.
                            Framing the Company's website or related processes is prohibited.
                        </p>

                        <h4 className="mb-3">4. Intellectual Property</h4>
                        <p>
                            The Company’s website and its content are protected by intellectual property rights. Use of this content is restricted to non-commercial, personal purposes unless prior written consent is provided by the Company.
                        </p>

                        <h4 className="mb-3">5. Warranty and Liability</h4>
                        <p>
                            The website and its contents are provided “as is” without warranty. The Company disclaims liability for any indirect, incidental, or consequential damages, including but not limited to lost income, business interruption, or data loss.
                        </p>

                        <h4 className="mb-3">6. Users’ Comments</h4>
                        <p>
                            Any materials or comments you transmit to the Company via the website are deemed non-proprietary and non-confidential. By submitting, you grant the Company the right to use such materials indefinitely.
                        </p>

                        <h4 className="mb-3">7. Applicable Law – Severability</h4>
                        <p>
                            These Terms of Use are governed by Indian law. If any provision is found invalid or unenforceable, the remaining provisions will remain in full effect.
                        </p>

                        <h4 className="mb-3">8. Modifications of the Terms of Use</h4>
                        <p>
                            The Company reserves the right to modify these Terms of Use at any time without notice. Continued use of the website constitutes agreement to the updated terms.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Term;
