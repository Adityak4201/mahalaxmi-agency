import React from "react";
import RightNavBar from "../components/RightNavBar";

const AgriLoan = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Agriculture Loan</h2>
                <ul class="bread-list">
                  <li>
                    <a href="/">
                      Home<i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="/agriculture-loan.html">Agriculture Loan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="about section" style={{ paddingTop: "70px" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-xs-9">
              <div class="about-content">
                <h3>
                  Agriculture <span>Loan</span>
                </h3>
                <div class="text">
                  <p>
                    If you are looking for finance to buy your vehicle, you have
                    come to the right place. We offer you hassle-free Vehicle
                    Loans with the best terms for funding at the most attractive
                    rates in India..
                  </p>
                  <br />
                  <h4>Key Features:</h4>
                  <p>
                    - Loans for purchase of Tractors and farming equipments
                    <br />
                    - Quick processing and hassle-free documentation
                    <br />
                    - Convenient and easy repayment options
                    <br />
                    - Enabling ownership opportunities for the Rural-Agri class
                    <br />
                  </p>
                  <img src="/assets/img/agri.jpg" alt="Agriculture" />
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

export default AgriLoan;
