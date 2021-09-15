import React from "react";

const RightNavBar = () => {
  return (
    <div class="col-md-3 col-xs-3">
      <ul class="blog-cat">
        <li>
          <a href="/home-loan.html">Home loan</a>
        </li>
        <li>
          <a href="/personal-loan.html">Personal Loans</a>
        </li>
        <li>
          <a href="/loans-against-property.html">Loans Against Property</a>
        </li>
        <li>
          <a href="/commercial-property-loans.html">
            Commercial Property Loans
          </a>
        </li>
        <li>
          <a href="/business-loan.html">Business Loan</a>
        </li>
        <li>
          <a href="/vehicle-loan.html">Vehicle loan</a>
        </li>
        <li>
          <a href="/gold-loan.html">Gold loan</a>
        </li>
        <li>
          <a href="/agriculture-loan.html">Agriculture Loan</a>
        </li>
        <li class="active">
          <a href="/education-loan.html">Education Loan</a>
        </li>
      </ul>
    </div>
  );
};

export default RightNavBar;
