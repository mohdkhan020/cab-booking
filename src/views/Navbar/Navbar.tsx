import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Navlogo1 from "../../assets/navlogo.webp";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler && navbarToggler.classList.contains("show")) {
      navbarToggler.classList.remove("show");
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{
            backgroundColor: "#183650",
            position: "fixed",
            width: "100%",
            zIndex: "999",
          }}
        >
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
              <img className="cabLogo" src={Navlogo1} alt="Logo" />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                style={{
                  backgroundColor: "white",
                  border: "9px solid white",
                  borderRadius: "8px",
                  padding: "12px",
                }}
              ></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-link home-active"
                        : "nav-link home-active"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/tour"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    Tour
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/payment"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    Payment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
