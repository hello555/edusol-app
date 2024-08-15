import { Fragment } from "react";
import "../components/Subscribe.css";
import { useSubscribeForm } from "../utils/subscribeUtils";

const Subscribe: React.FC = () => {
  const { email, setEmail, error, handleSubmit } = useSubscribeForm();

  return (
    <Fragment>
      <section>
        <div className="container-fluid subscribe-container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="subscribe-content text-center">
                <h2 className="subcribe-h2">Subscribe Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group row align-items-center">
                    <label
                      htmlFor="emailInput"
                      className="col-sm-3 col-form-label subscribe-label"
                    >
                      Email address
                    </label>
                    <div className="col-sm-6 subscribe-email-form">
                      <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {error && <p className="text-danger">{error}</p>}
                    </div>
                    <div className="col-sm-3">
                      <button
                        type="submit"
                        className="btn btn-outline-light subscribe-button"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Subscribe;
