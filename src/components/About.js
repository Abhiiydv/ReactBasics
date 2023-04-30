import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-lg-start bg-white my-4 text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none my-3 d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> New York,
                  NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                  567 88
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                  567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
