import React from 'react';
import Airport from '../../assets/tour/airport tour.jpg'
import OutStation from '../../assets/tour/outstation.jpg'
import City from '../../assets/tour/city tour.jpg'
import './Tour.css'
const Tour = () => {
  return (
    <div className="container py-5" >
      <div className="text-center mb-5"  style={{marginTop:'80px'}}>
        <h1 className="display-5 fw-bold">Explore Our Cab Tours</h1>
        <p className="tour">
          Discover the best routes and tour packages we offer to make your travel seamless and enjoyable.
        </p>
      </div>
      
      <div className="row" >
        {/* Tour 1 */}
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <img
              src={City}
              className="card-img-top"
              alt="City Tour"
            />
            <div className="card-body">
              <h5 className="card-title">City Tour</h5>
              <p className="card-text">
                Experience the city like never before with our all-day city tour, visiting the most iconic landmarks.
              </p>
              <a href="#" className="btn btn-primary">
                Book Now
              </a>
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
              <h5 className="card-title">Airport Transfers</h5>
              <p className="card-text">
                Need a reliable ride to the airport? Book our stress-free airport transfer service.
              </p>
              <a href="#" className="btn btn-primary">
                Book Now
              </a>
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
              <h5 className="card-title">Outstation Trips</h5>
              <p className="card-text">
                Planning an outstation trip? We provide comfortable rides for long-distance journeys.
              </p>
              <a href="#" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h4 className="fw-bold">Why Choose Us?</h4>
          <p className="tour">
            Whether you're touring the city, heading to the airport, or going on a long-distance journey, we guarantee a safe and comfortable ride with experienced drivers and well-maintained vehicles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tour;
