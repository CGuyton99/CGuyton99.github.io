import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, SrcUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={SrcUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link"
      >
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={imgUrl} alt={title} className="project-image" />
          </div>
          <div className="project-overlay">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};