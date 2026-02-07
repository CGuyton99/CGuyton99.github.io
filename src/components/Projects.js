import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { VideoCard } from "./VideoCard";
import projImg1 from "../assets/img/MusicMockup.png";
import projImg2 from "../assets/img/SignInMockup.png";
import projImg3 from "../assets/img/LandingPageMockup.png";
import projImg4 from "../assets/img/StreamingMockup.png";
import projImg5 from "../assets/img/NewsletterMockup.png";
import projImg6 from "../assets/img/Coming Soon.png";
import caseStudy1 from "../assets/img/MusicoalitionCaseStudy.png";
import caseStudy2 from "../assets/img/VPalCaseStudy.png";
import caseStudy3 from "../assets/img/LifeboatCaseStudy.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import webDev1 from "../assets/img/RPSWebDev.png";
import webDev2 from "../assets/img/WeatherWebDev.png";
import webDev3 from "../assets/img/NetflixWebDev.png";
import webDev4 from "../assets/img/abdotcom.png";
import webDev5 from "../assets/img/daiohs.png";
import webDev6 from "../assets/img/MKEKiosk.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const mockups = [
    {
      title: "Music Streaming App",
      description: "UI/UX Mockup",
      imgUrl: projImg1,
      SrcUrl:
        "https://www.behance.net/gallery/133006435/Music-Streaming-App-Mockup",
    },
    {
      title: "Sign In Experience",
      description: "UI Mockup",
      imgUrl: projImg2,
      SrcUrl:
        "https://www.behance.net/gallery/134168787/Sign-Up-Mockup-Daily-UXUI",
    },
    {
      title: "E-Sports Landing Page",
      description: "UI/UX Mockup",
      imgUrl: projImg3,
      SrcUrl:
        "https://www.behance.net/gallery/133602587/E-Sports-Recruiting-Landing-Page-Mockup",
    },
    {
      title: "Movie Streaming App",
      description: "UI/UX Mockup",
      imgUrl: projImg4,
      SrcUrl:
        "https://www.behance.net/gallery/132189083/Movie-Streaming-App-Mockup",
    },
    {
      title: "Newsletter Pop-Up",
      description: "UI Component",
      imgUrl: projImg5,
      SrcUrl:
        "https://www.behance.net/gallery/132070453/Newsletter-Sign-Up-Mockup",
    },
    {
      title: "More on Behance",
      description: "Full Design Portfolio",
      imgUrl: projImg6,
      SrcUrl: "https://www.behance.net/CGuyton",
    },
  ];

  const caseStudies = [
    {
      title: "Musicoalition",
      description: "Social Platform for Musicians",
      imgUrl: caseStudy1,
      SrcUrl:
        "https://www.behance.net/gallery/132078553/Musicoalition-UX-Case-Study",
    },
    {
      title: "V-Pal",
      description: "E-Commerce Experience Design",
      imgUrl: caseStudy2,
      SrcUrl: "https://www.behance.net/gallery/132864351/V-Pal-UX-Case-Study",
    },
    {
      title: "Lifeboat",
      description: "Crisis Support Platform",
      imgUrl: caseStudy3,
      SrcUrl:
        "https://www.behance.net/gallery/132070217/Lifeboat-UX-Case-Study",
    },
  ];

  const webDev = [
    {
      title: "Associated Bank Website",
      description: "Assisted Development at Associated Bank",
      imgUrl: webDev4,
      SrcUrl: "https://www.associatedbank.com",
    },
    {
      title: "Daiohs First Choice Services",
      description: "Assisted Development at McDill Design",
      imgUrl: webDev5,
      SrcUrl: "https://firstchoiceservices.com",
    },
    {
      title: "Rock, Paper, Scissors",
      description: "JavaScript · HTML · CSS",
      imgUrl: webDev1,
      SrcUrl: "https://cguyton99.github.io/RPS/",
    },
    {
      title: "Weather App",
      description: "React.js",
      imgUrl: webDev2,
      SrcUrl: "https://cguyton99.github.io/weather-app/",
    },
    {
      title: "Netflix Clone",
      description: "React.js",
      imgUrl: webDev3,
      SrcUrl: "https://cguyton99.github.io/Netflix-Clone-ReactJS/",
    },
  ];

  return (
    <section className="project dark-projects" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="projects-title">Projects</h2>
                  <p className="projects-subtitle">
                    A curated selection of design, development, and UX work
                    focused on clean interfaces, thoughtful experiences, and
                    modern engineering.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="web-dev">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center projects-tabs"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="web-dev">Web Dev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="mockups">Mockups</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="case-studies">
                          Case Studies
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="mockups">
                        <Row className="g-4">
                          {mockups.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="case-studies">
                        <p className="tab-helper-text">
                          Click a case study to explore the full design process.
                        </p>
                        <Row>
                          {caseStudies.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="web-dev">
                        <p className="tab-helper-text">
                          Click an application to view the live build or a video
                          demo.
                        </p>
                        <Row className="g-4">
                          <VideoCard
                            title="Milwaukee County Kiosk Concept"
                            description="Developed during i.c.stars |* internship"
                            imgUrl={webDev6}
                            videoUrl= {"https://www.youtube.com/embed/QqJJt0RpYAQ?si=o7L6H_cJfkJHzlBo"}
                          />
                          {webDev.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="decorative background"
      />
    </section>
  );
};
