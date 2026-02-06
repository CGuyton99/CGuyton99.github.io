import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(90);

  const toRotate = [
    "Software Developer",
    "UX-Focused Engineer",
    "Creative Technologist",
  ];
  const pauseTime = 1400;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }

      setTypingSpeed(isDeleting ? 45 : 90);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="banner dark-banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }
                >
                  <span className="dark-tagline">
                    Designing clean, scalable, human-centered software
                  </span>

                  <h1 className="dark-title">
                    Christian Guyton
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                      <span className="ghost-text">Software Developer</span>
                    </span>
                  </h1>

                  <p className="dark-subtitle">
                    Full-stack developer blending engineering, UX, and
                    accessibility to build modern digital experiences that
                    actually work.
                  </p>

                  <a href="#connect">
                    <button className="dark-btn">
                      Let’s Connect <ArrowRightCircle size={22} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Christian Guyton portrait"
                    className="dark-img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
