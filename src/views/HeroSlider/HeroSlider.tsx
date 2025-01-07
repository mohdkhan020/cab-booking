import { Carousel } from "react-bootstrap";
import HeroImage from "../../assets/hero.webp";
import HeroImage1 from "../../assets/herocab2.webp";
import HeroImage3 from "../../assets/HeroImage.webp";
import CabDetails from "../CabDetails/CabDetails";
import SignUp from "../BookingForm/BookingForm";
import { NavLink } from "react-router-dom";
import SEO from "../../components/SEO";
// import { Helmet } from "react-helmet";
import "./HeroSlider.css";
const HeroSlider = () => {
  return (
    <div className="hero-slider">
      {/* Add SEO for the homepage */}
      <SEO
        title="BroomCab: Best Cab Booking Services Online"
        description="Book your ride easily with BroomCab. Offering affordable, safe, and reliable cab services for city and outstation travel. Your journey, our priority!"
        keywords="bareilly taxi service,cab booking,bareilly cab booking,bareilly taxi booking,affordable rides, outstation travel, city rides, safe cab services,cab ride price,bareilly to nainital cab"
        url="https://www.broomcab.com"
        image="https://www.broomcab.com/assets/hero.webp"
      />
      <Carousel>
        <Carousel.Item className="heroImageMargin">
          <img className="d-block w-100" src={HeroImage} alt="First slide" />
          <Carousel.Caption className="custom-caption-left">
            <div className="">
              <NavLink to="/sign-up">
                <button className="btn text-dark bg-white">Book Now</button>
              </NavLink>
              <NavLink to="/tour">
                <button
                  className="btn text-white  ms-3"
                  style={{ backgroundColor: "#007fff" }}
                >
                  Services
                </button>
              </NavLink>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="heroImageMargin">
          <img className="d-block w-100" src={HeroImage1} alt="Second slide" />
          <Carousel.Caption className="custom-caption-left">
            {/* <h3>
              Your ride Anytime,
              <br />
              <span>Anywhere</span>
            </h3> */}
            <div className="">
              <NavLink to="/sign-up">
                <button className="btn text-dark bg-white">Book Now</button>
              </NavLink>
              <NavLink to="/tour">
                <button
                  className="btn text-white  ms-3"
                  style={{ backgroundColor: "#007fff" }}
                >
                  Services
                </button>
              </NavLink>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="heroImageMargin">
          <img className="d-block w-100" src={HeroImage3} alt="Third slide" />
          <Carousel.Caption className="custom-caption-left">
            <div className="">
              <NavLink to="/sign-up">
                <button className="btn text-dark bg-white">Book Now</button>
              </NavLink>
              <NavLink to="/tour">
                <button
                  className="btn text-white  ms-3"
                  style={{ backgroundColor: "#007fff" }}
                >
                  Services
                </button>
              </NavLink>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <a
        href="https://wa.me/+918791796433"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp-pulse"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      {/* Call Button */}
      <a href="tel:+918791796433" className="btn-call-pulse">
        <i className="fas fa-phone-alt"></i>
      </a>

      <CabDetails />
      <SignUp />
    </div>
  );
};

export default HeroSlider;
