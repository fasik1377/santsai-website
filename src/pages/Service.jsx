import React from "react";
import { NavLink } from "react-router-dom";
import Secheader from "./common/Secondaryheader";
import Data from "../data/Servicesdata";

const Scards = (props) => {
  return (
  <div className="col-md-4 col-lg-4 mb-3 text-center">
  <a href={props.linked} className="service_anchor">
    <div className="box_border col-lg-9 p-3 pt-4 m-auto rounded d-flex flex-column align-items-center">
      <img 
        src={props.scardimage} 
        className="img-fluid mb-3" 
        alt="cards" 
        style={{ width: "30%", objectFit: "contain" }} 
      />
      <p className="my-2" style={{ color: "black" }}>{props.scardtitle}</p>
      <p className="text-muted text-center">{props.scarddesc}</p>
    </div>
  </a>
</div>
  );
};

const Service = () => {
 



  return (
    <>

      <Secheader
        sectitle="Services"
        secdesc="Our services are listed below"
      />
<section>
  <div className="container mx-auto py-5">
    <div className="mb-5 text-center">
      <p className="display-6 mb-1">Services We Provide</p>
      <p className="text-muted">Our digital agency offers comprehensive services.</p>
    </div>
    <div className="row d-flex align-items-center justify-content-evenly">
      {Data.map((val, ind) => (
        <Scards
          key={ind}
          scardimage={val.scardimage}
          linked={val.linked}
          scardtitle={val.scardtitle}
          scarddesc={val.scarddesc}
        />
      ))}
    </div>
  </div>
</section>

      <section className="bg-light">
        <div className="container py-5 text-center">
          <p className="display-6">Not quite sure yet ?</p>
          <p className="text-muted">Why not visit our <NavLink className="text-decoration-none" to="/contact">contact page</NavLink>, we would love to chat with you!</p>
          
        </div>
      </section>
    </>
  );
};

export default Service;