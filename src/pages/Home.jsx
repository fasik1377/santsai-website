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
import product1 from "../images/software_process1.png"
import rocket from "../images/rocket.png"
import portfolio1 from "../images/portfolio/bloom_1.jpg"
//import christmas_tree from "../images/christmas-tree.png"
import christmas_bell from "../images/christmas-bell.png"
import exam1 from "../images/exam1.jpg"
import digital_graphics from "../images/portfolio/Santsai_graphics.png"
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
		<><section
  className="sec"
  style={{ height: "100vh", overflow: "hidden" }}
>
  <div
    className="animated-background"
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #8B0000, white, black)",
      animation: "backgroundAnimation 10s infinite alternate",
      zIndex: -1,
    }}
  ></div>

  {/* */}<div
    className="technology-animation"
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      overflow: "hidden",
    }}
  >
    {[
      "odoo.png",
      "ai.png",
      "javascript.png",
      "reactjs.png",
      "nodejs.png",
      "python.png",
      "java.png",
      "flutter.png",
      "bootstrap.png",
      "angular.png",
    ].map((imgSrc, i) => (
      <img
        key={i}
        src={`/images/tech/${imgSrc}`} // Replace with the correct path to your images
        alt={imgSrc.replace(".png", "")}
        className="tech-icon"
        style={{
          position: "absolute",
          width: "70px",
          height: "70px",
          animation: `moveTech ${Math.random() * 10 + 5}s linear infinite`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>

  <div
    className="container"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      color: "#fff",
      textAlign: "center",
    }}
  >
   {/* <h1
      className="animated-text"
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        margin: 0,
        animation: "textAnimation 3s infinite",
      }}
    >
      Santsai Corporation
    </h1>*/} 
    {/*    <p
      style={{
        fontSize: "1.5rem",
        margin: "1rem 0",
        animation: "fadeIn 5s infinite",
      }}
    >
      Your Tech Partner
    </p> */}

  </div>

  {/* Add CSS animations */}
  <style>{`
    @keyframes backgroundAnimation {
      0% { background: linear-gradient(135deg, #8B0000, white, black); }
      50% { background: linear-gradient(135deg, white, black, #8B0000); }
      100% { background: linear-gradient(135deg, black, #8B0000, white); }
    }

    @keyframes textAnimation {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.8; }
      100% { transform: scale(1); opacity: 1; }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes moveTech {
      0% { transform: translate(0, 0) rotate(0deg); }
      100% { transform: translate(100vw, 100vh) rotate(360deg); }
    }

    .tech-icon {
      width: 50px;
      height: 50px;
      opacity: 0.8;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      animation-timing-function: ease-in-out;
    }
  `}</style>
</section>



<section 
  className="text-center position-relative" 
  style={{
    backgroundColor: "#8B0000", 
    color: "white", 
    overflow: "hidden",
  }}
>
  {/* Falling Snow Animation */}
  <div className="snow"></div>
<div className="container py-5 col-lg-10 col-xl-9">
  <div className="blinking-text text-warning text-center mb-4">
    <strong>The website is under construction</strong>
  </div>
  <p className="display-6 text-white mb-4">
    <strong>The Company for Web Solutions</strong>
  </p>
  <p className="text-white fs-6">
    Our company is one of the top ones in India. <em>"Our ultimate objective is to provide the best services and improve overall growth of client's business."</em>
    <br />
    Santsai Corporation Pvt. Ltd. is an Indian web design and development company that operates around the clock and provides exceptional solutions for your technical needs and goals. In the areas of eCommerce website development, WordPress, Magento, Joomla development, custom web application development, content management system, search engine optimisation, internet marketing, mobile responsive website, and mobile application development, we have great expertise providing specialised and measurable services. We have established our reputation by providing numerous businesses with worthwhile and high-quality solutions that set them apart from the competition.
  </p>
  <p className="text-white fs-6 mt-4">
    <strong>12+ Years of Experience in the Industry</strong>
    <br />
    More than 100 completed projects in over ten nations. Knowledge of website design, usability, and app development. We recognise your discomforts, ensure timely delivery and quality assurance. With a helpful and amiable support staff, we are subject matter experts while maintaining affordability.
  </p>
</div>



  {/* Christmas Decorations */}
  <div className="graphics">
   {/* <img 
      src={christmas_tree} 
      alt="Christmas Tree" 
      className="position-absolute" 
      style={{ bottom: "10px", left: "20px", width: "120px" }}
    />*/} 
    <img 
      src={christmas_bell}
      alt="Christmas Bell" 
      className="position-absolute" 
      style={{ top: "10px", right: "20px", width: "100px" }}
    />
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
			<section className="container py-5">
			<div className="row min-vh-10 d-flex justify-content-center align-items-center">
  <div className="col-12 col-md-9 col-lg-6 text-center">
    <h2 className="display-6 mb-1 fw-bold">
      Technology at a <span className="span_portfolio">Glance</span>
    </h2>
    <p className="text-muted">
      Obtain a stunningly designed website with an excellent user experience
      and a design strategy that is conversion-focused.
    </p>
  </div>
</div>
  <div className="container-fluid mt-4">
  <div className="row justify-content-center">
    <div className="col-12 background_gradiant_color p-4">
      <div className="row gy-3 gy-md-4 justify-content-center">
        {[
          { src: flutter, link: "https://flutter.dev/"},
          { src: python, link: "https://www.python.org/" },
          { src: react, link: "https://react.dev/" },
          { src: bootstrap, link: "https://getbootstrap.com/" },
          { src: laravel, link: "https://laravel.com/" },
          { src: angular, link: "https://angular.dev/" },
          { src: node, link: "https://nodejs.org/en" },
          { src: java, link: "https://www.java.com/en/" },
          { src: ai, link: "https://ai.google/" },
          { src: cplus, link: "https://cplusplus.com/" },
          { src: mongodb, link: "https://www.mongodb.com/" },
          { src: javascript, link: "https://www.javascript.com/" },
          { src: mysql, link: "https://www.mysql.com/" },
          { src: tailwind, link: "https://tailwindcss.com/" },
          { src: odoo, link: "https://www.odoo.com/" },
        ].map((tech, index) => (
          <div
            key={index}
            className="col-4 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
          >
            <a href={tech.link} target="_blank" rel="noopener noreferrer"><img
  className="img-fluid tech_img blinking-image"
  alt="logo"
  src={tech.src}
  style={{
    width: "120px",
    height: "100px",
    boxShadow: "30px 40px 80px rgba(133, 3, 3, 0.15)", // Shadow with slight blur
  }}
/>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</section>

  {/*Portfolio Section */}
    <section id="portfolio" class="portfolio section">

      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>At Santsai Corporation Pvt. Ltd., we specialize in innovative software solutions, blending cutting-edge technology with expert craftsmanship. From dynamic web applications to intelligent mobile apps, our team delivers tailored products that empower businesses to thrive in the digital age. Your success is our innovation.</p>
      </div>

      <div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        {/* 
        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>
        */}  

          <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app text-center text-md-start">
  <div class="portfolio-content h-100">
    <a href="assets/img/portfolio/app-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox">
      <img src={portfolio1} class="img-fluid mx-auto d-block" alt="" />
    </a>
    <div class="portfolio-info">
      <h4><a href="portfolio-details.html" title="More Details">Bloom App</a></h4>
      <p>Beauty salon and spa booking app</p>
    </div>
  </div>
</div>


            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src={exam1} class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Exam App</a></h4>
                  <p>Application which assist students by providing exam</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src={digital_graphics} class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Digital Marketing</a></h4>
                  <p>Provides digital marketing seasoned with graphic design</p>
                </div>
              </div>
            </div>
			{/*<!-- End Portfolio Item -->*/}
{/* 

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/books-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/books-1.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Books 1</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/app-2.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">App 2</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/product-2.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Product 2</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/branding-2.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Branding 2</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/books-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/books-2.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Books 2</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/app-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/app-3.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">App 3</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/product-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/product-3.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Product 3</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/branding-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/branding-3.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Branding 3</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
			*/}

          {/* 
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <a href="assets/img/portfolio/books-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/books-3.jpg" class="img-fluid" alt="" /></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Books 3</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
          */}  

          </div>

        </div>

      </div>

    </section>
	{/*Portfolio Section*/}
{/*<section class="sdlc-section">  
  <div className="launch-container">
      <img src={rocket} alt="Rocket" className="rocket" />
      <div className="smoke2"></div>
    </div>
    <h1 class="sdlc-title">
        <b>
          System Development <span style={{color:'black'}}>Life Cycle (SDLC)</span>
        </b></h1>
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="sdlc-card">
            <div class="sdlc-card-header">Step 1: Planning</div>
            <div class="sdlc-card-body">
              <div class="sdlc-step">Planning</div>
              <p class="sdlc-description">Define the project scope, objectives, and feasibility.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sdlc-card">
            <div class="sdlc-card-header">Step 2: Analysis</div>
            <div class="sdlc-card-body">
              <div class="sdlc-step">Analysis</div>
              <p class="sdlc-description">Analyze requirements and system specifications.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sdlc-card">
            <div class="sdlc-card-header">Step 3: Design</div>
            <div class="sdlc-card-body">
              <div class="sdlc-step">Design</div>
              <p class="sdlc-description">Create system designs, wireframes, and architecture.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sdlc-card">
            <div class="sdlc-card-header">Step 4: Development</div>
            <div class="sdlc-card-body">
              <div class="sdlc-step">Development</div>
              <p class="sdlc-description">Write code and build the system functionalities.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sdlc-card">
            <div class="sdlc-card-header">Step 5: Testing</div>
            <div class="sdlc-card-body">
              <div class="sdlc-step">Testing</div>
              <p class="sdlc-description">Test the system for bugs and performance issues.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sdlc-card">
            <div class="sdlc-card-header">Step 6: Deployment</div>
            <div class="sdlc-card-body">
              <div class="sdlc-step">Deployment</div>
              <p class="sdlc-description">Deploy the system to the production environment.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mx-auto">
          <div class="sdlc-card">
            <div class="sdlc-card-header">Step 7: Maintenance</div>
            <div class="sdlc-card-body">
              <div class="sdlc-step">Maintenance</div>
              <p class="sdlc-description">Monitor, update, and maintain the system.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>*/}
 {/* 
 <section>
 <div className="container mx-auto py-5">
    <div className="mb-5 text-center">
      <p className="display-6 mb-1">
        <b>
          Our <span className="main_color">Process</span>
        </b>
      </p>
      <p className="text-muted text-highlight animated-text">
        We take great pride in providing our clients with ideal solutions tailored to their specific issues. 
        To earn our clients' loyalty as business partners, we provide them with personal service.
      </p>
    </div>

    <div className="row gy-4 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 text-center">
        <div className="snip1534">
          <img
            className="img-responsive img-fluid rotating-image"
            alt="product1"
            src={product1}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  </div>
</section>
 */} 
{/* 
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
			</section>*/}




		</>
	);
};

export default Home;