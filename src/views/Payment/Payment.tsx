import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import QRPayment from "../../assets/Payment/QR payment.jpg";

const Payment = () => {
  const [buttonText, setButtonText] = useState("Card payment Coming Soon");
  const [total] = useState(100); // Assuming total is dynamic, hardcoded here

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setButtonText("Processing Payment...");
    setTimeout(() => {
      setButtonText("Payment completed.");
    }, 3000);
  };

  return (
    <Container className="py-5">
      <Row style={{ marginTop: "80px" }}>
        {/* Card Payment Section */}
        <Col
          lg={6}
          md={6}
          sm={12}
          className="p-4"
          style={{
            padding: "50px 25px 20px 25px",
            marginBottom: "20px",
          }}
        >
          <div className="position-relative h-100">
            <h1
              className="mb-4 text-center"
              style={{ color: "#76aaf5", textDecoration: "underline" }}
            >
              Card Payment
            </h1>
            <img
              className="img-fluid mb-4"
              src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
              alt="Credit Card Mockup"
              style={{ maxWidth: "100%" }} // Ensure responsive image size
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

        {/* QR Payment Section */}
        <Col lg={6} md={6} sm={12} className="p-4 rounded-3">
          <div className="position-relative h-100" style={{ borderRadius: "5px" }}>
            <h1
              className="mb-4 text-center"
              style={{ color: "#76aaf5", textDecoration: "underline" }}
            >
              QR Payment
            </h1>
            <img
              className="img-fluid mb-4"
              src={QRPayment}
              alt="QR Payment"
              style={{ maxWidth: "100%" }} // Ensure responsive image size
            />
          </div>
        </Col>
      </Row>

      {/* Additional styles for smaller screens */}
      
    </Container>
  );
};

export default Payment;
