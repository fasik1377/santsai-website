// File: CaseStudy.js
import React, { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = 'http://54.81.228.157:4000/casestudy'; // Replace with your actual API endpoint

  // Fetch case studies from API
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(apiUrl);
        setCaseStudies(response.data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  // Generate and download PDF with text wrapping
  const downloadPDF = (caseStudy) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width - 40; // Page width with margins
    const textOptions = { maxWidth: pageWidth };
    let verticalOffset = 20; // Initial vertical offset for the first line
  
    doc.setFontSize(16);
    doc.text(caseStudy.title, 20, verticalOffset);
    verticalOffset += 10; // Add space after title
  
    doc.setFontSize(12);
    doc.text(`Client: ${caseStudy.client}`, 20, verticalOffset);
    verticalOffset += 10; // Add space after client
  
    doc.text("Overview:", 20, verticalOffset);
    const overviewText = doc.splitTextToSize(caseStudy.overview, pageWidth);
    doc.text(overviewText, 20, verticalOffset + 10);
    verticalOffset += overviewText.length * 7 + 10; // Dynamically adjust vertical offset
  
    doc.text("Challenge:", 20, verticalOffset);
    const challengeText = doc.splitTextToSize(caseStudy.challenge, pageWidth);
    doc.text(challengeText, 20, verticalOffset + 10);
    verticalOffset += challengeText.length * 7 + 10;
  
    doc.text("Solution:", 20, verticalOffset);
    const solutionText = doc.splitTextToSize(caseStudy.solution, pageWidth);
    doc.text(solutionText, 20, verticalOffset + 10);
    verticalOffset += solutionText.length * 7 + 10;
  
    doc.text("Results:", 20, verticalOffset);
    const resultsText = doc.splitTextToSize(caseStudy.results, pageWidth);
    doc.text(resultsText, 20, verticalOffset + 10);
    verticalOffset += resultsText.length * 7 + 10;
  
    doc.text("Conclusion:", 20, verticalOffset);
    const conclusionText = doc.splitTextToSize(caseStudy.conclusion, pageWidth);
    doc.text(conclusionText, 20, verticalOffset + 10);
    verticalOffset += conclusionText.length * 7 + 10;
  
    doc.text("Technologies Used:", 20, verticalOffset);
    const technologiesText = doc.splitTextToSize(caseStudy.technologiesUsed.join(", "), pageWidth);
    doc.text(technologiesText, 20, verticalOffset + 10);
    
    // Save the PDF
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
            <p className="card-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}><strong>Overview:</strong> {caseStudy.overview}</p>
            <p className="card-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}><strong>Challenge:</strong> {caseStudy.challenge}</p>
            <p className="card-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}><strong>Solution:</strong> {caseStudy.solution}</p>
            <p className="card-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}><strong>Results:</strong> {caseStudy.results}</p>
            <p className="card-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}><strong>Conclusion:</strong> {caseStudy.conclusion}</p>

            <h6 style={{ fontWeight: '600' }}>Technologies Used:</h6>
            <ul style={{ paddingLeft: '1rem', marginBottom: '1rem' }}>
              {caseStudy.technologiesUsed.map((tech, i) => (
                <li key={i} style={{ fontSize: '1rem' }}>{tech}</li>
              ))}
            </ul>

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
