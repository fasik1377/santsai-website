import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo-transparent-svg.svg"
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import HeadsetIcon from '@material-ui/icons/Headset';
import WorkIcon from '@material-ui/icons/Work';
import DvrIcon from '@material-ui/icons/Dvr';
import Button from '@material-ui/core/Button';
const Navbar = () => {
	return (
		<>
			<div className="container-fluid navigation_bar">
				<nav className="navscroll navbar fixed-top navbar-expand-lg navbar-light py-2 px-3">
					<div className="container">
						<NavLink className="navbar-brand" to="/"><img src={logo} alt="logo1" className="img-fluid" width="160" /></NavLink>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="text-white"><MenuIcon style={{ fontSize: 35 }} /></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ms-auto">
								<li className="nav-item active navigation_bar">
									<NavLink exact className="nav-link" to="/"><span className="d-lg-none d-xl-none mr-3 navigation_bar"><HomeIcon /></span>Home<span className="sr-only"></span></NavLink>
								</li>
								<li className="nav-item navigation_bar">
									<NavLink exact className="nav-link" to="/service"><span className="d-lg-none d-xl-none mr-3"><DvrIcon /></span>Services</NavLink>
								</li>
								<li className="nav-item">
									<NavLink exact className="nav-link" to="/career"><span className="d-lg-none d-xl-none mr-3"><WorkIcon /></span>Career</NavLink>
								</li>
								<li className="nav-item">
									<NavLink exact className="nav-link" to="/about"><span className="d-lg-none d-xl-none mr-3"><PeopleIcon /></span>About</NavLink>
								</li>
								<li className="nav-item">
									<NavLink exact className="nav-link" to="/contact"><span className="d-lg-none d-xl-none mr-3"><HeadsetIcon /></span>Contact</NavLink>
								</li>
								<li className="nav-item">
									<NavLink exact className="nav-link" to="/signin"><span className="d-lg-none d-xl-none mr-3"><HeadsetIcon /></span>Admin</NavLink>
								</li>
								<Button className="btn p-8 btn_custom col-lg-5 col-md-5 col-6" component={Link} to="/appointment">
								Book Appointment With Us
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