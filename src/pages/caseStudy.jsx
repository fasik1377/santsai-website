// File: CaseStudy.js
import React, { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";
import 'bootstrap/dist/css/bootstrap.min.css';

// Simulate API data
const mockApiData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Enhancing User Experience in E-Commerce",
          description: "A case study on improving the UI/UX of a large-scale e-commerce platform.",
          client: "E-Com Solutions",
          technologies: ["Angular", "TypeScript", "Google Cloud", "Kubernetes"],
          outcome: "Increased conversion rates by 25%.",
          images: [
            "11.jpg",
            "22.jpg",
            "33.jpg"
          ]
        },
        {
          title: "Building Scalable Web Applications",
          description: "A comprehensive case study on building scalable, high-performance web applications.",
          client: "Santsai Corporation Pvt. Ltd",
          technologies: ["React", "Node.js", "AWS", "Docker"],
          outcome: "Improved client efficiency by 40%.",
          images: [
            "istockphoto-1349390515-612x612.jpg",
            "pexels-freestocks-744462.jpg",
            "pexels-padrinan-1591061.jpg"
          ]
        },
        
        {
          title: "Optimizing DevOps Pipelines",
          description: "A case study on automating and optimizing DevOps pipelines for a tech enterprise.",
          client: "DevOps Corp.",
          technologies: ["Jenkins", "Kubernetes", "Azure", "Terraform"],
          outcome: "Reduced deployment times by 60%.",
          images: [
            "44.jpg",
            "55.jpg",
            ".jpg"
          ]
        }
      ]);
    }, 2000); // Simulate network delay
  });
};

const CaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the simulated API data
  useEffect(() => {
    mockApiData().then(data => {
      setCaseStudies(data);
      setLoading(false);
    });
  }, []);

  // Generate and download PDF
  const downloadPDF = (caseStudy) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(caseStudy.title, 20, 20);
    doc.setFontSize(12);
    doc.text(`Client: ${caseStudy.client}`, 20, 30);
    doc.text("Description:", 20, 40);
    doc.text(caseStudy.description, 20, 50);
    doc.text("Technologies Used:", 20, 70);
    doc.text(caseStudy.technologies.join(", "), 20, 80);
    doc.text("Outcome:", 20, 100);
    doc.text(caseStudy.outcome, 20, 110);

    doc.save(`${caseStudy.title}.pdf`);
  };

  if (loading) {
    return <div className="text-center text-dark">Loading case studies...</div>;
  }

  return (
    <div className="container-fluid" style={{ background: 'linear-gradient(to top, #eff4f8 0%, #cddce2 100%)', minHeight: '100vh', padding: '2rem', fontFamily: "'Roboto', sans-serif" }}>
      {caseStudies.map((caseStudy, index) => (
        <div className="card mb-4 shadow" style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', overflow: 'hidden' }} key={index}>
          {/* Bootstrap Carousel for Image Slider */}
          <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {caseStudy.images.map((imageUrl, imgIndex) => (
                <div className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`} key={imgIndex}>
                  <img src={imageUrl} className="d-block w-100" alt={`Case study ${index + 1} - slide ${imgIndex + 1}`} style={{ height: '300px', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="card-body" style={{ padding: '1.5rem' }}>
            <h5 className="card-title" style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '1rem' }}>{caseStudy.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted" style={{ marginBottom: '1rem' }}>Client: {caseStudy.client}</h6>
            <p className="card-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}>{caseStudy.description}</p>
            <h6 style={{ fontWeight: '600' }}>Technologies Used:</h6>
            <ul style={{ paddingLeft: '1rem', marginBottom: '1rem' }}>
              {caseStudy.technologies.map((tech, i) => (
                <li key={i} style={{ fontSize: '1rem' }}>{tech}</li>
              ))}
            </ul>
            <h6 style={{ fontWeight: '600' }}>Outcome:</h6>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>{caseStudy.outcome}</p>
            <button className="btn btn-block" style={{ backgroundColor: '#8B0000', color: 'white', width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: '600' }} onClick={() => downloadPDF(caseStudy)}>
              Download Case Study as PDF
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudy;
