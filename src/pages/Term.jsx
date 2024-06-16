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

const Term = () => {
    return (
        <>

            <Secheader
                sectitle="Terms of Use"
                secdesc="The Company for Web Solutions" style={{ color: "#000000" }}
            />

            <section>
                <div className="container mx-auto py-5 col-lg-10 col-xl-9">
                    <div className="mb-5">
                        <h4 className="mb-1">1. Acceptance</h4><br />
                        <p >You acknowledge and agree to the following Terms of Use by using and/or downloading any content from the Santsai Corporation Pvt. Ltd. (the “Company”) website, as well as by accessing and browsing it.</p>

                        <h4 className="mb-1">2. Purpose of the website</h4><p>Nothing on the Company's website should be interpreted as a commercial offer, a licence, an advisory, fiduciary, or professional relationship between you and the Company. All content is provided solely for informational purposes. Nothing on this website should be interpreted as a replacement for your own research.

                            This website may contain information about goods or services that are unavailable in your nation.
                        </p><h4 className="mb-1">3. Links to Third-Party Websites</h4><p>While the Company has no control over third-party websites, links to them are provided for convenience only and do not indicate approval or endorsement of the linked sites by the Company, even if they may bear the Company's logo. As a result, the Company disclaims all liability regarding the information on any linked website or any link that appears on it.

                            You understand that it is forbidden to frame the Company's website or any related procedure.

                        </p><h4 className="mb-1">4. Intellectual Property</h4><p>This website is the sole property of the company and is shielded by intellectual property rights. Its contents—which may include, but are not restricted to, texts, data, images, sounds, videos, logos, icons, and HTML code—are all protected by intellectual property laws and belong to the company or a third party.

                            In compliance with the rules governing intellectual property law, you may use this content for non-commercial, personal use. Without the company's prior written consent, any other use or modification of the website's content is forbidden.


                        </p><h4 className="mb-1">5. Warranty and Liability</h4><p>Aside from using reasonable efforts to provide accurate information through its website, the Company makes no warranties that this website is free of viruses, worms, Trojan horses, or the like, or that its content is appropriate for your particular use or up to date. The Company reserves the right to change the information at any time without notice. All materials, including downloadable software, contained in the Company's website are provided «as is» and without warranty of any kind to the extent permitted by the applicable law. Any outcomes obtained from using any software found on this website are not guaranteed by the company. Any use of the content on this website is entirely your responsibility.



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

export default Term;