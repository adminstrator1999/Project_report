import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer
          className="footer-area"
          style={{
            marginTop: "-120px",
            paddingTop: "30px",
            position: "relative",
            left: "0px",
            bottom: "0px",
            marginBottom: "-150px",
            width: "100%",
          }}
        >
          <div className="container">
            <div className="single-footer-widget">
              <div className="row">
                <div className="col-md-6">
                  <h4>Bog'lanish malumotlari</h4>
                  <div className="footer-address">
                    <p>
                      Address : Farg'ona viloyati Bag'dod tumani Chuvalanchi
                      qishlog'i
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <span style={{ color: "white", display: "block" }}>
                    <a href="tel:+998909254442">Phone : +99890 925 44 42</a>
                  </span>
                  <span style={{ color: "white", display: "block" }}>
                    <a href="tel:+998909122723">Phone : +99890 912 27 23</a>
                  </span>
                  <span style={{ color: "white", display: "block" }}>
                    Email : baxtiyorrasul@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
