import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

import headerImg1 from "../assets/img/header-img.svg";
import headerImg2 from "../assets/img/header-img1.jpg";
import headerImg3 from "../assets/img/header-img2.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const toRotate = ["Digital Marketing Solutions", "Paid Ads", "Web Development"];
  const headerImages = [headerImg1, headerImg2, headerImg3];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Calculate the duration based on typing or deleting action
    let actionDuration = isDeleting ? delta / text.length : delta;

    // Minimum action duration to avoid very fast deletion
    actionDuration = Math.max(actionDuration, 100);

    // Set the delta to the action duration
    setDelta(actionDuration);

    if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    {`We Provide`}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p style={{ color: "black" }}>
                    Welcome to Sacred Pixel, where innovation meets excellence!
                    Your digital solution manager. We specialize in digital
                    marketing, SEO and web designing. Our team of experts is dedicated to understanding
                    your business needs and providing solutions that deliver
                    results; Work with us to make your digital vision a reality.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Precision in pixels, Excellence in execution
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImages[loopNum % headerImages.length]} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
