
import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Navlogo1 from "../../assets/navlogo.png";
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const navbarToggler = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarToggler.classList.contains('show')) {
      navbarToggler.classList.remove('show');
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
            {/* <a className="navbar-brand" href="#"> */}
              <NavLink to="/cab-booking" className="navbar-brand">
                {/* Text */}
              <img
                className="cabLogo"
                src={Navlogo1}
                alt="Logo"
              />
              </NavLink>
            {/* </a> */}

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
                {/* Home link with #ffb606 text and underline */}
                <li className="nav-item">
                  <NavLink
                    to="/cab-booking"
                    className={({ isActive }) =>
                      isActive ? 'nav-link active-link home-active' : 'nav-link home-active'
                    }
                  >
                    Home
                  </NavLink>
                </li>
                {/* Other links with white text but #ffb606 underline when active */}
                <li className="nav-item">
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive ? 'nav-link active-link' : 'nav-link'
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/tour"
                    className={({ isActive }) =>
                      isActive ? 'nav-link active-link' : 'nav-link'
                    }
                  >
                    Tour
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/payment"
                    className={({ isActive }) =>
                      isActive ? 'nav-link active-link' : 'nav-link'
                    }
                  >
                    Payment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive ? 'nav-link active-link' : 'nav-link'
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







// import { useEffect } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import Navlogo1 from "../../assets/navlogo.png";
// import './Navbar.css'

// const Navbar = () => {
//   const location = useLocation(); // Hook to get current route

//   useEffect(() => {
//     // Close the navbar toggle when route changes
//     const navbarToggler = document.querySelector('.navbar-collapse');
//     if (navbarToggler && navbarToggler.classList.contains('show')) {
//       navbarToggler.classList.remove('show'); // Close the menu
//     }

//     // Scroll to the top of the page when route changes
//     window.scrollTo(0, 0);
//   }, [location]); // Runs whenever the route changes

//   return (
//     <>
//       <div>
//         <nav
//           className="navbar navbar-expand-lg navbar-light"
//           style={{
//             backgroundColor: "#183650",
//             position: "fixed",
//             width: "100%",
//             zIndex: "999",
//           }}
//         >
//           <div className="container-fluid">
//             {/* Brand Logo */}
//             <a className="navbar-brand" href="#">
//               <img
//                 className="cabLogo"
//                 src={Navlogo1}
//                 alt="Logo"
//               />
//             </a>

//             {/* Hamburger Menu for small screens */}
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span
//                 className="navbar-toggler-icon"
//                 style={{
//                   backgroundColor: "white",
//                   border: "9px solid white",
//                   borderRadius: "8px",
//                   padding: "12px",
//                 }}
//               ></span>
//             </button>

//             {/* Navbar links */}
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                   <NavLink
//                     to="/cab-booking"
//                     className="nav-link"
//                     style={{ color: "#ffb606" }}
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/about-us" className="nav-link text-white">
//                     About Us
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/tour" className="nav-link text-white">
//                     Tour
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/payment" className="nav-link text-white">
//                     Payment
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/contact-us" className="nav-link text-white">
//                     Contact Us
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default Navbar;
