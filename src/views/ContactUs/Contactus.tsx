
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com"; // For Email sending
import './../../index.css'

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number should be 10 digits")
    .required("Phone is required"),
  message: Yup.string().required("Message is required"),
});

function Contactus() {
  const sendEmail = (values: FormValues) => {
    const templateParams = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    emailjs
      .send(
        "service_7hqfok8",
        "template_60lyoos",
        templateParams,
        "WpChob54G30-Zr62W"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };

  const sendWhatsApp = (values: FormValues) => {
    const { name, email, phone, message } = values;
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=918791796433&text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <Container className="py-5">
      <Row style={{ marginTop: "80px" }}>
      <Col lg={6} md={12} sm={12} xs={12}>
          <div className="position-relative h-100">
            <img
              src="https://pagedone.io/asset/uploads/1696488602.png"
              alt="ContactUs"
              className="img-fluid w-100 h-100 rounded-3"
            />
            <h1 className=" position-absolute top-0 start-0 mt-4 mb-5 ms-4 text-white display-4">
              Contact Us
            </h1>
            <div
              className=" position-absolute bottom-0 w-100 p-4"
              style={{ height: "70%" }}
            >
              <div className="bg-white rounded-3 p-4 shadow">
               <div>
                 <a
                  href="tel:+91-8791796433"
                  className="d-flex align-items-center  text-decoration-none"
                >
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
                <a
                  href="kashifkhan38374672@gmail.com"
                  className="d-flex align-items-center mb-3 text-decoration-none"
                >
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
                <a
                  href="https://maps.google.com"
                  className="d-flex align-items-center text-decoration-none"
                >
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-4"
                  >
                    {/* SVG Path */}
                  </svg>
                  <h5 className="mb-0">
                    Almighty school Vasant vihar colony, Bareilly, Uttar
                    Pradesh(243122){" "}
                  </h5>
                </a>
               </div>
              </div>
            </div>
          </div>
        </Col>
        <Col
          lg={6} md={12} sm={12} xs={12}
          className="p-4 rounded-3"
          style={{ backgroundColor: "#e9ecef" }}
        >
          <div>
            <h2 className="text-primary mb-4 ">Send Us A Message</h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => sendEmail(values)}
            >
              {({ isValid }) => (
                <FormikForm>
                  <Form.Group className="mb-3">
                    <Field
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="py-2 form-control "
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="py-2 form-control "
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Field
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      className="py-2 form-control "
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Field
                      name="message"
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                      className="py-2 form-control "
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                 <div>
                 <Button
                    type="submit"
                    className=" py-2"
                    variant="primary"
                    disabled={!isValid}
                  >
                    Send Email
                  </Button>
                 </div>

                  <div className="mt-3">
                  <Button
                    type="button"
                    onClick={() => sendWhatsApp(initialValues)}
                    className=" py-2"
                    variant="success"
                  >
                    Send via WhatsApp
                  </Button>
                  </div>
                </FormikForm>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactus;
