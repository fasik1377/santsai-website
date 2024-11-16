import React from "react";
import Secheader from "./common/Secondaryheader";
import Teams from "../data/Teamsdata";


const Tcards = (props) => {
  return (

    <figure className="figure col-md-3 text-center">
      <img src={props.timage} className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" alt="team3" />
      <figcaption className="figure-caption text-dark">{props.ttitle}</figcaption>
    </figure>
  );
};

const About = () => {
  return (
    <>

      <Secheader
        sectitle="About"
        secdesc="The Company for Software Solutions"
      />

      <section>
    <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
    </div>
        <div className="container mx-auto py-5 col-lg-10 col-xl-9">
          <div className="mb-5 text-center">
            <p className="display-6 mb-1">Happy to have you here!</p><br />
            <p className="text-muted"><b>We are a software development company from India helping enterprise businesses in their digital transition through our suite of web and mobile application services.</b></p>
          </div>
          <p>Santsai Corporation Pvt. Ltd. is a Jamshedpur (Tatanagar) based Web development company in India specialized in delivering quality, cost effective, user friendly and result-oriented web designing, website development, mobile application development and e-commerce and online marketing (SEO and SEM) solutions for a global clientele. Our professional, creative and expert designing team guided by customer centric approach helps you turn your website in a sales engine.

            We have delivered innovative and unique mobile application, web designing and development solutions of varying complexities to customers all over the world. Satisfaction of our clients has been our top most priority since our inception as a website design and development company.</p>
          <p></p>
        </div>
      </section>

      <section className="bg-light">
        <div className="container row py-5 m-auto col-lg-10 col-xl-9">
          <p className="display-6 text-center mb-4">Why Us?</p>
          <p>Santsai Corporation Pvt. Ltd. is constantly prepared to go above and above in order to foster the greatest commercial connections. All projects, regardless of size, are given careful consideration and full attention by Santsai Corporation Pvt. Ltd. which always adopts a holistic approach. Distinguished causes for collaborating on your upcoming project with Santsai Corporation Pvt. Ltd.:</p>
          <p>
          &#8594; &nbsp;<b>Detailed Analysis -</b>  Thorough evaluation of the suitability of your solutions and your company's objectives. <br /><br />
          &#8594; &nbsp;<b>Modern Technologies -</b>  Design and development using the newest, most advanced technologies.<br /><br />
          &#8594; &nbsp;  <b>Support & Focus on quality - </b> Support and upkeep for a year or a lifetime with high-quality assistance.<br /><br />
          &#8594; &nbsp;<b>We promise, Optimal Solution -</b> We'll create and implement the best possible solutions to support you in achieving your objectives.<br /><br />
          &#8594; &nbsp;<b>Timely Delivery -</b> Design and development using the newest, most advanced technologiesbr.<br /><br />
          &#8594; &nbsp;  <b>We promise, Futuristic Solution -</b> Our futuristic solution will be flexible and extensible as your company expands.</p>
        </div>
      </section>

      
    </>
  );
};

export default About;