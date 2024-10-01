// import  { useState } from 'react';
// import './Payment.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Payment = () => {
// const [buttonText, setButtonText] = useState('Card payment Coming Soon'); // Initial button text
// const [total] = useState(100); // Assuming total is dynamic, hardcoded here

// const handleSubmit = (event: { preventDefault: () => void; }) => {
//   event.preventDefault(); // Prevent form submission

//   // Update button text to show processing
//   setButtonText('Processing Payment...');

//   // Simulate payment processing delay
//   setTimeout(() => {
//     // After 3 seconds, update button text to indicate completion
//     setButtonText('Payment completed.');
//   }, 3000);
// };

//   return (
//     <div className="container mt-5">
//       <div className="credit-card-form">
//         <h2 className="text-center mb-4">PAYMENT PORTAL</h2>
// <img
//   className="img-fluid mb-4"
//   src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
//   alt="Credit Card Mockup"
// />
// <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="card-number" className="form-label">Card Number</label>
//     <input
//       type="text"
//       id="card-number"
//       className="form-control"
//       placeholder="Card number"
//       disabled
//     />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="card-holder" className="form-label">Card Holder</label>
//     <input
//       type="text"
//       id="card-holder"
//       className="form-control"
//       placeholder="Card holder's name"
//       disabled
//     />
//   </div>
//   <div className="row">
//     <div className="col-md-6 mb-3">
//       <label htmlFor="expiry-date" className="form-label">Expiry Date</label>
//       <input
//         type="text"
//         id="expiry-date"
//         className="form-control"
//         placeholder="MM/YY"
//         disabled
//       />
//     </div>
//     <div className="col-md-6 mb-3">
//       <label htmlFor="cvv" className="form-label">CVV</label>
//       <input
//         type="text"
//         id="cvv"
//         className="form-control"
//         placeholder="CVV"
//         disabled
//       />
//     </div>
//   </div>
//   <button type="submit" className="btn btn-primary w-100" disabled>
//     {buttonText}
//   </button>
// </form>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import QRPayment from "../../assets/Payment/QR payment.jpg";

const Payment = () => {
  const [buttonText, setButtonText] = useState("Card payment Coming Soon"); // Initial button text
  const [total] = useState(100); // Assuming total is dynamic, hardcoded here

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent form submission

    // Update button text to show processing
    setButtonText("Processing Payment...");

    // Simulate payment processing delay
    setTimeout(() => {
      // After 3 seconds, update button text to indicate completion
      setButtonText("Payment completed.");
    }, 3000);
  };
  return (
    <Container className="py-5">
      <Row style={{marginTop:'80px'}}>
        <Col
          lg={6}
          style={{
            border: "2px solid lightgrey",
            borderRadius: "10px",
            padding: "50px 25px 20px 25px",
            marginBottom:'20px'
          }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid mb-4"
              src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
              alt="Credit Card Mockup"
            />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="card-number" className="form-label">
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="form-control"
                  placeholder="Card number"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="card-holder" className="form-label">
                  Card Holder
                </label>
                <input
                  type="text"
                  id="card-holder"
                  className="form-control"
                  placeholder="Card holder's name"
                  disabled
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="expiry-date" className="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry-date"
                    className="form-control"
                    placeholder="MM/YY"
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="form-control"
                    placeholder="CVV"
                    disabled
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled>
                {buttonText}
              </button>
            </form>
          </div>
        </Col>

        <Col
          lg={6}
          className="p-4  rounded-3"
          style={{
            border: "2px solid lightgrey",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <div className="position-relative h-100" style={{borderRadius:'5px'}}>
            <h2 className="text-primary mb-4 text-center">QR Payment</h2>
            <img
              className="img-fluid mb-4"
              src={QRPayment}
              alt="Credit Card Mockup"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
