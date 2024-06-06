import React from "react";
import work1 from "../images/brands/adobe.svg"
import work2 from "../images/brands/samsung.svg"
import work3 from "../images/brands/ebay.svg"
import work4 from "../images/brands/amazon.svg"
import product1 from "../images/products/99.png"
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
											<td>Mobile App <span className="deve">Development</span></td></tr>
										<tr><td></td></tr></table>	 Apps for productivity, profitability and more
								</TweenOne>
								<TweenOne className="banner-user-text"
									animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
								>
									we build complete solutions for mobile apps on Android and iOS.
									<br />
									we can help you build applications and software for the mobile medium
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
											<td>Pixel Perfect <span className="deve">Website Development</span></td></tr>
										<tr><td></td></tr></table>With a Pinch of Creativity
								</TweenOne>
								<TweenOne className="banner-user-text"
									animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
								>
									We create beautifully unique website to
									<br />
									mesmerize your audience
								</TweenOne>
							</Element>
						</BannerAnim>
					</div>
				</div>
			</section>

			<section className="bg-dark">
				<div className="container row py-5 m-auto col-lg-10 col-xl-9">
					<p className="display-6 text-center mb-4 text-white">The company for web solutions</p>
					<p className="text-white">We are a leading firm based in India. "Our ultimate objective is to provide best services and improve overall growth of client's business".

						Santsai Corporation Pvt. Ltd. is a 24/7 web design & web development company India that delivers top class solutions to your technical challenges & aspirations. We hold immense specialization in offering tailor-made and quantifiable services in the spheres of eCommerce Website Development, WordPress, Magento, Joomla development, custom web application development, content management system, search engine optimization, internet marketing, mobile responsive website and mobile application development. We have made a name by delivering quality and valuable solutions to a large number of companies and lifting them above everyone else.</p>
					<p className="text-white">Over 12 Years of Industry Expertise
						Over 1200 projects delivered in 10+ countries
						Expertise in app development, website design and usability
						We understand your pain points
						Quality Assurance and Timely Delivery
						We are domain experts and friendly Support team
						We keep it in your budget.</p>
				</div>
			</section>
			<section>
				<div className="container mx-auto py-5">
					<div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><BusinessIcon /></div>
								<p className="mb-2 mt-4">Mobility Solutions</p>
								<p className="text-muted text-left text-xl-center text-lg-center">We build complete solutions for mobile apps on Android and iOS. We can help you build applications and software for the mobile medium</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><WebIcon /></div>
								<p className="mb-2 mt-4">Web Applications</p>
								<p className="text-muted text-left text-xl-center text-lg-center">Advanced result-oriented web development services. We have expertise in all types of web application customize solutions.</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><ECommerce /></div>
								<p className="mb-2 mt-4">E-Commerce</p>
								<p className="text-muted text-left text-xl-center text-lg-center">We are specialized in eCommerce Store Development & Conversion Optimization with a proven track record of developing successful online store.</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><UI /></div>
								<p className="mb-2 mt-4">UI/UX Design</p>
								<p className="text-muted text-left text-xl-center text-lg-center">We create user interfaces for your web or mobile applications for sustaining business growth by availing the benefits from the best technological resources.</p>
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
							<p className="paragraph_1">Get a beautifully crafted website with great</p>
							<p className="paragraph_2"> user experience and conversion-focused design approach.</p>
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
						<p className="display-6 mb-1">Our Products</p>
						<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="row gy-3 d-flex align-items-center justify-content-evenly">
						<div className="col-md-3 text-center">
							<div className="snip1534">
								<img className="img-fluid" alt="product1" src={product1} />
								<div className="img_caption">
									<h6>Demo Product</h6>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center">
							<div className="snip1534">
								<img className="img-fluid" alt="product2" src={product1} />
								<div className="img_caption">
									<h6>Demo Product</h6>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center">
							<div className="snip1534">
								<img className="img-fluid" alt="product3" src={product1} />
								<div className="img_caption">
									<h6>Demo Product</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1">We Worked With...</p>
						<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="row gy-2 brands_logo d-flex align-items-center justify-content-evenly col-md-7 m-auto">
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" alt="company1" src={work1} />
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" alt="company2" src={work2} />
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" alt="company3" src={work3} />
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" alt="company4" src={work4} />
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="py-5">
					<div className="container d-flex justify-content-center align-items-center">
						<div className="col-12 col-md-9 col-lg-6 py-5 text-center">
							<p className="display-6 mb-1">Work with an elite team of thinkers.</p>
							<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							<button className="btn p-2 btn_custom col-lg-3 col-md-5 col-6">GET IN TOUCH</button>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default Home;