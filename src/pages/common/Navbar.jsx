import React,{useState}  from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo-transparent-svg.svg";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import HeadsetIcon from '@material-ui/icons/Headset';
import AdminIcon from '@material-ui/icons/AccountCircle';
import BlogIcon from '@material-ui/icons/Book';
import WorkIcon from '@material-ui/icons/Work';
import DvrIcon from '@material-ui/icons/Dvr';
import axios from "axios"

import Button from '@material-ui/core/Button';

const Navbar = () => {
  const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});

	const initPayment = (data) => {
    console.log("data: ",data)
		const options = {
			key: process.env.REACT_RAZORPAY_KEY ,
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://54.81.228.157:4000/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};
  const handlePayment = async () => {
		try {
			const orderUrl = "http://54.81.228.157:4000/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: book.price });
			console.log(data);
      if(data.data){
			initPayment(data.data);
    }
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <>
      <div className="container-fluid navigation_bar nav_background">
        <nav className="navscroll navbar fixed-top navbar-expand-lg navbar-light py-2 px-3 header_background">
          <div className="container ">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo1" className="img-fluid" width="160" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="text-black">
                <MenuIcon style={{ fontSize: 35 }} />
              </span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active navigation_bar">
                  <NavLink exact className="nav-link" to="/">
                    <p className="text-black"><span className="d-lg-none d-xl-none mr-3 navigation_bar text-black"><HomeIcon /></span>
                    Home<span className="sr-only"></span></p>
                  </NavLink>
                </li>
                <li className="nav-item navigation_bar">
                  <NavLink exact className="nav-link" to="/service">
                  <p className="text-black"> <span className="d-lg-none d-xl-none mr-3"><DvrIcon /></span>
				  Services</p> 
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/career">
                    <p className="text-black"><span className="d-lg-none d-xl-none mr-3"><WorkIcon /></span>
                    Career</p>
                  </NavLink>
                  </li>
                  <li className="nav-item dropdown">
  {/* About Link */}
  <NavLink
    className="nav-link dropdown-toggle"
    to="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    About
  </NavLink>

  {/* Bootstrap Dropdown Menu */}
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li>
      <NavLink className="dropdown-item" to="/about">
        About Us
      </NavLink>
    </li>
    <li>
      <NavLink className="dropdown-item" to="/case-study">
        Case Study
      </NavLink>
    </li>
  </ul>
</li>




                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/contact"><p className="text-black">
                    <span className="d-lg-none d-xl-none mr-3"><HeadsetIcon /></span>
                    Contact</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/blog"><p className="text-black">
                    <span className="d-lg-none d-xl-none mr-3"><BlogIcon /></span>
                    Blog</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/signin"><p className="text-black">
                    <span className="d-lg-none d-xl-none mr-3"><AdminIcon /></span>
                    Admin</p>
                  </NavLink>
                </li>
                <Button className="btn p-8 btn_custom col-lg-4 col-md-4 col-6  m-1" component={Link} to="/appointment">
                  Book Appointment With Us
                </Button>
                <Button 
                  onClick={handlePayment} 
                  className="btn  btn_custom col-lg-1 col-md-1 col-6 m-1" 
                >
                  Pay
                </Button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;