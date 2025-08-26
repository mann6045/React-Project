import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const clearFields = () => {
   
  }

  return (
    <Col lg={12}>
      <section className="skill" id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>About Us</h2>
                <p style={{ fontSize: "18px" }}> {/* Adjust the font size here */}
                  We are a marketing agency that provides marketing solutions and tips for businesses of all sizes and industries. We help our clients achieve their marketing goals, whether it is increasing brand awareness, generating leads, or boosting sales. We have a team of experts who specialize in various aspects of marketing, such as digital marketing, content marketing, social media marketing, email marketing, SEO, PPC, and more. We use the latest tools and techniques to create and execute effective marketing strategies that suit our clients' needs and budget. We also offer marketing consulting and training services to help our clients improve their marketing skills and knowledge.
                </p>
                <p style={{ fontSize: "18px" }}> {/* Adjust the font size here */}
                  We are passionate about marketing and we love what we do. We are always learning and innovating to stay ahead of the curve and deliver the best results for our clients. We value customer satisfaction and we strive to build long-term relationships with our clients based on trust, transparency, and collaboration. We are not just a marketing agency, we are your marketing partner. Contact us today and let us help you grow your business with our marketing solutions and tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Col>
  )
}
