import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Consultation --> */}
      <section class="consultation">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-xs-12">
              <div class="con-head">
                <div class="consult-title">
                  <h2 style={{ marginBottom: "10px" }}>
                    Send Us <span>Query</span>
                  </h2>
                </div>
                <div class="alert alert-danger" id="error"></div>
                <div class="alert alert-success" id="success"></div>
                <form name="contact" id="queryForm">
                  <div class="row">
                    <div class="col-sm-6">
                      <select name="subject" id="subject" class="form-control">
                        <option value="Home Loan" selected>
                          Home Loan
                        </option>
                        <option value="Loan Against Property">
                          Loan Against Property
                        </option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Vehicle Loan">Vehicle Loan</option>
                        <option value="Gold Loan">Gold Loan</option>
                        <option value="Education Loan">Education Loan</option>
                        <option value="Agriculture Loan">
                          Agriculture Loan
                        </option>
                        <option value="Comercial Property Loan">
                          Comercial Property Loan
                        </option>
                        <option value="">----------------</option>
                        <option value="Call me back">Call me back</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Suggestion">Suggestion</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        value=""
                        placeholder="Enter your name"
                        style={{ margin: "2px 0px" }}
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control"
                        name="city"
                        id="city"
                        value=""
                        placeholder="Enter your city"
                        style={{ margin: "2px 0px" }}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control"
                        name="mobile"
                        id="mobile"
                        value=""
                        placeholder="Enter your mobile no."
                        style={{ margin: "2px 0px" }}
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        value=""
                        placeholder="Enter your email id"
                        style={{ margin: "2px 0px" }}
                      />
                    </div>
                  </div>
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    value=""
                    placeholder="Enter your feedback / suggession"
                    style={{
                      margin: "2px 0px",
                      height: "120px",
                      resize: "none",
                    }}
                  ></textarea>
                  <input
                    class="btn btn-danger form-submit-button"
                    type="submit"
                    name="submit"
                    id="submit"
                    value="Get a Quote"
                  />
                  <br />
                  <br />
                </form>
              </div>
            </div>
            <div class="col-md-5 col-sm-5 col-xs-12">
              <div class="consultation-image">
                <img src="/assets/img/query.jpg" alt="Query" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Consultation -->
    <!-- Clients Logo --> */}
      <div class="clients" style={{ backgroundColor: "#fff" }}>
        <div class="container">
          <div class="row">
            <div
              class="col-md-12 col-sm-12 col-xs-12"
              style={{ padding: "30px" }}
            >
              <div class="owl-carousel clients-slider">
                <div class="single-clients">
                  <img src="/assets/img/client/1.jpg" alt="Client1" />
                </div>
                <div class="single-clients">
                  <img src="/assets/img/client/2.jpg" alt="Client2" />
                </div>
                <div class="single-clients">
                  <img src="/assets/img/client/3.jpg" alt="Client3" />
                </div>
                <div class="single-clients">
                  <img src="/assets/img/client/4.jpg" alt="Client4" />
                </div>
                <div class="single-clients">
                  <img src="/assets/img/client/5.jpg" alt="Client5" />
                </div>
                <div class="single-clients">
                  <img src="/assets/img/client/6.jpg" alt="Client6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Clients Logo --> */}

      {/* <!-- Footer Area --> */}
      <footer class="footer">
        {/* <!-- Copyright --> */}
        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="copyright-content">
                  <p>
                    <i class="fa fa-copyright"></i>2014-2021 | Mahalaxmi
                    Financial Services All Rights Reserved.
                  </p>
                </div>
                <div class="design-credits">
                  <a href="/credits.html">Designed By: UnRuffled Feathers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Copyright --> */}
      </footer>
      {/* <!-- End Footer Area --> */}
    </>
  );
};

export default Footer;
