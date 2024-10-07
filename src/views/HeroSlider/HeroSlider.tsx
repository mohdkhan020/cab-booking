import { Carousel } from "react-bootstrap";
import "./HeroSlider.css"; // Optional for custom styling
import HeroImage from "../../assets/hero.jpg";
import HeroImage1 from "../../assets/herocab2.jpg";
import HeroImage3 from "../../assets/HeroImage.jpg";
import CabDetails from "../CabDetails/CabDetails";
import SignUp from "../BookingForm/BookingForm";
import { NavLink } from "react-router-dom";

const HeroSlider = () => {
  return (
    <div className="hero-slider" >
      <Carousel >
      <Carousel.Item  className="heroImageMargin">
          <img className="d-block w-100" src={HeroImage} alt="First slide" />
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

        <Carousel.Item  className="heroImageMargin">
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

        <Carousel.Item  className="heroImageMargin">
          <img className="d-block w-100" src={HeroImage3} alt="Third slide" />
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
      </Carousel>
      <CabDetails />
      <SignUp />
    </div>
  );
};

export default HeroSlider;
