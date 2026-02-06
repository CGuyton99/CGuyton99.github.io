import { Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";

export const VideoCard = ({ title, description, imgUrl, videoUrl }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div
          className="project-card-link"
          onClick={handleShow}
          style={{ cursor: "pointer" }}
        >
          <div className="project-card">
            <div className="project-image-wrapper">
              <img
                src={imgUrl}
                alt={title}
                className="project-image"
                style={{ width: "100%", display: "block" }} // <-- ensure thumbnail shows
              />
            </div>
            <div className="project-overlay">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </div>
      </Col>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="video-modal">
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};