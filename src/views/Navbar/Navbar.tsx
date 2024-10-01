// import Navlogo from "../../assets/navLOgo.png";
// import Navlogo1 from "../../assets/navlogo.png";
// import logo from "../../assets/cabLogo (1).png";
// import "../../scss/style.css";

// const Navbar = () => {
//   return (
//     <>
//         <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
//           <div className="container-fluid">
//               <a className="navbar-brand" href="#">
//             <div className="d-flex justify-content-center align-items-center">

//                 {/* <img className="cabLogo" src={Navlogo} alt="" /> */}
//                 <img className="cabLogo" src={Navlogo1} alt="" />
//                 {/* <img className="cabLogo" width='100px' height='100px' src={logo} alt="" /> */}

//                 {/* <h3 className="ms-3 text-white">
//                 <span  style={{color:'#ffb606'}}>K</span>ashif <span style={{color:'#ffb606'}}>C</span>ab
//                 <br />
//                 <span><h5>Book your ride</h5></span>
//                 </h3> */}
//               </div>
//               </a>

//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//             <div
//               className="collapse d-flex justify-content-end  "
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav mb-2 mb-lg-0 ">
//                 <li className="nav-item">
//                     {/* <h3 style={{color:'#ffb606'}}> */}
//                   <a className="nav-link active " aria-current="page" href="#"  style={{color:'#ffb606'}}>

//                     Home
//                   </a>
//                     {/* </h3> */}
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-white" href="#">
//                     About Us
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link  text-white"
//                     href="#"
//                     aria-disabled="true"
//                   >
//                     Tours
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item">
//                   <a
//                     className="nav-link disabled text-white"
//                     href="#"
//                     aria-disabled="true"
//                   >
//                     Payments
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item">
//                   <a
//                     className="nav-link text-white"
//                     href="#"
//                     aria-disabled="true"
//                   >
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import Navlogo1 from "../../assets/navlogo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#183650",position:'fixed',width:"100%",zIndex:'999' }}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <img
            className="cabLogo"
            style={{ height: "50px" }}
            src={Navlogo1}
            alt=""
          />
        </a>

        {/* Hamburger Menu for small screens */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" style={{ color: "#ffb606" }}>
                Home
              </NavLink>
            </li>
            <NavLink to="/about-us" className="nav-link  text-white">
              <li className="nav-item">About Us</li>
            </NavLink>
            <NavLink to="/tour" className="nav-link  text-white">
              <li className="nav-item">Tour</li>
            </NavLink>
            <NavLink to="/payment" className="nav-link  text-white">
              <li className="nav-item">Payment</li>
            </NavLink>
            <NavLink to="/contact-us" className="nav-link  text-white">
              <li className="nav-item">Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
