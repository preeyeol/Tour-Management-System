// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="bg-slate-100 shadow-md">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4">
//         {/* Navigation Bar */}
//         <div className="hidden md:flex items-center bg-white w-[903px] h-[84px] p-[30px] gap-[10px] rounded-lg">
//           <div className="flex items-center w-[843px] h-[24px] gap-[32px] text-lightgray">
//             <Link
//               to="/home"
//               className=" hover:text-green-700 w-[53px] h-[24px] font-medium text-center text-base"
//             >
//               HOME
//             </Link>
//             <Link
//               to="/about"
//               className=" hover:text-green-700 w-[152px] h-[24px]  font-medium text-center"
//             >
//               ABOUT
//             </Link>
//             <Link
//               to="/services"
//               className=" hover:text-green-700 w-[114px] h-[24px] font-medium text-center"
//             >
//               SERVICES
//             </Link>
//             <Link
//               to="/contact"
//               className=" hover:text-green-700 w-[133px] h-[24px] font-medium text-center"
//             >
//               CONTACT
//             </Link>
//             <Link
//               to="/login"
//               className="flex items-center justify-between hover:text-green-700 w-[145px] h-[24px] font-medium text-center"
//             >
//               <span className="text-[16px]"> LOGIN</span>
//             </Link>

//             <Link
//               to="/signup"
//               className=" hover:text-green-700 w-[73px] h-[24px] font-medium text-center"
//             >
//               SIGNUP
//             </Link>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <button className="border border-gray-300 w-[162px] h-[59px] px-6 py-2 rounded-md text-gray-700 hover:shadow-sm flex items-center justify-between">
//             <span className="text-[16px] font-medium ml-4">ENGLISH</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop Navigation */}
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                SIGNUP
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
