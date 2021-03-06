import React from "react";
import RightNavBar from "../components/RightNavBar";

const GoldLoan = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Gold Loan</h2>
                <ul class="bread-list">
                  <li>
                    <a href="/">
                      Home<i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="/gold-loan.html">Gold Loan</a>
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
                  Gold <span>Loan</span>
                </h3>
                <div class="text">
                  <p>
                    Pledge your Gold Ornaments or Jewellery and avail the
                    Highest Amount per gram of Gold. Depending on the net weight
                    and purity of the gold, cash will be disbursed quickly.
                    <br />
                    We have various schemes that will suit for your needs.
                    Please visit your nearest branch of Chemmanur Credits to
                    avail Gold Loan.
                    <br />
                    - Interest will be charged @12.00%
                    <br />
                    - Rate of Gold of 22 Carrat as per market rate.
                    <br />
                    - Bank is financing against gold ornaments only.
                    <br />
                    - Valuation charges will be 0.25% of loan amount.
                    <br />
                    - Processing charges will be 0.50% of loan amount.
                    <br />
                    - Loan can be granted @50% of the value of Gold Jewellery as
                    per valuation.
                    <br />
                  </p>
                  <img src="/assets/img/gold.jpg" alt="Gold Loan" />
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

export default GoldLoan;
