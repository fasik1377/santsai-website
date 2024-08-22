import React from "react";
import { NavLink } from "react-router-dom";
import { useCollapse } from 'react-collapsed'
import Secheader from "./common/Secondaryheader";
//import Data from "../data/Blogdata";
import blog1 from "../images/blogs/blog1.jpg";
import blog2 from "../images/blogs/blog2.jfif";
import blog3 from "../images/blogs/blog3.jfif";
import blog4 from "../images/blogs/blog4.jfif";
import blog5 from "../images/blogs/blog5.jfif";
import blog6 from "../images/blogs/blog6.jfif";
import blog7 from "../images/blogs/blog7.jfif";
import blog8 from "../images/blogs/blog8.jfif";

const BlogCard = (props) => {
  return (
    <div className="col-md-4 col-lg-4 mb-3 text-center">
      <a href={props.linked} className="blog_anchor">
        <div className="box_border col-lg-9 p-3 pt-4 m-auto rounded">
          <img src={props.blogimage} className="img-fluid mb-2" alt="blog" width="20%" />
          <p className="my-2" style={{ color: "black" }}>{props.blogtitle}</p>
          <p className="text-muted text-left text-xl-center text-lg-center">{props.blogdesc}</p>
        </div>
      </a>
    </div>
  );
};

const Blog = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <>
      <Secheader
        sectitle="Blog"
        secdesc="Our latest blog posts"
      />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">

          <div className="row">

            <div className="col-lg-8 entries">

              <article className="entry">

                <div className="entry-img">
                  <img src={blog1} alt="image" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <a className="anchor_style" href="blog-single.html">Why Your Business Needs a Digital Transformation Strategy</a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a className="anchor_style" href="blog-single.html">Ratan Pratap</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a className="anchor_style" href="blog-single.html"><time datetime="2020-01-01">Aug 21, 2024</time></a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a className="anchor_style" href="blog-single.html">12 Comments</a></li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>In today’s fast-moving world, a digital transformation strategy is essential for business success. Embracing digital tools enhances efficiency, improves customer experiences, and boosts competitiveness.
                  </p>
                  {isExpanded ? '' : (
                    <div className="read-more">
                      <a className="anchor_style" {...getToggleProps()}>Read More</a>
                    </div>)}

                  <section {...getCollapseProps()}>It enables data-driven decisions, fosters innovation, and helps you adapt quickly to market changes.
                    Without it, your business risks lagging behind as others leverage technology to advance. A solid digital strategy aligns tech with business goals, ensuring optimal resource use and maximizing ROI. By transforming digitally, you position your business for sustained growth and relevance, meeting modern demands and staying ahead of the curve.
                  </section>
                  {!isExpanded ? '' : (
                    <div className="read-more">
                      <a className="anchor_style" {...getToggleProps()}>Show Less</a>
                    </div>)}

                </div>

              </article>

              <article className="entry">

                <div className="entry-img">
                  <img src={blog2} alt="" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <a className="anchor_style" href="blog-single.html">The Role of Augmented Reality in Future Software Applications</a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a className="anchor_style" href="blog-single.html">Ratan Pratap</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a className="anchor_style" href="blog-single.html"><time datetime="2020-01-01">Aug 14, 2024</time></a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a className="anchor_style" href="blog-single.html">24 Comments</a></li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>Augmented Reality (AR) is set to revolutionize future software applications. By blending digital information with the physical world, AR enhances user experiences across various fields.
                  </p>
                  
                  {isExpanded ? '' : (
                    <div className="read-more">
                      <a className="anchor_style" {...getToggleProps()}>Read More</a>
                    </div>)}
                    
                  <section {...getCollapseProps()}>In gaming, it creates immersive worlds; in education, it provides interactive learning tools; and in retail, it allows virtual try-ons. Healthcare professionals can visualize complex data in real-time, and architects can walk through 3D models of their designs.
                  As AR technology advances, its integration into everyday apps will make interactions more intuitive and engaging, transforming how we work, learn, and play.
                  </section>

                  
                  {!isExpanded ? '' : (
                    <div className="read-more">
                      <a className="anchor_style" {...getToggleProps()}>Show Less</a>
                    </div>)}
                </div>

              </article>

              <article className="entry">

                <div className="entry-img">
                  <img src={blog3} alt="" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <a className="anchor_style" href="blog-single.html">Biotechnology is the savior of wildlife</a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a className="anchor_style" href="blog-single.html">Ratan Pratap</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a className="anchor_style" href="blog-single.html"><time datetime="2020-01-01">Aug 12, 2024</time></a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a className="anchor_style" href="blog-single.html">57 Comments</a></li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>Biotechnology is truly a savior for wildlife! Through genetic research, scientists can protect endangered species by boosting their genetic diversity and health. Advanced techniques like cloning and gene editing help restore populations and even revive extinct species.
                    Biotechnology also aids in habitat conservation by creating sustainable solutions to combat environmental threats. With these innovative tools, we’re enhancing our efforts to preserve biodiversity and ensure a thriving planet for future generations. By harnessing the power of biotech,
                    we're making significant strides towards protecting wildlife and maintaining ecological balance.
                  </p>
                  <div className="read-more">
                    <a className="anchor_style" href="blog-single.html">Read More</a>
                  </div>
                </div>

              </article>

              <article className="entry">

                <div className="entry-img">
                  <img src={blog4} alt="" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <a className="anchor_style" href="blog-single.html">Open Source Tools for Software Developers</a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a className="anchor_style" href="blog-single.html">Ratan Pratap</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a className="anchor_style" href="blog-single.html"><time datetime="2020-01-01">Aug 10, 2024</time></a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a className="anchor_style" href="blog-single.html">102 Comments</a></li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>Software developers have a wealth of open-source tools to enhance their workflow! **Visual Studio Code** remains a top choice for code editing with its rich extensions.
                    **Git** and **GitHub** are essential for version control and collaboration. **Docker** simplifies containerization, while **Kubernetes** manages container orchestration. **Jenkins** automates builds and deployments, and **Postman** is great for API testing.
                    For monitoring and logging, **Prometheus** and **Grafana** are invaluable. These tools empower developers to build, test, and deploy software efficiently, making them indispensable in today’s tech landscape.
                  </p>
                  <div className="read-more">
                    <a className="anchor_style" href="blog-single.html">Read More</a>
                  </div>
                </div>

              </article>

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li><a className="anchor_style" href="#">1</a></li>
                  <li className="active"><a className="anchor_style" href="#">2</a></li>
                  <li><a className="anchor_style" href="#">3</a></li>
                </ul>
              </div>

            </div>

            <div className="col-lg-4">

              <div className="sidebar">

                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" />
                    <button type="submit"><i className="bi bi-search"></i></button>
                  </form>
                </div>

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li><a className="anchor_style" href="#">General <span>(25)</span></a></li>
                    <li><a className="anchor_style" href="#">Lifestyle <span>(12)</span></a></li>
                    <li><a className="anchor_style" href="#">Travel <span>(5)</span></a></li>
                    <li><a className="anchor_style" href="#">Design <span>(22)</span></a></li>
                    <li><a className="anchor_style" href="#">Creative <span>(8)</span></a></li>
                    <li><a className="anchor_style" href="#">Educaion <span>(14)</span></a></li>
                  </ul>
                </div>

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src={blog6} alt="" />
                    <h4><a className="anchor_style" href="blog-single.html">The Benefits of Adopting an Agile IT Infrastructure</a></h4>
                    <time datetime="2020-01-01">Aug 8, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={blog8} alt="" />
                    <h4><a className="anchor_style" href="blog-single.html">What about 'Green Practice' one step ahead civilization</a></h4>
                    <time datetime="2020-01-01">Aug 7, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={blog7} alt="" />
                    <h4><a className="anchor_style" href="blog-single.html">How to Leverage Big Data for Competitive Advantage</a></h4>
                    <time datetime="2020-01-01">Aug 6, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={blog6} alt="" />
                    <h4><a className="anchor_style" href="blog-single.html">The Benefits of Adopting an Agile IT Infrastructure</a></h4>
                    <time datetime="2020-01-01">Aug 5, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={blog5} alt="" />
                    <h4><a className="anchor_style" href="blog-single.html">The Future of Quantum Computing: Opportunities and Challenges</a></h4>
                    <time datetime="2020-01-01">Aug 4, 2024</time>
                  </div>

                </div>

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    <li><a className="anchor_style" href="#">App</a></li>
                    <li><a className="anchor_style" href="#">IT</a></li>
                    <li><a className="anchor_style" href="#">Business</a></li>
                    <li><a className="anchor_style" href="#">Mac</a></li>
                    <li><a className="anchor_style" href="#">Design</a></li>
                    <li><a className="anchor_style" href="#">Office</a></li>
                    <li><a className="anchor_style" href="#">Creative</a></li>
                    <li><a className="anchor_style" href="#">Studio</a></li>
                    <li><a className="anchor_style" href="#">Smart</a></li>
                    <li><a className="anchor_style" href="#">Tips</a></li>
                    <li><a className="anchor_style" href="#">Marketing</a></li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5 text-center">
          <p className="display-6">Have any thoughts?</p>
          <p className="text-muted">Feel free to <NavLink className="text-decoration-none" to="/contact">contact us</NavLink> and share your ideas!</p>
        </div>
      </section>
    </>
  );
};

export default Blog;