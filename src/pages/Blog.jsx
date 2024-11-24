import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCollapse } from 'react-collapsed'
import Secheader from "./common/Secondaryheader";
//import Data from "../data/Blogdata";
import 'bootstrap-icons/font/bootstrap-icons.css';
import blog1 from "../images/blogs/blog1.jpg";
import blog2 from "../images/blogs/blog2.jfif";
import blog3 from "../images/blogs/blog3.jfif";
import blog4 from "../images/blogs/blog4.jfif";
import blog5 from "../images/blogs/blog5.jfif";
import blog6 from "../images/blogs/blog6.jfif";
import blog7 from "../images/blogs/blog7.jfif";
import blog8 from "../images/blogs/blog8.jfif";
import axios from "axios";

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
  const [articles, setArticles] = useState([]);
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null); // Track expanded article

  const token = localStorage.getItem('token');

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/blog/blogs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response)
        setArticles(response.data.data); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);


  const toggleExpand = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id)); // Toggle expand state for the selected blog
  };

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

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

            {articles?.map((article) => (
                <article key={article.id} className="entry">
                  <div className="entry-img">
                    <img src={article.image} alt="blog" className="img-fluid" />
                  </div>

                  <h2 className="entry-title">
                    <a className="anchor_style" href="blog-single.html">
                      {article.title}
                    </a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i>
                        <a className="anchor_style" href="blog-single.html">
                          Ratan Pratap
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>
                        <a className="anchor_style" href="blog-single.html">
                          <time dateTime="2020-01-01">{article?.date}</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i>
                        <a className="anchor_style" href="blog-single.html">
                          12
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-content">
                    <p>
                      {expandedCard === article._id
                        ? article.content
                        : truncateText(article.content, 15)}
                    </p>

                    <div className="read-more">
                      <button
                        className="anchor_style"
                        onClick={() => toggleExpand(article._id)}
                      >
                        {expandedCard === article._id ? "Show Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {/* <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li><a className="anchor_style" href="#">1</a></li>
                  <li className="active"><a className="anchor_style" href="#">2</a></li>
                  <li><a className="anchor_style" href="#">3</a></li>
                </ul>
              </div> */}
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
                    <li><a className="anchor_style" href="#">AI <span>(12)</span></a></li>
                    <li><a className="anchor_style" href="#">Biotech <span>(5)</span></a></li>
                    <li><a className="anchor_style" href="#">Design <span>(22)</span></a></li>
                    <li><a className="anchor_style" href="#">Creative <span>(8)</span></a></li>
                    <li><a className="anchor_style" href="#">Software Development <span>(14)</span></a></li>
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