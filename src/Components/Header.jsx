


// import React, { useState } from 'react';
// import logo from "../assets/removelogo.png";
// import {
//   FaPhone,
//   FaBars,
//   FaTimes,
//   FaUserCircle
// } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Header = () => {
//   const location = useLocation();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [showEmergencyDropdown, setShowEmergencyDropdown] = useState(false);

//   const menuItems = [
//     { label: 'Home', path: '/' },
//     { label: 'About', path: '/about' },
//     { label: 'Doctors', path: '/doctor' },
//     { label: 'Services', path: '/services' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const toggleEmergencyDropdown = () => {
//     setShowEmergencyDropdown(!showEmergencyDropdown);
//   };

//   return (
//     <div className="font-sans">
//       {/* Main Header */}
//       <header className="bg-white shadow-sm py-2 sticky top-0 z-50 border-b border-blue-100">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <img className='w-40 md:w-48' src={logo} alt="SAAS Clinic Logo" />
//           </Link>

//           {/* Emergency Contact - Mobile */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleEmergencyDropdown}
//               className="flex items-center text-[#00A297] font-medium text-sm"
//             >
//               <FaPhone className="mr-1" />
//               <span>Emergency</span>
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             <ul className="flex space-x-8">
//               {menuItems.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     to={item.path}
//                     className={`text-sm font-medium transition-colors pb-2
//                       ${isActive(item.path) ?
//                         'text-[#00A297] border-b-2 border-[#00A297]' :
//                         'text-gray-600 hover:text-[#00A297] hover:border-b-2 hover:border-blue-300'}`}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Emergency Contact - Desktop */}
//             <div className="relative ml-4">
//               <button
//                 className="flex items-center bg-[#00A297] text-white px-4 py-2 rounded-lg hover:bg-[#00A297] transition-colors"
//                 onClick={toggleEmergencyDropdown}
//               >
//                 <FaPhone className="mr-2" />
//                 <span className="text-sm">Emergency</span>
//               </button>

//               {showEmergencyDropdown && (
//                 <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-10">
//                   <div className="p-4">
//                     <p className="text-gray font-semibold">Emergency Helpline</p>
//                     <p className="text-gray-700 mt-2">0755-2556620, 2556669</p>
//                     <p className="text-gray-700">+91 7997732332</p>
//                     <a
//                       href="tel:+917997732332"
//                       className="block mt-3 bg-red-600 text-white text-center px-4 py-2 rounded-lg hover:bg-red-700 text-sm font-medium"
//                     >
//                       Call Now
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray focus:outline-none"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? (
//               <FaTimes className="w-6 h-6" />
//             ) : (
//               <FaBars className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Emergency Dropdown for Mobile */}
//         {showEmergencyDropdown && (
//           <div className="md:hidden bg-white border-t border-blue-100 shadow-md">
//             <div className="max-w-7xl mx-auto px-4 py-3">
//               <div className="flex flex-col items-center">
//                 <p className="text-gray font-semibold mb-2">Emergency Helpline</p>
//                 <p className="text-gray-700 mb-3">+91 7997732332</p>
//                 <a
//                   href="tel:+917997732332"
//                   className="w-full bg-red-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-red-700"
//                 >
//                   Call Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Mobile Navigation Menu */}
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white shadow-lg"
//           >
//             <ul className="flex flex-col divide-y divide-blue-50">
//               {menuItems.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     to={item.path}
//                     className={`block px-6 py-4 font-medium transition-colors
//                       ${isActive(item.path) ?
//                         'text-gray bg-blue-50' :
//                         'text-gray-700 hover:bg-blue-50'}`}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </header>

//       {/* Mobile Bottom Navigation */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-blue-100 z-50">
//         <div className="flex justify-around items-center py-2">
//           {/* Home */}
//           <Link
//             to="/"
//             className="flex flex-col items-center p-2 text-[#00A297]   hover:text-[#00A297] "
//           >
//             <svg
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m0 0h2m-2 0H9m6 0h-1m4-6l2 2m-2-2v6a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 15m-2 0l-1.5 4.493a1 1 0 01-.948.684H5a2 2 0 01-2-2v-6z"
//               />
//             </svg>
//             <span className="text-xs">Home</span>
//           </Link>

//           {/* Doctors */}
//           <Link
//             to="/doctor"
//             className="flex flex-col items-center p-2 text-gray hover:text-[#00A297] "
//           >
//             <svg
//               className="w-5 h-5 mb-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//               />
//             </svg>
//             <span className="text-xs">Doctors</span>
//           </Link>

//           {/* Services */}
//           <Link
//             to="/services"
//             className="flex flex-col items-center p-2 text-gray hover:text-[#00A297] "
//           >
//             <svg
//               className="w-5 h-5 mb-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//               />
//             </svg>
//             <span className="text-xs">Services</span>
//           </Link>

//           {/* Appointment */}
//           <Link
//             to="/appointment"
//             className="flex flex-col items-center p-2 text-gray hover:text-[#00A297] "
//           >
//             <svg
//               className="w-5 h-5 mb-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>
//             <span className="text-xs">Appointment</span>
//           </Link>

//           {/* Call */}
//           <a
//             href="tel:+917997732332"
//             className="flex flex-col items-center p-2 text-[#00A297] hover:text-[#00A297] "
//           >
//             <svg
//               className="w-5 h-5 mb-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//               />
//             </svg>
//             <span className="text-xs">Call Us</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/removelogo.webp";
import {
  FaPhone,
  FaBars,
  FaTimes,
  FaUserCircle
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEmergencyDropdown, setShowEmergencyDropdown] = useState(false);
  const dropdownRef = useRef(null); // Emergency dropdown ref

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'SAAS', path: '/saas' },
    { label: 'Doctors', path: '/doctor' },
    // { label: 'Blog', path: '/blog' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    // { label: 'Login', path: '/login' },

  ];

  const isActive = (path) => location.pathname === path;

  const toggleEmergencyDropdown = () => {
    setShowEmergencyDropdown(!showEmergencyDropdown);
  };

  // 👇 Handle outside click to close emergency dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowEmergencyDropdown(false);
      }
    };

    if (showEmergencyDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmergencyDropdown]);

  return (
    <div className="font-sans">
      <header className="bg-white shadow-sm py-2 sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center"> 
            <img className='w-40 md:w-48' src={logo} alt="SAAS Clinic Logo" />
          </Link>

          {/* Emergency Contact - Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleEmergencyDropdown}
              className="flex items-center text-[#00A297] font-medium text-sm"
            >
              <FaPhone className="mr-1" />
              <span>Emergency</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors pb-2
                      ${isActive(item.path)
                      ? 'text-[#00A297] border-b-2 border-[#00A297]'
                      : 'text-gray-600 hover:text-[#00A297] hover:border-b-2 hover:border-blue-300'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emergency Contact - Desktop */}
            <div className="relative ml-4">
              <button
                className="flex items-center bg-[#00A297] text-white px-4 py-2 rounded-lg hover:bg-[#00A297] transition-colors"
                onClick={toggleEmergencyDropdown}
              >
                <FaPhone className="mr-2" />
                <span className="text-sm">Emergency</span>
              </button>

              {showEmergencyDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-10"
                >
                  <div className="p-4">
                    <p className="text-gray font-semibold">Emergency Helpline</p>
                    <p className="text-gray-700 mt-2">0755-2556620, 2556669</p>
                    <p className="text-gray-700">+91 7997732332</p>
                    <a
                      href="tel:+917997732332"
                      className="block mt-3 bg-red-600 text-white text-center px-4 py-2 rounded-lg hover:bg-red-700 text-sm font-medium"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Emergency Dropdown for Mobile */}
        {showEmergencyDropdown && (
          <div
            ref={dropdownRef}
            className="md:hidden bg-white border-t border-blue-100 shadow-md"
          >
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex flex-col items-center">
                <p className="text-gray font-semibold mb-2">Emergency Helpline</p>
                <p className="text-gray-700 mb-3">+91 7997732332</p>
                <a
                  href="tel:+917997732332"
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-red-700"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col divide-y divide-blue-50">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`block px-6 py-4 font-medium transition-colors
                      ${isActive(item.path)
                      ? 'text-gray bg-blue-50'
                      : 'text-gray-700 hover:bg-blue-50'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-blue-100 z-50">
        <div className="flex justify-around items-center py-2">
          {/* Home */}
          <Link to="/" className="flex flex-col items-center p-2 text-[#00A297] hover:text-[#00A297]">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m0 0h2m-2 0H9m6 0h-1m4-6l2 2m-2-2v6a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 15m-2 0l-1.5 4.493a1 1 0 01-.948.684H5a2 2 0 01-2-2v-6z" />
            </svg>
            <span className="text-xs">Home</span>
          </Link>

          {/* Doctors */}
          <Link to="/doctor" className="flex flex-col items-center p-2 text-gray hover:text-[#00A297]">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-xs">Doctors</span>
          </Link>

          {/* Services */}
          <Link to="/services" className="flex flex-col items-center p-2 text-gray hover:text-[#00A297]">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-xs">Services</span>
          </Link>

          {/* Appointment */}
          <Link to="/appointment/1" className="flex flex-col items-center p-2 text-gray hover:text-[#00A297]">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Appointment</span>
          </Link>

          {/* Call */}
          <a href="tel:+917997732332" className="flex flex-col items-center p-2 text-[#00A297] hover:text-[#00A297]">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs">Call Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
