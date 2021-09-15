import React from "react";

const PersonalLoan = () => {
  return (
    <>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="row">
            <div class="bread-inner">
              <div class="col-xs-12">
                <h2>Personal Loan</h2>
                <ul class="bread-list">
                  <li>
                    <a href="/">
                      Home<i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="/personal-loan.html">Personal Loan</a>
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
                  Personal <span>Loan</span>
                </h3>
                <div class="text">
                  <p>
                    Our finance company is the first stop for all your Personal
                    Loan Needs. We are established, safe, secure, quick, and
                    customer service oriented. Personal loan is a short-term
                    loan to assist you with your finances. These loans have
                    become quite popular today and now this is the main way to
                    get financial assistance in the form of a cash advance. The
                    amount of loan can be ranged from Rs.1,00,000 – Rs.500 C.R &
                    from 1 year to 25 tenure years for repaying the loan. We
                    help you in evaluating your loan on the basis of the
                    following parameters.
                  </p>
                  - Compare Interest Rates
                  <br />
                  - Evaluation of various Loan offers
                  <br />
                  - EMIs
                  <br />
                  - Tenure
                  <br />
                  - Eligibility Check
                  <br />
                  - Turnaround time
                  <br />
                  <br />
                  <img src="/assets/img/personal.png" alt="Personal Loan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalLoan;
