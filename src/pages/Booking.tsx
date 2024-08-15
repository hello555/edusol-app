import { Fragment } from "react";
import "../components/Booking.css";
import { useBookingForm } from "../utils/formUtils";

function Booking() {
  const { formData, errors, handleChange, handleSubmit } = useBookingForm();

  return (
    <Fragment>
      <section className="contact-us-container">
        <div className="container-fluid">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 contact-text">
              <h2 className="contact-us-h2">Contact Us</h2>
              <a href="mailto:edusolllc@gmail.com">
                <h6>edusolllc@gmail.com</h6>
              </a>
              <h6>+1 (832) 229 4459</h6>
              <p>
                Feel free to reach out to us with any questions, feedback, or
                inquiries you may have. We're here to help!
              </p>
            </div>
            <div className="col-lg-4 contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        What's your name?
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        What's your email?
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    What's on your mind? Let us know.
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={4}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-danger">{errors.message}</p>
                  )}
                </div>
                <button type="submit" className="btn btn-outline-dark">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Booking;
