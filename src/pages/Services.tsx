import { Fragment } from "react";
import OurServicesImage from "../components/img/our-services.png";
import CurriculumDesignImage from "../components/img/CurriculumDesignImage.jpg";
import EducationConsultancyImage from "../components/img/EducationConsultancyImage.png";
import DigitalResourcesImage from "../components/img/DigitalResourcesImage.jpg";
import CustomisedProfessionalLearningImage from "../components/img/CustomisedProfessionalLearningImage.jpg";

import "../components/Services.css";

function Services() {
  return (
    <Fragment>
      <section>
        <div className="container-fluid services-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-content text-center">
                <h2 className="services-h2">OUR SERVICES</h2>
                <p className="services-text">
                  EDU Solutions LLC offers educational consulting services that
                  specialize in the area of language acquisition and literacy
                  development in kindergarten to grade 12. With the myriad of
                  needs that exist in education, we offer a customized approach
                  that harness partnerships with clients and involves them in
                  the design of deliverables.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={OurServicesImage}
                alt="Services"
                className="services-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="four-column-section py-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6">
              <img
                src={CurriculumDesignImage}
                alt="Curriculum Design"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-6 d-flex flex-column justify-content-center">
              <h3 className="column-h3">Curriculum Design and Creation</h3>
              <p className="column-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porttitor dapibus augue, sit amet semper sapien
                pretium at. Suspendisse fermentum tortor nec suscipit volutpat.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img
                src={EducationConsultancyImage}
                alt="Education Consultancy"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-6 d-flex flex-column justify-content-center">
              <h3 className="column-h3">Education and Consultancy</h3>
              <p className="column-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porttitor dapibus augue, sit amet semper sapien
                pretium at. Suspendisse fermentum tortor nec suscipit volutpat.
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 d-flex flex-column justify-content-center">
              <h3 className="column-h3">Customized Professional Learning</h3>
              <p className="column-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porttitor dapibus augue, sit amet semper sapien
                pretium at. Suspendisse fermentum tortor nec suscipit volutpat.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img
                src={CustomisedProfessionalLearningImage}
                alt="Customized Professional Learning"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-6 d-flex flex-column justify-content-center">
              <h3 className="column-h3">Digital Resources Creation</h3>
              <p className="column-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porttitor dapibus augue, sit amet semper sapien
                pretium at. Suspendisse fermentum tortor nec suscipit volutpat.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img
                src={DigitalResourcesImage}
                alt="Digital Resources"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Services;
