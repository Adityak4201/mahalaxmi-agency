import React from "react";

const Contact = () => {
  return (
    <>
      <section class="about section" style={{ paddingTop: "70px" }}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <center>
                <h1 style={{ padding: "0px" }}>Contact Us</h1>
              </center>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3" style={{ padding: "5px 10px" }}>
              <center>
                <img src="/assets/img/img.png" alt="Finance" />
              </center>
            </div>
            <div class="col-sm-3" style={{ padding: "5px 10px" }}>
              <div class="row" style={{ margin: "5px" }}>
                <div
                  class="col-sm-12"
                  style={{
                    padding: "15px 10px 0 10px",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                  }}
                >
                  <center>
                    <i
                      class="fa fa-map-marker"
                      style={{ fontSize: "xx-large" }}
                    ></i>
                    <br />
                    <address>
                      <strong>Head Office </strong>
                      <br />
                      SCO-7 F, SCO market, opp. Utkarsh Small Finance Bank,
                      Sector 10, Panchkula, Haryana 134109
                      <br />
                      <br />
                    </address>
                  </center>
                </div>
              </div>
            </div>
            <div class="col-sm-3" style={{ padding: "5px 10px" }}>
              <div class="row" style={{ margin: "5px" }}>
                <div
                  class="col-sm-12"
                  style={{
                    padding: "15px 10px 0 10px",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                  }}
                >
                  <center>
                    <i
                      class="fa fa-map-marker"
                      style={{ fontSize: "xx-large" }}
                    ></i>
                    <br />
                    <address>
                      <strong>Punjab</strong>
                      <br />
                      SCF 44, 3rd Floor, Phase 3B2, Mohali, Punjab (Chandigarh)
                      -160059
                      <br />
                      <br />
                    </address>
                  </center>
                </div>
              </div>
            </div>
            <div class="col-sm-3" style={{ padding: "5px 10px" }}>
              <div class="row" style={{ margin: "5px" }}>
                <div
                  class="col-sm-12"
                  style={{
                    padding: "15px 10px 0 10px",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                  }}
                >
                  <center>
                    <i
                      class="fa fa-map-marker"
                      style={{ fontSize: "xx-large" }}
                    ></i>
                    <br />
                    <address>
                      <strong>Delhi</strong>
                      <br />
                      WZ-3, 1st Floor, Najafgarh Rd, Meenakshi Garden, Tilak
                      Nagar, New Delhi, Delhi 110018
                      <br />
                    </address>
                  </center>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <div class="row"> --> */}
          {/* <!-- <div class="col-sm-3" style={{padding: "5px 10px"}}>
            <div class="row" style={{margin: "5px"}}>
              <div
                class="col-sm-12"
                style="
                  padding: 15px 10px 0 10px;
                  background-color: #fff;
                  border-radius: 6px;
                "
              ></div>
            </div>
          </div> --> */}

          {/* <!-- <div class="col-sm-3" style={{padding: "5px 10px"}}>
            <div class="row" style={{margin: "5px"}}>
              <div
                class="col-sm-12"
                style="
                  padding: 15px 10px 0 10px;
                  background-color: #fff;
                  border-radius: 6px;
                "
              >
                <center>
                  <i class="fa fa-map-marker" style={{fontSize: "xx-large"}}></i
                  ><br />
                  <address>
                    <strong>Kolkata</strong><br />
                    Dynamic House, C 225/223, Sector 16, Kolkata 201301, West
                    Bangal
                  </address>
                </center>
              </div>
            </div>
          </div> -->
        <!-- </div> --> */}
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.9580509936645!2d76.84925806460971!3d30.691456344672837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9367b14732f5%3A0xfd4775db7d0e05eb!2sSCO%20Market%20Sector%2010%2C%20Sector%2010%2C%20Budanpur%2C%20Panchkula%2C%20Haryana%20134117!5e0!3m2!1sen!2sin!4v1631620401060!5m2!1sen!2sin"
        width="100%"
        height="500"
        frameborder="0"
        style={{ border: "0" }}
        allowfullscreen
        title="map"
      />
    </>
  );
};

export default Contact;
