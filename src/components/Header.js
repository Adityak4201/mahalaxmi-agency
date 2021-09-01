import React from 'react'

function Header() {
    return (
        // <!-- Header Area -->
    <header class="header">
      {/* <!-- Topbar --> */}
      <div class="topbar">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="single-top">
                <p><i class="fa fa-bandcamp"></i>Welcome to Mahalaxmi Financial Services</p>
              </div>
            </div>            
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="single-top text-right">
                <p><i class="fa fa-envelope-open"></i>info@mahalaxmifinancialservices.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Topbar -->
      <!-- Middle Header --> */}
      <div class="middle-header">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-12">           
              <div class="logo">
                <a href="/"><h1>Mahalaxmi</h1></a>
              </div>
              <div class="mobile-nav"></div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12">
              <div class="widget-main">
                <div class="single-widget">
                  <i class="fa fa-headphones"></i>
                  <p>Call us anytime</p>
                  <h4>+91 - 9627869103</h4>
                </div>
                <div class="single-widget">
                  <i class="fa fa-clock"></i>
                  <p>Opeening Time</p>
                  <h4>Mon-Sat: 9.00-18.00</h4>
                </div>
                <div class="single-widget button">
                  <a href="/query.html" class="btn">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Middle Header -->
      <!-- Header Inner --> */}
      <div class="main-menu">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <nav class="navbar navbar-default">
                <div class="collapse navbar-collapse">
                  <ul id="nav" class="nav mobile-menu navbar-nav">
                    <li class="current"><a href="/">Home</a></li>                  
                    <li><a href="/about.html">About Us</a></li>
                    <li><a href="#">Services</a>
                      <ul class="dropdown">
                        <li><a href="/home-loan.html">Home loan</a></li>
                        <li><a href="/personal-loan.html">Personal Loans</a></li>
                        <li><a href="/loans-against-property.html">Loans Against Property</a></li>
                        <li><a href="/commercial-property-loans.html">Commercial Property Loans</a></li>
                        <li><a href="/business-loan.html">Business Loan</a></li>
                        <li><a href="/vehicle-loan.html">vehicle Loan</a></li>
                        <li><a href="/agriculture-loan.html">Agriculture Loan</a></li>
                        <li><a href="/education-loan.html">Education Loan</a></li>
                      </ul>
                    </li>
                    <li><a href="/partners.html">OUR PARTNERS</a></li>
                    <li><a href="/gold-loan.html">GOLD LOANS</a></li>
                    <li><a href="/loan-processing.html">LOAN PROCESSING</a></li>
                    <li><a href="/contact.html">Contact Us</a></li>
                    <li><a href="/credits.html">Credits</a></li>
                  </ul>                  
                </div> 
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Header Inner --> */}
    </header>
    // <!-- End Header Area -->
    )
}

export default Header
