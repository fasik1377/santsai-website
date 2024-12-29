import React,{useState, useRef,useEffect}  from "react";
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
import PayPal from "../payPal"
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Use useHistory in React Router v5
import Button from '@material-ui/core/Button';

const Navbar = () => {
  const Route = useNavigate();

  const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});
  const [amount, setamount] = useState(0);
  const [open, setOpen] = useState(false);

  const handlPayPal= async ()=>{
    const amounte={
      amount:amount
    }
    const respons= await axios.post('http://54.81.228.157:4000/paypal/create-order',amounte)
    const url= respons.data.link
    window.location.href = url
    
  }
  // Function to handle Pay button click (show modal)
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };
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

  const updateamount  = (value)=>{
    setamount(value)
  }
  const handlePayment = async () => {
		try {
			const orderUrl = "http://54.81.228.157:4000/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: amount });
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
          <div className="container "><NavLink 
  className="navbar-brand" 
  to="/" 
style={{
  backgroundColor: 'linear-gradient(135deg, #ffcccc, #ffe6e6)',
  borderRadius: '50%',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px 2px rgba(255, 255, 255, 0.8)',
  animation: 'pulse 2s infinite ease-in-out',
  border: '2px solid #ff9999',
  width: '100px', // Ensure the element is perfectly circular
  height: '100px', // Ensure the element is perfectly circular
  display: 'flex', // Center content inside the circle (if needed)
  justifyContent: 'center',
  alignItems: 'center',
}}



>
  <img src={logo} alt="logo1" className="img-fluid" width="160" />
</NavLink>

<style>
{`
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`}
</style>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="text-white">
                <MenuIcon style={{ fontSize: 35 }} />
              </span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active navigation_bar">
                  <NavLink exact className="nav-link" to="/">
                    <p className="text-white"><span className="d-lg-none d-xl-none mr-3 navigation_bar text-white"><HomeIcon /></span>
                    Home<span className="sr-only"></span></p>
                  </NavLink>
                </li>
                <li className="nav-item navigation_bar">
                  <NavLink exact className="nav-link" to="/service">
                  <p className="text-white"> <span className="d-lg-none d-xl-none mr-3"><DvrIcon /></span>
				  Services</p> 
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/career">
                    <p className="text-white"><span className="d-lg-none d-xl-none mr-3"><WorkIcon /></span>
                    Career</p>
                  </NavLink>
                  </li>
                  <li className="nav-item dropdown">
  {/* About Link */}
<NavLink
  className="nav-link dropdown-toggle text-white"
  to="#"
  id="navbarDropdown"
  role="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
  style={{ color: "white"}}
>
  About
</NavLink>

  {/* Bootstrap Dropdown Menu */}
  <ul className="dropdown-menu text-white" aria-labelledby="navbarDropdown">
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
                  <NavLink exact className="nav-link" to="/contact"><p className="text-white">
                    <span className="d-lg-none d-xl-none mr-3"><HeadsetIcon /></span>
                    Contact</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/blog"><p className="text-white">
                    <span className="d-lg-none d-xl-none mr-3"><BlogIcon /></span>
                    Blog</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/signin"><p className="text-white">
                    <span className="d-lg-none d-xl-none mr-3"><AdminIcon /></span>
                    Admin</p>
                  </NavLink>
                </li>
                <Button className="btn p-8 btn_custom col-lg-4 col-md-4 col-6  m-1" component={Link} to="/appointment">
                  Book Appointment With Us
                </Button>
                 
                <Button 
                  onClick={handleClickOpen} 
                  className="btn  btn_custom col-lg-1 col-md-1 col-6 m-1" 
                >
                  Pay
                </Button>

                
              </ul>
            </div>
          </div>
        </nav>
        
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose Your Payment Method</DialogTitle>
        <DialogContent>
        <input 
          type="number" 
          onChange={(e) => updateamount(e.target.value)} 
          placeholder="Enter amount" 
        />
          <DialogContentText>Choose your payment method:</DialogContentText>

          {/* Payment method buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <Button variant="outlined" color="secondary" onClick={handlePayment}>
              Razorpay
            </Button>
            <Button variant="outlined" color="secondary" onClick={handlPayPal}>
              PayPal
            </Button>
               
            
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </>
  );
};

export default Navbar;