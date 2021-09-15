import React from "react";
import RightNavBar from "../components/RightNavBar";

const HomeLoan = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Home Loan</h2>
                <ul class="bread-list">
                  <li>
                    <a href="/">
                      Home<i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="/home-loan.html">Home Loan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="about section" style={{paddingTop: "70px"}}>
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-xs-9">
              <div class="about-content">
                <h3>
                  Home <span>Loan</span>
                </h3>
                <div class="text">
                  <p>
                    Our Home Loans open the door to your dream home. We ensure
                    that we give you unmatched quality service and transparency
                    right through the loan procedure and a handholding
                    experience that remains with you till the time you realize
                    your dream home.
                  </p>
                  <img src="/assets/img/home.jpg" alt="Home Loan" /> <br />
                  <br />
                  <h4>Home loan can be provided for below stated purpose:</h4>
                  <br />
                  <p>
                    <b>Loan for Construction:</b> This facility is to provide
                    financial assistance for construction of residential House
                    within the approved location limit as per the estimate from
                    registered engineers.
                  </p>
                  <p>
                    <b>Loan for Purchase of House:</b> This facility is to
                    provide financial assistance for acquisition of new or
                    resale residential House. Property can be ready built/under
                    construction.
                  </p>
                  <p>
                    <b>Loan for Take Over from approved institution:</b> This
                    facility allows the customer to transfer his existing Home
                    Loan from approved institution with facility of top up.
                  </p>
                  <p>
                    <b>Loan Refinance:</b> This facility is to provide financial
                    assistance to substitute/refinance the existing Loans that
                    are taken towards purchase/construction of House within a
                    period of 6 months.
                  </p>
                  <p>
                    <b>Composite Loan scheme:</b> This facility is to provide
                    finance for purchase of plot and construction of residential
                    House thereon within a specific time.
                  </p>
                </div>
              </div>
            </div>
            <RightNavBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLoan;
