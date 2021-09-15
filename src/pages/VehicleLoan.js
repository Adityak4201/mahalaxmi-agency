import React from "react";

const VehicleLoan = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Vehicle Loan</h2>
                <ul class="bread-list">
                  <li>
                    <a href="/">
                      Home<i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="/vehicle-loan.html">Vehicle Loan</a>
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
                  Vehicle <span>Loan</span>
                </h3>
                <div class="text">
                  <p>
                    If you are looking for finance to buy your vehicle, you have
                    come to the right place. We offer you hassle-free Vehicle
                    Loans with the best terms for funding at the most attractive
                    rates in India..
                  </p>
                  <img src="/assets/img/vehicle.jpg" alt="Vehicle Loan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VehicleLoan;
