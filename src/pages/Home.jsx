import React from "react";
import work1 from "../images/brands/mobily.jpeg"
import work2 from "../images/brands/solutions.png"
import work3 from "../images/brands/triazine.jpeg"
import work4 from "../images/brands/drc.jpeg"
import work5 from "../images/brands/digital_upward.jpeg"
import work6 from "../images/brands/Nehish.png"
import work7 from "../images/brands/wiftcap.jpeg"
import work8 from "../images/brands/Zeorbit.jpg"
import product1 from "../images/process.png"
import BusinessIcon from '@material-ui/icons/Smartphone';
import WebIcon from '@material-ui/icons/DesktopWindows';
import ECommerce from '@material-ui/icons/ShoppingBasket';
import UI from '@material-ui/icons/GraphicEq';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
const BgElement = Element.BgElement;

const Home = () => {

	return (
		<>
			<section className="sec_1">
				<div className="header_height sec_bg d-flex align-items-center">
					<div className="container banner_h">
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
									<table>
										<tr>
											<td>Develop <span className="deve">Mobile Apps for </span></td></tr>
										<tr><td></td></tr></table>Profitability, Productivity, and Other Purposes.
								</TweenOne>
								<TweenOne className="banner-user-text"
									animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
								>
									We provide end-to-end services for iOS and Android mobile applications.
									<br />
									We can assist you in developing software and apps for mobile devices.
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
									<table>
										<tr>
											<td>Developing <span className="deve">Pixel-Perfect Websites</span></td></tr>
										<tr><td></td></tr></table>With a Splash of Originality
								</TweenOne>
								<TweenOne className="banner-user-text"
									animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
								>
									We design stunningly distinctive websites
									<br />
									that captivate visitors.
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
									<table>
										<tr>
											<td><span className="deve">Encourage a</span>&nbsp;Genuine Bond.</td></tr>
										<tr><td></td></tr></table>
								</TweenOne>
								<TweenOne className="banner-user-text"
									animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
								>
									<b>Custom-made,</b> expert,
									<br />  reasonably priced, and efficient web solutions. <br /><br />
									Given our exceptional professionalism, we are able to provide our esteemed clients in other countries with excellent
									<br />
									web and mobile application development services and solutions that guarantee their satisfaction.
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
									<table>
										<tr>
											<td>Incredibly Captivating <span className="deve">Digital Marketing</span></td></tr>
										<tr><td></td></tr></table><span className="deve">At a Reasonable</span> Price Point.
								</TweenOne>
								<TweenOne className="banner-user-text"
									animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
								>We create incredible digital marketing strategies to strengthen your brand.
									<br />
								</TweenOne>
							</Element>
						</BannerAnim>
					</div>
				</div>
			</section>

			<section className="bg-dark">
				<div className="container row py-5 m-auto col-lg-10 col-xl-9">
					<p className="display-6 text-center mb-4 text-white">The company for web solutions</p>
					<p className="text-white">Our company is one of the top ones in India. "Our ultimate objective is to provide best services and improve overall growth of client's business" . Santsai Corporation Pvt. Ltd. is an Indian web design and development company that operates around the clock and provides exceptional solutions for your technical needs and goals. In the areas of eCommerce website development, WordPress, Magento, Joomla development, custom web application development, content management system, search engine optimisation, internet marketing, mobile responsive website and mobile application development, we have great expertise providing specialised and measurable services. We have established our reputation by providing numerous businesses with worthwhile and high-quality solutions that set them apart from the competition.
					</p>
					<p className="text-white">12+ Years of Experience in the Industry more than 1200 completed projects in more than ten nations knowledge of website design, usability, and app development We recognise your discomforts. Timely delivery and quality assurance With a helpful and amiable support staff, we are subject matter experts and maintain affordability.</p>
				</div>
			</section>
			<section>
				<div className="container mx-auto py-5">
					<div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><BusinessIcon /></div>
								<p className="mb-2 mt-4"><b>Mobility Solutions</b></p>
								<p className="text-muted text-left text-xl-center text-lg-center">We provide end-to-end services for iOS and Android mobile applications. We can assist you in developing software and apps for mobile devices.</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><WebIcon /></div>
								<p className="mb-2 mt-4"><b>Web Applications</b></p>
								<p className="text-muted text-left text-xl-center text-lg-center">Advanced web development services with a focus on results. We are skilled in creating customised web applications of all kinds.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><ECommerce /></div>
								<p className="mb-2 mt-4"><b>E-Commerce</b></p>
								<p className="text-muted text-left text-xl-center text-lg-center">With a track record of creating profitable online stores, we specialise in eCommerce store development and conversion optimisation.</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><UI /></div>
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
					<table>
						<tr>
							<p className="display-6 mb-1 fw-bold our">Our <span className="span_portfolio">Portfolio</span> </p>
						</tr>
						<tr>
							<p className="paragraph_1">Obtain a stunningly designed website with an excellent</p>
							<p className="paragraph_2">user experience and a design strategy that is conversion-focused.</p>
						</tr>
					</table>
				</div>
				<div className="sec_2 py-5">
					<div className="container d-flex justify-content-center align-items-center">
					</div>
				</div>
			</section>

			<section>
				<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1"><b>Our <span className="main_color">Process</span></b></p>
						<p className="text-muted">We take great pride in providing our clients with ideal solutions tailored to their specific issues. To earn our clients' loyalty as business partners, we provide them with personal service.</p>
					</div>
					<div className="row gy-3 d-flex align-items-center">
						<div className="col-md-3 text-center">
							<div className="snip1534">
								<img className="img-fluid" alt="product1" src={product1} />
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
						<a href="https://www.wiftcap.com/"><img className="img-fluid" alt="company3" src={work7} /> </a>
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