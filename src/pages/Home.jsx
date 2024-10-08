import React from "react";
import work1 from "../images/brands/mobily.jpeg"
import work2 from "../images/brands/solutions.png"
import work3 from "../images/brands/triazine.jpeg"
import work4 from "../images/brands/drc.jpeg"
import work5 from "../images/brands/digital_upward.jpeg"
import work6 from "../images/brands/Nehish.png"
import work7 from "../images/brands/itc_hotels.png"
import work8 from "../images/brands/Zeorbit.jpg"
import flutter from "../images/tech/flutter.png"
import react from "../images/tech/reactjs.png"
import node from "../images/tech/nodejs.png"
import python from "../images/tech/python.png"
import angular from "../images/tech/angular.png"
import laravel from "../images/tech/laravel.png"
import bootstrap from "../images/tech/bootstrap.png"
import java from "../images/tech/java.png"
import mysql from "../images/tech/mysql.png"
import mongodb from "../images/tech/mongodb.png"
import ai from "../images/tech/ai.png"
import cplus from "../images/tech/Cplus.png"
import javascript from "../images/tech/javascript.png"
import tailwind from "../images/tech/tailwind.png"
import odoo from "../images/tech/odoo.png"
import product1 from "../images/software_process.jpg"
import BusinessIcon from '@material-ui/icons/Smartphone';
import WebIcon from '@material-ui/icons/DesktopWindows';
import ECommerce from '@material-ui/icons/ShoppingBasket';
import UI from '@material-ui/icons/GraphicEq';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
const BgElement = Element.BgElement;
// responsiveness is done
const Home = () => {

	return (
		<>
			<section className="sec"><div class="container">

				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>

				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>

				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>

				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>
				<div class="confetti"></div>

			</div>
				<div className="sec_bg">
					<BannerAnim prefixCls="banner-user" autoPlay>
						<Element
							prefixCls="banner-user-elem"
							key="0"
						>
							<BgElement
								key="bg"
								className="bg_1"
								style={{
									background: '#364D79',
								}}
							/>
							<TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
								<b>Develop Mobile Apps for Profitability, </b> <br /> <b> Productivity, and Other Purposes</b>
							</TweenOne>
							<TweenOne className="banner-user-text"
								animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
							>
								<p className="banner_sub_title">We provide end-to-end services for iOS and Android mobile applications.
									<br />
									We can assist you in developing software and apps for mobile devices.</p>
							</TweenOne>
						</Element>
						<Element
							prefixCls="banner-user-elem"
							key="1"
						>
							<div className="bg_imgs">
								<BgElement
									key="bg"
									className="bg"
									style={{
										background: '#64CBCC',
									}}
								/>
							</div>
							<TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
								<b>Developing Pixel-Perfect Websites </b> <br /> <b>
									With a Splash of Originality</b>
							</TweenOne>
							<TweenOne className="banner-user-text"
								animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
							>
								<p className="banner_sub_title">
									We design stunningly distinctive websites
									<br />
									that captivate visitors.</p>
							</TweenOne>
						</Element>
						<Element
							prefixCls="banner-user-elem"
							key="1"
						>
							<div className="bg_imgs">

								<BgElement
									key="bg"
									className="bg"
									style={{
										background: '#64CBCC',
									}}
								/>
							</div>
							<TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
								<b>Encourage a &nbsp;Genuine Bond.</b>
							</TweenOne>
							<TweenOne className="banner-user-text"
								animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
							>
								<p className="banner_sub_title">
									Custom-made, expert,
									<br />  reasonably priced, and efficient web solutions. <br /><br />
									Given our exceptional professionalism, we are able to provide our esteemed clients in other countries with excellent
									<br />
									web and mobile application development services and solutions that guarantee their satisfaction.</p>
							</TweenOne>
						</Element>
						<Element
							prefixCls="banner-user-elem"
							key="1"
						>
							<div className="bg_imgs">
								<BgElement
									key="bg"
									className="bg"
									style={{
										background: '#64CBCC',
									}}
								/>
							</div>
							<TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
								<b>Incredibly Captivating Digital Marketing </b> <br /> <b> At a Reasonable Price Point.</b>
							</TweenOne>
							<TweenOne className="banner-user-text"
								animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
							>
								<p className="banner_sub_title">We create incredible digital marketing strategies to strengthen your brand.</p>
								<br />
							</TweenOne>
						</Element>
					</BannerAnim>
				</div>
			</section>

			<section className="bg-dark">
				<div className="container row py-5 m-auto col-lg-10 col-xl-9">
					<p className="display-6 text-center mb-4 text-white">The company for web solutions</p>
					<p className="text-white">Our company is one of the top ones in India. "Our ultimate objective is to provide best services and improve overall growth of client's business" . Santsai Corporation Pvt. Ltd. is an Indian web design and development company that operates around the clock and provides exceptional solutions for your technical needs and goals. In the areas of eCommerce website development, WordPress, Magento, Joomla development, custom web application development, content management system, search engine optimisation, internet marketing, mobile responsive website and mobile application development, we have great expertise providing specialised and measurable services. We have established our reputation by providing numerous businesses with worthwhile and high-quality solutions that set them apart from the competition.
					</p>
					<p className="text-white">12+ Years of Experience in the Industry more than 100 completed projects in more than ten nations knowledge of website design, usability, and app development We recognise your discomforts. Timely delivery and quality assurance With a helpful and amiable support staff, we are subject matter experts and maintain affordability.</p>
				</div>
			</section>
			<section>
				<div className="container mx-auto py-5">
					<div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><a href="https://medrectech.com/solution/mobile-solution" style={{ color: "#8B0000" }}><BusinessIcon /></a></div>
								<p className="mb-2 mt-4"><b>Mobility Solutions</b></p>
								<p className="text-muted text-left text-xl-center text-lg-center">We provide end-to-end services for iOS and Android mobile applications. We can assist you in developing software and apps for mobile devices.</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><a href="https://en.wikipedia.org/wiki/Web_application" style={{ color: "#8B0000" }}><WebIcon /></a></div>
								<p className="mb-2 mt-4"><b>Web Applications</b></p>
								<p className="text-muted text-left text-xl-center text-lg-center">Advanced web development services with a focus on results. We are skilled in creating customised web applications of all kinds.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><a href="https://en.wikipedia.org/wiki/E-commerce" style={{ color: "#8B0000" }}><ECommerce /></a></div>
								<p className="mb-2 mt-4"><b>E-Commerce</b></p>
								<p className="text-muted text-left text-xl-center text-lg-center">With a track record of creating profitable online stores, we specialise in eCommerce store development and conversion optimisation.</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><a href="https://en.wikipedia.org/wiki/User_interface" style={{ color: "#8B0000" }}><UI /></a></div>
								<p className="mb-2 mt-4"><b>UI/UX Design</b></p>
								<p className="text-muted text-left text-xl-center text-lg-center">We design user interfaces for your web or mobile applications so that you can take advantage of the greatest technical resources to maintain business growth.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="col-12 col-md-9 col-lg-6 container d-flex align-items-center">
					<table className="">
						<tr>
							<p className="display-6 mb-1 fw-bold our">Technology at a <span className="span_portfolio">Glance</span> </p>
						</tr>
						<tr><p className="text-muted">Obtain a stunningly designed website with an excellent user experience and a design strategy that is conversion-focused.</p>
						</tr>
					</table>
				</div>
				<div class="d-flex flex-column justify-content-center w-100 h-100">

					<div className="background_gradiant_color d-flex flex-column justify-content-center align-items-center">
						<div className="btn-group my-5">
							<div className="row gy-2 brands_logo d-flex align-items-center justify-content-evenly col-md-7 m-auto">
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://flutter.dev/"><img className="img-fluid tech_img" alt="logo1" src={flutter} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://www.python.org/"><img className="img-fluid tech_img" alt="logo1" src={python} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://react.dev/"><img className="img-fluid tech_img" alt="logo1" src={react} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://getbootstrap.com/"><img className="img-fluid tech_img" alt="logo1" src={bootstrap} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://laravel.com/"><img className="img-fluid tech_img" alt="logo1" src={laravel} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://angular.dev/"><img className="img-fluid tech_img" alt="logo1" src={angular} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4 ">
									<a href="https://nodejs.org/en"><img className="img-fluid tech_img" alt="logo1" src={node} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://www.java.com/en/"><img className="img-fluid tech_img" alt="logo1" src={java} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://ai.google/"><img className="img-fluid tech_img" alt="logo1" src={ai} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://cplusplus.com/"><img className="img-fluid tech_img" alt="logo1" src={cplus} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://www.mongodb.com/"><img className="img-fluid tech_img" alt="logo1" src={mongodb} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://www.javascript.com/"><img className="img-fluid tech_img" alt="logo1" src={javascript} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://www.mysql.com/"><img className="img-fluid tech_img" alt="logo1" src={mysql} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://tailwindcss.com/"><img className="img-fluid tech_img" alt="logo1" src={tailwind} /></a>
								</div>
								<div className="col-md-3 col-4 col-lg-4">
									<a href="https://www.odoo.com/"><img className="img-fluid tech_img" alt="logo1" src={odoo} /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1"><b>Our <span className="main_color">Process</span></b></p>
						<p className="text-muted">We take great pride in providing our clients with ideal solutions tailored to their specific issues. To earn our clients' loyalty as business partners, we provide them with personal service.</p>
					</div>
					<div className="row gy-12 d-flex align-items-center">
						<div className="col-md-12 col-lg-12 text-center">
							<div className="snip1534">
								<img className="img-responsive img-fluid" alt="product1" src={product1} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1"><b> Our <span className="main_color">Happy Clients</span></b></p>
					</div>
					<div className="row gy-2 brands_logo d-flex align-items-center justify-content-evenly col-md-7 m-auto">
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<a href="https://mobilyinfotech.com/"><img className="img-fluid" alt="company1" src={work1} /></a>
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<a href="https://www.solutionanalysts.com/"><img className="img-fluid" alt="company2" src={work2} /> </a>
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<a href="https://triazinesoft.com/">	<img className="img-fluid" alt="company3" src={work3} /> </a>
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<a href="https://www.drcsystems.com/"><img className="img-fluid" alt="company4" src={work4} /> </a>
						</div>
					</div>
					<div className="row gy-2 brands_logo d-flex align-items-center justify-content-evenly col-md-7 m-auto">
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<a href="https://www.digitalupward.com/"><img className="img-fluid" alt="company1" src={work5} /> </a>
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<a href="https://nehish.com/"><img className="img-fluid" alt="company2" src={work6} /> </a>
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<a href="https://www.itchotels.com/in/en"><img className="img-fluid" alt="company3" src={work7} /> </a>
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<a href="https://zeorbit.com/"><img className="img-fluid" alt="company4" src={work8} /> </a>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default Home;