import { FaPhone, FaClock, FaLongArrowAltRight } from "react-icons/fa";
import { destinations } from "../../components/Destination";
import QRPayment from "../../assets/Payment/QR payment.webp";
import KKLogo from "../../assets/navlogo.webp";
import "./Footer.css";
import "../Tour/Tour.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleDestinationClick = (pickup: string, drop: string) => {
    navigate("/sign-up", {
      state: { pickupLocation: pickup, dropoffLocation: drop },
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <section>
            <h2 style={{ color: "white", marginBottom: "40px" }}>
              Popular Destinations
            </h2>
            <ul className="destination-list">
              {destinations.map((destination, index) => (
                <li key={index} className="destination-item">
                  <a
                    href={`/cabs/${destination.pickup.toLowerCase()}-to-${destination.drop.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDestinationClick(
                        destination.pickup,
                        destination.drop
                      );
                    }}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                    aria-label={`Book a cab from ${destination.pickup} to ${destination.drop}`}
                  >
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="row">
            {/* Company Intro */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget company-intro-widget">
                <a href="index.html" className="site-logo">
                  <img
                    src={KKLogo}
                    alt="logo"
                  />
                </a>
                <p style={{ fontWeight: 200 }}>
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
                    <a href="#" style={{ fontWeight: 200, color: "white" }}>
                      <FaLongArrowAltRight /> Corporate Cab Booking
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ fontWeight: 200, color: "white" }}>
                      <FaLongArrowAltRight /> Airport Transfers
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ fontWeight: 200, color: "white" }}>
                      <FaLongArrowAltRight /> Event Transportation
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ fontWeight: 200, color: "white" }}>
                      <FaLongArrowAltRight /> Long-Distance Travel
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ fontWeight: 200, color: "white" }}>
                      <FaLongArrowAltRight /> Executive Taxi Services
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ fontWeight: 200, color: "white" }}>
                      <FaLongArrowAltRight /> Char Dham Services
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
                        <a href="#" style={{ fontWeight: 200 }}>
                          New Corporate Cab Service Launched!
                        </a>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <a href="#" className="post-date">
                        August 5, 2024
                      </a>
                      <h6 className="small-post-title">
                        <a href="#" style={{ fontWeight: 200 }}>
                          Tips for Hassle-Free Airport Transfers
                        </a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Newsletter */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <h5 className="widget-title">QR Payment</h5>
                <div className="footer-newsletter">
                  <img
                    className="img-fluid"
                    src={QRPayment}
                    alt="QR Payment"
                    style={{ maxWidth: "40%" }} // Ensure responsive image size
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}

      <div className="footer-bottom">
        <div className="footer">
          <p className="quote">
            © {new Date().getFullYear()}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footeraAchor"
            >
              <span> Top Corporate Taxi Service. All Rights Reserved.</span>
            </a>
          </p>

          <ul>
            <li>
              <a href="#" aria-label="Twitter" className="footeraAchor">
                <i className="fab fa-twitter-square fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook" className="footeraAchor">
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" className="footeraAchor">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
