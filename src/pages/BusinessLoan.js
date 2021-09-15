import React from "react";
import { Link } from "react-router-dom";
import RightNavBar from "../components/RightNavBar";

const BusinessLoan = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Business Loan</h2>
                <ul class="bread-list">
                  <li>
                    <Link to="/home">
                      Home<i class="fa fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li class="active">
                    <a href="/business-loan.html">Business Loan</a>
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
                  Business <span>Loan</span>
                </h3>
                <div class="text">
                  <p>
                    <b>There are 2 types of Business loans:</b>
                    <br />
                    Business Loans: A 3 year term loan for proprietorship,
                    partnership, private limited companies and limited companies
                    based on a sound balance sheet. Business Loans: Working
                    capital funding in rupees as well as foreign currency for
                    proprietorship, partnership, private limited companies and
                    limited companies.
                  </p>
                  <p>
                    <b>Business loans:</b>
                    <br />
                    Business Loans are loans taken by the borrower to start or
                    enhance a business without any collateral. The borrower need
                    not pledge any of his property or asset. There are many
                    banks like HDFC, SBI, Shriram City finance etc. that provide
                    you unsecured business loan in India and of course many
                    financial services too like karvy financial services,
                    cholamandalam financial services, indiabulls financial
                    services etc..
                  </p>
                  <img src="assets/img/business.png" alt="Business" />
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

export default BusinessLoan;
