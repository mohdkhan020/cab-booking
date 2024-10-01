import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contactus() {
  return (
    <Container className="py-5">
      <Row style={{marginTop:'80px'}}>
        <Col lg={6} >
          <div className="position-relative h-100">
            <img
              src="https://pagedone.io/asset/uploads/1696488602.png"
              alt="ContactUs"
              className="img-fluid w-100 h-100 rounded-3"
            />
            <h1 className="position-absolute top-0 start-0 mt-4 ms-4 text-white display-4">Contact Us</h1>
            <div className="position-absolute bottom-0 w-100 p-4">
              <div className="bg-white rounded-3 p-4 shadow">
                <a href="tel:470-601-1911" className="d-flex align-items-center mb-3 text-decoration-none">
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-3"
                  >
                    {/* SVG Path */}
                  </svg>
                  <h5 className="mb-0">+91-8791796433</h5>
                </a>
                <a href="mailto:example@domain.com" className="d-flex align-items-center mb-3 text-decoration-none">
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-3"
                  >
                    {/* SVG Path */}
                  </svg>
                  <h5 className="mb-0">kashifkhan38374672@gmail.com</h5>
                </a>
                <a href="https://maps.google.com" className="d-flex align-items-center text-decoration-none">
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-4"
                  >
                    {/* SVG Path */}
                  </svg>
                  <h5 className="mb-0">Almighty school Vasant vihar colony, Bareilly, Uttar Pradesh(243122) </h5>
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={6} className="p-4  rounded-3" style={{backgroundColor:'#e9ecef'}}>
          <h2 className="text-primary mb-4">Send Us A Message</h2>
          <Form action="https://fabform.io/f/xxxxx" method="post">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                className="py-2"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                className="py-2"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                placeholder="Phone"
                className="py-2"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preferred method of communication</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  name="contactMethod"
                  id="contactEmail"
                  label="Email"
                  className="d-inline-block me-3"
                />
                <Form.Check
                  type="radio"
                  name="contactMethod"
                  id="contactPhone"
                  label="Phone"
                  className="d-inline-block"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                className="py-2"
              />
            </Form.Group>
            <Button type="submit" className="w-100 py-2" variant="primary">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactus;
