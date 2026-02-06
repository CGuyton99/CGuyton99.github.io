import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact dark-contact" id="connect">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="contact-title">Let's Connect</h2>
                  <p className="contact-subtitle">
                    I'm always open to new opportunities, collaborations, or just a chat. Reach out via email, phone, or LinkedIn!
                  </p>

                  <div className="contact-links">
                    <p>
                      <b>Email:</b>{" "}
                      <a href="mailto:cguytt3e@gmail.com?subject=Let's Connect!">
                        cguytt3e@gmail.com
                      </a>
                    </p>
                    <p>
                      <b>Alternate Email:</b>{" "}
                      <a href="mailto:cguyton@icstars.org?subject=Let's Connect!!">
                        cguyton@icstars.org
                      </a>
                    </p>
                    <p>
                      <b>Phone:</b> +1 (414) 399-8464
                    </p>
                    <p>
                      <i>
                        Or reach out via{" "}
                        <a href="https://www.linkedin.com/in/cguyton99/" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                        !
                      </i>
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}