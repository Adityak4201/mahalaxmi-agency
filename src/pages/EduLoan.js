import React from "react";
import RightNavBar from "../components/RightNavBar";

const EduLoan = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Education Loan</h2>
                <ul class="bread-list">
                  <li>
                    <a href="/">
                      Home<i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="/education-loan.html">Education Loan</a>
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
                  Education <span>Loan</span>
                </h3>
                <div class="text">
                  <p>
                    Education is the most important investment one makes in
                    life. Higher studies and specialization in certain fields
                    call for additional financial support from time to time.{" "}
                    <br />
                    Whether you are planning school education (nursery to
                    standard XII) of your child, pursuing a graduate or
                    post-graduate degree, the Ganpathy finance Education Loans,
                    can help finance your ambitions and goals.
                  </p>
                  <img src="/assets/img/edu.jpg" alt="Education Loan" />
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

export default EduLoan;
