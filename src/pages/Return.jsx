import React from "react";
import Secheader from "./common/Secondaryheader";

const Tcards = (props) => {
    return (
        <figure className="figure col-md-3 text-center">
            <img
                src={props.timage}
                className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10"
                alt="team3"
            />
            <figcaption className="figure-caption text-dark fw-bold mt-3">
                {props.ttitle}
            </figcaption>
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

            <section className="bg-light py-5">
                <div className="container mx-auto py-5 col-lg-10 col-xl-9">
                    <div className="mb-5 text-dark">
                        <h1 className="mb-3 text-primary">Return & Refund Policy</h1>
                        <p className="lead">
                            Thank you for doing business with <strong>Santsai Corporation</strong>. We are committed to providing excellent service and are here to assist if you are not completely satisfied.
                        </p>

                        <h3 className="mt-4 text-secondary">Service Cancellations</h3>
                        <p>
                            You have <strong>five calendar days</strong> from the date of purchase to terminate your service subscription. Cancellation requests will only be accepted within this timeframe. To cancel, please send a written notice via email to <a href="mailto:info@santcorporation.com" className="text-primary">info@santcorporation.com</a> with a valid reason, supporting documentation, and proof of purchase.
                        </p>

                        <h3 className="mt-4 text-secondary">Refunds</h3>
                        <p>
                            For cancellations within five days of the subscription start date, a refund will be issued after deducting 10% or more of the total service fee, depending on the service. Refund requests must include a formal email with supporting documentation sent to <a href="mailto:info@santcorporation.com" className="text-primary">info@santcorporation.com</a>. Refunds will be credited to the original payment method within 5-7 business days, subject to your card issuer's policies.
                        </p>
                        <p className="text-danger fw-bold">
                            Note: No refunds will be issued after the five-day period.
                        </p>

                        <h3 className="mt-4 text-secondary">Contact Us</h3>
                        <p>
                            If you have any questions or suggestions, feel free to contact us:
                        </p>
                        <ul className="list-unstyled">
                            <li>
                                <strong>Email:</strong> <a href="mailto:info@santcorporation.com" className="text-primary">info@santcorporation.com</a>
                            </li>
                            <li>
                                <strong>Phone:</strong> +91-8805587310 / 0657-3568866
                            </li>
                            <li>
                                <strong>Address:</strong> H. No. 75, River View Colony, Anil Main Road, Uliyan Kadma, Jamshedpur, Jharkhand 831005
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Return;
