import React from "react";
import RightNavBar from "../components/RightNavBar";

const CommPropLoan = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Commercial Property Loans</h2>
                <ul class="bread-list">
                  <li>
                    <a href="/">
                      Home<i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="/commercial-property-loans.html">
                      Commercial Property Loans
                    </a>
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
                  Commercial <span>Property Loans</span>
                </h3>
                <div class="text">
                  <p>
                    Need a loan for commercial property? Whether you are an
                    individual salaried person, business man, doctor, engineer,
                    architect or even a company, and would like to purchase your
                    own commercial property. Here's how Shree Mudra Finance can
                    help you get the best commercial property loan. We are
                    currently partnered with multiple top-notch banks and
                    financial institutions including HDFC Bank, ICICI Bank,
                    Standard Chartered, Tata Capital, India Bulls, Kotak
                    Mahindra, Reliance Commercial Finance & First Blue. Compare
                    their terms and features now!
                  </p>
                  <p>
                    All you need to do is to fill in your precise needs in our
                    easy to use free comparison tool, select from a variety of
                    options such as, is the loan required for: plot purchase,
                    ready property, self- construction, under construction or
                    plot purchase and self construction. Compare interest rates,
                    maximum loan amount, LTV ratios, maximum available tenures
                    etc across various commercial property loan options now!.
                  </p>
                  <img
                    src="/assets/img/commercial.jpg"
                    width="700px"
                    alt="Commerical"
                  />
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

export default CommPropLoan;
