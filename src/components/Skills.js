import colorSharp from "../assets/img/color-sharp.png";

export const Achievements = () => {
  return (
    <section className="achievement" id="achievements">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="achievement-bx wow fadeInUp">
              <h2>Achievements</h2>
              <p>
                Not just what I know, but what I’ve done.<br />
                Each highlight reflects impact, growth, and real-world results.
              </p>

              <div className="achievement-grid">

                <div className="glass-tile">
                  <h5>Registered Apprenticeship</h5>
                  <p>Completed a U.S. Department of Labor certified software apprenticeship.</p>
                </div>

                <div className="glass-tile">
                  <h5>Bootcamp Graduate</h5>
                  <p>Graduated from Tech Elevator’s immersive software engineering program.</p>
                </div>

                <div className="glass-tile">
                  <h5>UX Certified</h5>
                  <p>Earned the Google UX Design Professional Certification.</p>
                </div>
                <div className="glass-tile">
                  <h5>Internal Platform Adoption</h5>
                  <p>Built a custom platform adopted by 40+ internal users across departments.</p>
                </div>

                <div className="glass-tile">
                  <h5>Client Prototype Delivery</h5>
                  <p>Led a React/Next.js prototype from concept to market-ready delivery.</p>
                </div>

                <div className="glass-tile">
                  <h5>Mentorship Impact</h5>
                  <p>Mentored i.c.stars |* cohorts with a 100% program completion rate.</p>
                </div>
                <div className="glass-tile">
                  <h5>E-Commerce Builds</h5>
                  <p>Built two fully responsive, production-ready e-commerce websites.</p>
                </div>

                <div className="glass-tile">
                  <h5>Legacy Modernization</h5>
                  <p>Refactored and modernized legacy applications using modern frameworks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="decorative background" />
    </section>
  );
};