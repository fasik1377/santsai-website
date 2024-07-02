import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./pages/common/Navbar";
import Footer from "./pages/common/Footer";
import Career from "./pages/Career";
import Term from "./pages/Term";
import Privacy from "./pages/Privacy";
import Appointment from "./pages/Appointment";
import Signin from "./pages/Signin";
import AdminMain from "./pages/AdminMain";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Return from "./pages/Return.jsx";
const App = () => {
	return (
		<>
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/service" component={Service} />
				<Route exact path="/career" component={Career} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/term" component={Term} />
				<Route exact path="/privacy" component={Privacy} />
				<Route exact path="/return" component={Return} />
				<Route exact path="/appointment" component={Appointment} />
				<Route exact path="/signin" component={Signin} />
				<Route exact path="/adminMain" component={AdminMain} />
				<Redirect to="/" />
			</Switch>
			<Footer />

		</BrowserRouter>
		</>
	);
};

export default App;