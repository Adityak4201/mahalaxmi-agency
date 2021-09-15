import React from "react";
import RightNavBar from "../components/RightNavBar";

const LoanAgnstProp = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Loans Against Property</h2>
                <ul class="bread-list">
                  <li>
                    <a href="/">
                      Home<i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="/business-loan.html">Loans Against Property</a>
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
                  Loans Against <span>Property</span>
                </h3>
                <div class="text">
                  <p>
                    Your property is one of your greatest assets. It also holds
                    the key to make your dreams come true.
                    <b>Mahalaxmi Financial Services</b> Loans against Property
                    gives you the power to use your residential, commercial or
                    alternate property to fund your dreams. So you don't have to
                    wait to turn them into reality. Your property can be a
                    blessing in ways more than one. Unlock the hidden potential
                    of your hard earned property by availing an easy loan
                    against your residential or commercial property.
                    <b>Mahalaxmi Financial Services</b> offers a wide array of
                    Property loans to meet financial expenses pertaining to your
                    business, educational or personal requirement.
                  </p>
                  <img src="/assets/img/loan.jpg" alt="Loan Against Property" />
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

export default LoanAgnstProp;
