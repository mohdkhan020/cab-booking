import "./Cabdetails.css";
import Innova from "../../assets/Innova.webp";
import Innova1 from "../../assets/Innova1.webp";

const CabDetails = () => {
  return (
    <>
      <section style={{ backgroundColor: "#f7f7f7" }}>
        <div className="cab-booking-section">
          <div className="row  text-center mt-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="cab-info">
                <header>
                  <h1>Welcome to Bareilly Taxi Service</h1>
                  <p className="cab-description">
                    Welcome to BroomCab Bareilly Taxi Service, your trusted
                    partner for safe, affordable, and reliable cab booking
                    services. Whether you need a quick city ride, a hassle-free
                    airport transfer, or a comfortable outstation journey,
                    BroomCab is here to make every trip stress-free. We offer
                    24/7 availability, professional drivers, and well-maintained
                    vehicles to meet your travel needs. Enjoy the convenience of
                    online booking, transparent pricing, and exceptional
                    customer service. Trusted by thousands of happy customers,
                    BroomCab ensures punctual pickups, smooth rides, and a
                    memorable travel experience. From short commutes in Bareilly
                    to long-distance trips, we guarantee your satisfaction at
                    every mile. Our easy-to-use platform and dedicated team make
                    us the preferred choice for cab booking. Experience reliable
                    and affordable rides like never before. Start your journey
                    with BroomCab today—your ultimate solution for city rides,
                    airport transfers, and outstation travel in Bareilly and
                    beyond!
                  </p>
                </header>
                <h2>Why Choose BroomCab for Bareilly Cab Booking?</h2>
                <p className="cab-description">
                  Experience safe, affordable, and reliable cab booking services
                  with BroomCab. Whether you're looking for city rides, airport
                  transfers, or outstation travel, we've got you covered. Our
                  fleet of well-maintained vehicles, including sedans, SUVs, and
                  more, ensures comfort and convenience for all types of
                  journeys. Our professional, friendly drivers are committed to
                  providing a smooth and timely experience. Book your ride with
                  ease through our user-friendly platform and enjoy competitive
                  pricing with no hidden fees. Trust BroomCab for all your
                  transportation needs - your safety and satisfaction are our
                  top priorities.
                </p>
                <h2>Bareilly Taxi Service - Book Your Ride Anytime</h2>
                <p className="cab-description">
                  Searching for the best Bareilly taxi service? Book your
                  Bareilly cab easily with our fast, affordable, and safe online
                  cab booking service. Whether you need a local ride or an
                  outstation taxi, we offer 24/7 Bareilly taxi service for all
                  your travel needs. Enjoy convenient airport transfers, city
                  tours, and more with experienced drivers. Book your Bareilly
                  cab now and experience a hassle-free ride!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image with description */}

        <div className="container">
          <div className="row  text-center mt-5">
            <div className="d-flex col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 align-items-center justify-content-center">
              <img
                className="image"
                src={Innova}
                alt="Bareilly Taxi Service - Innova"
                style={{ maxWidth: "60%", height: "auto", borderRadius: "8px" }}
              />
            </div>
            <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <div className="cab-info" style={{ textAlign: "left" }}>
                <h2>Reliable Cab Service in Bareilly </h2>
                <p className="cab-image-description">
                  Looking for the best cab service in Bareilly? Kashif Cab
                  offers reliable and affordable taxi services for all your
                  travel needs. Whether you need a one-way cab, airport
                  transfer, city tour, or intercity travel, our well-maintained
                  fleet, including Innova, Dzire, Ertiga Etios, Tata Zest, and
                  SUVs, guarantees a comfortable ride. Book Bareilly cab service
                  now for the cheapest fares and professional drivers. Choose
                  Kashif Cab for a smooth, safe, and hassle-free journey across
                  Bareilly and nearby cities. Experience top-rated car rental
                  services with us today!
                </p>
              </div>
            </div>
          </div>

          <div className="row reverse-image  text-center mt-5 mb-5 ">
            <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <div className="cab-info">
                <h2>Top Bareilly Cab Booking Service</h2>
                <p className="cab-image-description">
                  Kashif Cab offers the cheapest and most reliable taxi services
                  in Bareilly, catering to all your travel needs. With a strong
                  commitment to customer satisfaction and a reputation for
                  excellence, we are your trusted choice for transportation
                  solutions. Experience top-notch service and seamless rides
                  with Kashif Cab, your go-to taxi service in Bareilly.
                </p>
              </div>
            </div>
            <div className="d-flex col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 align-items-center justify-content-center">
              <img
                src={Innova1}
                alt="Bareilly Cab Service"
                style={{ maxWidth: "60%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>

        {/* three div */}

        <div className="container">
          <div className="row g-0 text-center mb-5">
            <div className="cab-info-card col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div className="">
                <h3>Top Car Rental Service in Bareilly</h3>
                <p className="cab-description">
                  India's Leading Intercity Car Rentals - Book Outstation &
                  Local AC Cabs with Competitive Rates, Clean Vehicles,
                  Professional Drivers & Transparent Billing.
                </p>
              </div>
            </div>
            <div className="cab-info-card col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div className="">
                <h3>Affordable Cab Hire in Bareilly </h3>
                <p className="cab-description">
                  India's Leading Intercity Car Rental Service | Book Local &
                  Outstation AC Cabs at the Best Rates. Enjoy Clean Cars,
                  Professional Drivers, and Transparent Billing with Bareilly's
                  Cheapest Car Hire.
                </p>
              </div>
            </div>
            <div className="cab-info-card col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div className="">
                <h3>Corporate Taxi Service in Bareilly</h3>
                <p className="cab-description">
                  Kashif Cab offers affordable corporate taxi services for all
                  your business transportation needs. Covering over 8000
                  destinations across 100+ cities, we provide reliable and
                  efficient travel solutions for your company.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* two div */}

        <div className="row g-0 text-center align-content-center mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="text-center p-3">
              <h2>
                Book Bareilly Airport Taxi - Trusted Airport Cab Service in
                Bareilly
              </h2>
              <p className="cab-description">
                Affordable Bareilly Airport Taxi Service with Kashif Cab
                Searching for reliable Bareilly Airport Taxi Service and
                effortless Bareilly Airport Taxi Booking? Look no further than
                Kashif Cab! We specialize in providing the most competitive taxi
                rates for airport pickups and drop-offs in Bareilly. At Kashif
                Cab, we prioritize punctuality and customer satisfaction,
                ensuring our cabs arrive on time every time. Our fleet consists
                of well-maintained vehicles, guaranteeing a comfortable and safe
                journey to and from Bareilly Airport. With our user-friendly
                taxi booking options and professional drivers, we are dedicated
                to offering you a hassle-free airport transportation experience.
                Choose Kashif Cab for your travel needs and enjoy the
                convenience and affordability we provide. Don't wait—book your
                airport taxi with us today and embark on a seamless journey.
                Your adventure starts with Kashif Cab!
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="cab-info">
              <h2>24/7 Customer Support</h2>
              <p className="cab-description">
                We are here to assist you at any time with our dedicated
                customer support team.
              </p>
            </div>

            <div className="cab-info">
              <h2>Why Choose Us?</h2>
              <p className="cab-description">
                Discover the advantages of our service, including affordability,
                reliability, and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CabDetails;
