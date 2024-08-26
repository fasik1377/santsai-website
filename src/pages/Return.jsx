import React from "react";
import Secheader from "./common/Secondaryheader";


const Tcards = (props) => {
    return (

        <figure className="figure col-md-3 text-center">
            <img src={props.timage} className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" alt="team3" />
            <figcaption className="figure-caption text-dark">{props.ttitle}</figcaption>
        </figure>
    );
};

const Return = () => {
    return (
        <>

            <Secheader
                sectitle="Return & Refund Policy"
                secdesc="The Company for Web Solutions"
            />

            <section>
                <div className="container mx-auto py-5 col-lg-10 col-xl-9">
                    <div className="mb-5">
                        <h1 className="mb-1">Return & Refund Policy</h1><br />
                        <p >Regards for your business with "Santsai Corporation". We are available to assist you if you are not completely satisfied with your services.</p>

                        <h3 className="mb-1">Service Cancellations</h3><p>After the date of purchase, you have five calendar days to terminate your service subscription. Service subscription cancellations will only be accepted if the request is submitted within five days of the subscription's start date. In order to cancel, you must send a written notice via email to info@santcorporation.com along with a legitimate reason and supporting documentation, along with a receipt or other proof of purchase.


                        </p><h3 className="mb-1">Refunds</h3><p>Depending on the services, 10% or more of the total will be withheld from service subscription payments; the remaining balance will be reimbursed if the cancellation is requested within five days of the subscription start date. Refund requests must be accompanied by a formal email to info@santcorporation.com that includes supporting documentation for the particular circumstance.
Following the five days, there won't be any refunds. A refund will be credited to your credit card (or the original payment method) if your request to cancel your service is accepted. The credit will be issued to you in 5-7 business days, based on the policies of your card issuer.

                        </p><br /><br />
                        <h3 className="mb-1">Contact Us</h3><br />
                        <p >Please email us at info@santcorporation.com if you have any questions or suggestions.
                        </p>
                        <p>Email id here: info@santcorporation.com</p>
                        <p>Contact Number here : +91-8805587310/ 0657-3568866</p>
                        <p>Address : H. No. 75, River View Colony Anil Main Road,Uliyan Kadma, Jamshedpur, Jharkhand 831005
                        </p>
                    </div>
                    <p></p>
                </div>
            </section>


        </>
    );
};

export default Return;