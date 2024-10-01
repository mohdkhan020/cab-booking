import { FaPhone, FaClock, FaLongArrowAltRight } from "react-icons/fa";
import KKLogo from "../../assets/navlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Company Intro */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget company-intro-widget">
                <a href="index.html" className="site-logo">
                  <img
                    // src="https://i.ibb.co/vLDyPtM/ak-logo-yellow.png"
                    src={KKLogo}
                    alt="logo"
                  />
                </a>
                <p>
                  Top Corporate Taxi Service in Bareilly - Your reliable partner
                  for professional and affordable transportation solutions. We
                  prioritize safety and punctuality for all your business needs.
                </p>
                <ul className="company-footer-contact-list">
                  <li>
                    <FaPhone /> +91-8791796433
                  </li>
                  <li>
                    <FaClock /> Mon - Sun 8.00 - 18.00
                  </li>
                </ul>
              </div>
            </div>
            {/* Popular Services */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget service-links-widget">
                <h5 className="widget-title">Popular Services</h5>
                <ul className="services-link-list">
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight /> Corporate Cab Booking
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight /> Airport Transfers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight /> Event Transportation
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight /> Long-Distance Travel
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight /> Executive Taxi Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight /> Chauffeur Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Latest News */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget latest-news-widget">
                <h5 className="widget-title">Latest News</h5>
                <ul className="small-post-list">
                  <li>
                    <div className="small-post-item">
                      <a href="#" className="post-date">
                        July 18, 2024
                      </a>
                      <h6 className="small-post-title">
                        <a href="#">New Corporate Cab Service Launched!</a>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <a href="#" className="post-date">
                        August 5, 2024
                      </a>
                      <h6 className="small-post-title">
                        <a href="#">Tips for Hassle-Free Airport Transfers</a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Newsletter */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <h5 className="widget-title">Newsletter</h5>
                <div className="footer-newsletter">
                  <p>
                    Sign Up for our newsletter to receive the latest updates on
                    our services and promotions.
                  </p>
                  <form className="news-letter-form">
                    <input
                      type="email"
                      name="news-email"
                      id="news-email"
                      placeholder="Your email address"
                    />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-sm-left text-center">
              <span className="copy-right-text">
                © {new Date().getFullYear()} Top Corporate Taxi Service. All
                Rights Reserved.
              </span>
            </div>
            <div className="col-md-6 col-sm-6">
              <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
