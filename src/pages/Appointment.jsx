import React from "react";
import Secheader from "./common/Secondaryheader";
import Teams from "../data/Teamsdata";
import logo from "../images/logo-transparent-svg.svg";
import WatchRounded from '@material-ui/icons/WatchRounded';




const Appointment = () => {
  return (
    <>

      <section>
        <div className="container mx-auto py-5 col-lg-10 col-xl-9">
          <div className="mb-5 text-center">
            <br /><br /><br />
            <img src={logo} class="rounded-circle image_logo" alt="Cinque Terre" /><br />
            <p>Are you looking for hassle-free services for digital marketing, mobile app development, and software development? For business ERP solutions, web site and mobile app development, blockchain, hospitality, digital marketing, e-commerce, e-learning, and other areas, we offer custom software development services.</p>
          </div>
        </div>
        <div className="container row py-1 m-auto col-lg-10 col-xl-9 appoint">
          <div className="card bg-white text-dark appoint" >
            <h6 className="card-title text-dark"><b>15 Min Meeting</b></h6><br />
            <div className=""><table><tr><td><span className="m-2 ml-0 hdrcolor"><WatchRounded /></span></td><td><p className="card-text text-small">15 min</p></td></tr></table><br /></div>
          </div>
        </div>
        <div className="container row py-1 m-auto col-lg-10 col-xl-9 appoint">
          <div className="card bg-white text-dark appoint" >
            <h6 className="card-title text-dark"><b>30 Min Meeting</b></h6><br />
            <div className=""><table><tr><td><span className="m-2 ml-0 hdrcolor"><WatchRounded /></span></td><td><p className="card-text text-small">30 min</p></td></tr></table><br /></div>
          </div>
        </div>
        <br /><br /><br />
      </section>



    </>
  );
};

export default Appointment;