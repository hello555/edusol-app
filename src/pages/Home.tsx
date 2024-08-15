import { Fragment } from "react";

import LeftImage from "../components/img/OurTeam1.jpg";
import RightImage from "../components/img/OurTeam2.jpg";

import "../components/Home.css";

function Home() {
  return (
    <Fragment>
      <section className="container-fluid team-section">
        <div className="row align-items-center">
          <div className="col">
            <div className="image-container">
              <img src={LeftImage} alt="Team Member 1" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 text-center our-team">
            <div className="team-content">
              <h1 className="team-h1">OUR TEAM</h1>
              <p className="our-team-desc">
                We are a collaborative network of passionate and experienced
                educators who provide support to teachers and students. We
                customize instructional materials and professional learning
                opportunities with learners at the center of every detail.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <img src={RightImage} alt="Team Member 2" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <h2>ABOUT US</h2>
        <h3>The Full Story</h3>
        <p>
          One privilege of being an educator is you become part of a community
          of practice where you share a common passion with colleagues and work
          together toward continuous improvement. This has been the root of our
          work, and we want to continue extending this community to other
          educators.
        </p>
      </section>
      <section className="empowering">
        <h2>EMPOWERING DIVERSE EDUCATORS</h2>
        <p>
          Our work is deeply rooted in the lives and experiences of diverse
          learners and educators, and we strongly believe in inclusivity and
          equitable practices in education. Because of this, it is our network
          policy to support and seek Minority and Women-Owned Business
          Enterprises (M/WBE) to become our partners and collaborators. We
          actively research M/WBE certified businesses in an effort to have them
          participate in upcoming projects. We also support projects and
          organizations that promote M/WBE certified businesses.
        </p>
      </section>
    </Fragment>
  );
}

export default Home;
