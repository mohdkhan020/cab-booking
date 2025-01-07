import Airport from "../../assets/tour/airport tour.webp";
import OutStation from "../../assets/tour/outstation.webp";
import City from "../../assets/tour/city tour.webp";
import IndiaGate from "../../assets/tour/IndiaGate.webp";
import IndiaGate1 from "../../assets/tour/IndiaGate1.webp";
import TajMahal from "../../assets/tour/TajMahal.webp";
import CharDham from "../../assets/tour/CharDham.webp";
import Ayodhya from "../../assets/tour/Ayodhya.webp";
import LalQila from "../../assets/tour/LalQila.webp";
import GoaBeach from "../../assets/tour/GoaBeach.webp";
import Lucknowcity from "../../assets/tour/Lucknowcity.webp";
import Vrindavan from "../../assets/tour/Vrindavan.webp";
import TajMahalIcon from "../../assets/Icon/taj-mahal.webp";
import CharDhamIcon from "../../assets/Icon/char-dham-icon.webp";
import VrindavanIcon from "../../assets/Icon/Vrindavan-icon.webp";
import LalQilaIcon from "../../assets/Icon/lalqila-icon.webp";
import "../CabDetails/Cabdetails.css";
import "./Tour.css";
import "../CabDetails/Cabdetails.css"
import { NavLink } from "react-router-dom";

const Tour = () => {
  return (
    <>
      {/* Tourist Place  */}

      {/* <section className="heroTour" aria-label="Welcome to the India">
        <div
          className="bg-img"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499241142330-28701ea87ff4?ixlib=rb-0.3.5&s=6ba16ac230fa3bd6e521e92e1b18bce4&auto=format&fit=crop&w=1349&q=80')",
          }}
        />
        <div className="hero-content">
          <h1>Welcome to the India!</h1>
          <p>Cab booking in Bareilly at the lowest price</p>
          <NavLink to="/sign-up">
            <button className="btn btn-primary">Bookings</button>
          </NavLink>
        </div>
      </section> */}
        <section>
      <div className="container" style={{paddingTop: "110px"}}>

          <div className="text-center mb-5" >
            <h1 className="tour display-5 fw-bold" >Explore Our Cab Tours</h1>
            <p className="tour">
              Discover the best routes and tour packages we offer to make your
              travel seamless and enjoyable.
            </p>
          </div>

          <div className="row">
            {/* Tour 1 */}
            <div className="col-lg-4 mb-4">
              <div className="card shadow-sm">
                <img src={City} className="card-img-top" alt="City Tour" />
                <div className="card-body">
                  <h5 className="fw-bold card-title">City Tour</h5>
                  <p className="tour card-text">
                    {/* Experience the city like never before with our all-day city tour, visiting the most iconic landmarks. */}
                    Discover the city's iconic landmarks with our all-day tour!
                  </p>

                  <NavLink to="/sign-up">
                    <button className="btn btn-primary">Book Now</button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="col-lg-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={Airport}
                  className="card-img-top"
                  alt="Airport Transfers"
                />
                <div className="card-body">
                  <h5 className="fw-bold card-title">Airport Transfers</h5>
                  <p className="tour card-text">
                    Need a reliable ride to the airport? Book our stress-free
                    airport transfer service.
                  </p>
                  <NavLink to="/sign-up">
                    <button className="btn btn-primary">Book Now</button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Tour 3 */}
            <div className="col-lg-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={OutStation}
                  className="card-img-top"
                  alt="Outstation Trips"
                />
                <div className="card-body">
                  <h5 className="fw-bold card-title">Outstation Trips</h5>
                  <p className="tour card-text">
                    Planning an outstation trip? We provide comfortable rides
                    for long-distance journeys.
                  </p>
                  <NavLink to="/sign-up">
                    <button className="btn btn-primary">Book Now</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          </div>
       
        </section>
        <section id="tours" aria-labelledby="tours-title">
      <div className="container">

          <h2 id="tours-title" className="title">
            Some of our tours
          </h2>
          <p className="tour">
            Explore exciting travel destinations with our tailored tour packages
            designed for unforgettable experiences.
          </p>
          <hr />
          <ul className="grid">
            <li
              className="small"
              style={{
                backgroundImage: `url(${Vrindavan})`,
              }}
            />
            <li
              className="large"
              style={{
                backgroundImage: `url(${TajMahal})`,
              }}
            />
            <li
              className="large"
              style={{
                backgroundImage: `url(${Ayodhya})`,
              }}
            />
            <li
              className="small"
              style={{
                backgroundImage: `url(${CharDham})`,
              }}
            />
          </ul>
       
       </div>
        </section>

        <section id="packages" aria-labelledby="packages-title">
      <div className="container">

          <h2 id="packages-title" className="title">
            Tour Packages
          </h2>
          <p className="cab-description">
            Explore India with our exclusive tour packages! Discover Agra's Taj
            Mahal, Delhi's majestic Red Fort, the sacred Char Dham Yatra, and
            Nainital's serene lakes. Enjoy customized itineraries, comfortable
            accommodations, and memorable experiences. Book now for an
            unforgettable journey blending heritage, spirituality, and natural
            beauty at unbeatable prices. Your adventure awaits!
          </p>
          <hr />
          <ul className="grid">
            <li
              style={{
                backgroundImage: `url(${TajMahal})`,
              }}
            >
              <img
                src={TajMahalIcon}
                alt="Taj Mahal Icon"
                style={{ width: "50px", height: "50px" }}
              />
              <h3 style={{ color: "#0069c7" }}>Discover Agra</h3>
              <p className="historicalPlace">
                Experience the timeless beauty of the Taj Mahal, a UNESCO World
                Heritage Site and symbol of love and architectural brilliance.
              </p>
            </li>
            <li
              style={{
                backgroundImage: `url(${CharDham})`,
              }}
            >
              <img
                src={CharDhamIcon}
                alt="CharDhamIcon Icon"
                style={{ width: "75px", height: "55px" }}
              />
              <h3 style={{ color: "#0069c7" }}>Spiritual Journey</h3>
              <p className="historicalPlace">
                Embark on a divine tour of Char Dham, exploring sacred temples
                nestled in serene Himalayan landscapes.
              </p>
            </li>
            <li
              style={{
                backgroundImage: `url(${IndiaGate1})`,
              }}
            >
              <img
                src={LalQilaIcon}
                alt="LalQilaIcon Icon"
                style={{ width: "55px", height: "60px" }}
              />
              <h3 style={{ color: "#0069c7", marginTop: "8px" }}>
                Historic Delhi
              </h3>
              <p className="historicalPlace">
                Walk through history at the Red Fort, an iconic landmark that
                showcases India's rich Mughal heritage.
              </p>
            </li>
            <li
              style={{
                backgroundImage: `url(${Vrindavan})`,
              }}
            >
              <img
                src={VrindavanIcon}
                alt="Vrindavan Icon"
                style={{ width: "65px", height: "65px" }}
              />
              <h3 style={{ color: "#0069c7" }}>Enchanting Vrindavan</h3>
              <p className="historicalPlace">
                Immerse yourself in the spiritual charm of Vrindavan, the land
                of Lord Krishna, known for its vibrant temples and festivals.
              </p>
            </li>
          </ul>
          </div>
        </section>

        <section id="reviews" aria-labelledby="reviews-title">
      <div className="container">

          <h2 id="reviews-title" className="title">
            Here's what people had to say:
          </h2>
          <hr />
          <blockquote>
            <p className="tour">
              "The experience was fantastic! The drivers were professional and
              the journey was smooth."
            </p>
            <footer>- sanjaykumar123</footer>
          </blockquote>
          <blockquote>
            <p className="tour">
              "Loved the city tour! It was well-organized and covered all the
              major attractions."
            </p>
            <footer>- Sweetheart68</footer>
          </blockquote>
          <blockquote>
            <p className="tour">
              "The boat ride was so relaxing. Highly recommend it for anyone
              visiting Chilika lake!"
            </p>
            <footer>- Mohan H</footer>
          </blockquote>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <h4 className="tour fw-bold">Why Choose Us?</h4>
              <p className="cab-description">
                Whether you're touring the city, heading to the airport, or
                embarking on a long-distance journey, we guarantee a safe and
                comfortable ride with experienced drivers and well-maintained
                vehicles. Additionally, we offer a variety of services tailored
                to your needs, ensuring a secure and memorable journey every
                time.
              </p>
            </div>
          </div>
          </div> 
        </section>
 </>
);
};

export default Tour;
