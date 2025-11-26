// // // src/pages/SAAS.jsx
// // import React from "react";
// // // import saasLogoWall from "../assets/saas-logo-wall.jpg"; // lobby wall image (use provided image)
// // // import saasSign1 from "../assets/saas-sign-1.jpg"; // exterior sign closeup
// // // import saasBanner from "../assets/saas-banner.jpg"; // large external banner
// // // import hospital from "../assets/Hospital.jpg"; // existing hospital shot (optional)

// // import saas from "../assets/saas.jpeg";

// // import {
// //   FaPhoneAlt,
// //   FaMapMarkerAlt,
// //   FaClock,
// //   FaStethoscope,
// //   FaHeartbeat,
// //   FaBed,
// //   FaUserMd,
// // } from "react-icons/fa";

// // const SAAS = () => {
// //   return (
// //     <div className="bg-gray-50 text-gray-900">
// //       <section className="relative bg-text-white py-5 px-4">
// //         <div className="text-center ">
// //           <h2 className="text-3xl md:text-3xl text-[#192131] font-bold mb-2">
// //             About <span className="text-[#00A297]">SAAS</span>
// //           </h2>

// //           <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />
// //           <p className="text-sm md:text-xl text-gray-500 max-w-xl mx-auto">
// //             "Superspeciality Asthma, Allergy & Sleep Centre"
// //           </p>
// //         </div>
// //       </section>
// //       {/* Hero */}
// //       <section className="container mx-auto px-4 py-8 md:py-12">
// //         <div className="flex flex-col md:flex-row items-center gap-8">
// //           <div className="md:w-1/2">
// //             <img
// //               //   src={saasBanner}
// //               src={saas}
// //               alt="SAAS - Chest Allergy & Sleep Centre"
// //               className="w-full rounded-xl shadow-lg object-cover"
// //             />
// //           </div>

// //           <div className="md:w-1/2">
// //             <h1 className="text-4xl md:text-5xl font-extrabold text-[#a82b24] leading-tight">
// //               SAAS
// //             </h1>
// //             <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-1">
// //               Superspeciality — Chest, Allergy & Sleep Centre
// //             </h2>

// //             <div className="w-24 h-1 bg-[#a82b24] rounded-full my-4" />

// //             <p className="text-gray-600 mb-4">
// //               Breathe Better, Sleep Better, Live Better. Comprehensive care for
// //               respiratory disease, allergic conditions and sleep disorders —
// //               including diagnostic testing, pulmonary rehabilitation and CPAP
// //               therapy.
// //             </p>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
// //               <div className="flex items-start gap-3">
// //                 <FaStethoscope className="text-[#a82b24] mt-1" />
// //                 <div>
// //                   <div className="text-sm font-semibold">Pulmonology</div>
// //                   <div className="text-xs text-gray-500">
// //                     Diagnostics & care
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-3">
// //                 <FaHeartbeat className="text-[#a82b24] mt-1" />
// //                 <div>
// //                   <div className="text-sm font-semibold">Sleep Medicine</div>
// //                   <div className="text-xs text-gray-500">
// //                     Sleep study & CPAP
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-3">
// //                 <FaUserMd className="text-[#a82b24] mt-1" />
// //                 <div>
// //                   <div className="text-sm font-semibold">Allergy Clinic</div>
// //                   <div className="text-xs text-gray-500">
// //                     Testing & immunotherapy
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-3">
// //                 <FaBed className="text-[#a82b24] mt-1" />
// //                 <div>
// //                   <div className="text-sm font-semibold">Pulmonary Rehab</div>
// //                   <div className="text-xs text-gray-500">
// //                     Exercise & recovery
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="mt-6 flex flex-col sm:flex-row gap-3">
// //               <a
// //                 href="#contact"
// //                 className="inline-flex items-center justify-center bg-[#a82b24] text-white px-5 py-3 rounded-lg font-semibold shadow hover:shadow-lg"
// //               >
// //                 Book Appointment
// //               </a>
// //               <a
// //                 href="#services"
// //                 className="inline-flex items-center justify-center border border-gray-300 px-5 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
// //               >
// //                 See Services
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Two-column alternating (image left / content right) */}
// //       <section id="services" className="container mx-auto px-4 py-8 md:py-12">
// //         <div className="flex flex-col md:flex-row gap-8 items-center">
// //           {/* image */}
// //           <div className="md:w-1/2">
// //             <img
// //               //   src={saasSign1}
// //               src={saas}
// //               alt="SAAS exterior sign"
// //               className="rounded-xl shadow-lg w-full object-cover"
// //             />
// //           </div>

// //           {/* content */}
// //           <div className="md:w-1/2">
// //             <h3 className="text-2xl font-bold text-gray-800">Core Services</h3>
// //             <div className="w-16 h-1 bg-[#a82b24] rounded-full my-3" />
// //             <p className="text-gray-600 mb-4">
// //               We offer focused, evidence-based care for respiratory and sleep
// //               conditions:
// //             </p>

// //             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
// //               <li className="bg-white rounded-lg p-4 shadow-sm border">
// //                 <div className="font-semibold">
// //                   Comprehensive Lung Function Testing
// //                 </div>
// //                 <div className="text-xs text-gray-500">
// //                   Spirometry, lung volumes
// //                 </div>
// //               </li>

// //               <li className="bg-white rounded-lg p-4 shadow-sm border">
// //                 <div className="font-semibold">Level 1 Sleep Study (PSG)</div>
// //                 <div className="text-xs text-gray-500">
// //                   Diagnosis of sleep apnea
// //                 </div>
// //               </li>

// //               <li className="bg-white rounded-lg p-4 shadow-sm border">
// //                 <div className="font-semibold">CPAP / BIPAP Titration</div>
// //                 <div className="text-xs text-gray-500">
// //                   Individualized therapy
// //                 </div>
// //               </li>

// //               <li className="bg-white rounded-lg p-4 shadow-sm border">
// //                 <div className="font-semibold">Pulmonary Rehabilitation</div>
// //                 <div className="text-xs text-gray-500">
// //                   Exercise & education
// //                 </div>
// //               </li>

// //               <li className="bg-white rounded-lg p-4 shadow-sm border">
// //                 <div className="font-semibold">
// //                   Allergy Testing & Immunotherapy
// //                 </div>
// //                 <div className="text-xs text-gray-500">Personalized plans</div>
// //               </li>

// //               <li className="bg-white rounded-lg p-4 shadow-sm border">
// //                 <div className="font-semibold">
// //                   Bronchoscopy & Emergency Respiratory Care
// //                 </div>
// //                 <div className="text-xs text-gray-500">
// //                   Critical care support
// //                 </div>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Alternating: content left / image right */}
// //       <section className="container mx-auto px-4 py-8 md:py-12">
// //         <div className="flex flex-col md:flex-row gap-8 items-center">
// //           {/* content */}
// //           <div className="md:w-1/2">
// //             <h3 className="text-2xl font-bold text-gray-800">
// //               Why choose SAAS?
// //             </h3>
// //             <div className="w-16 h-1 bg-[#a82b24] rounded-full my-3" />
// //             <p className="text-gray-600 mb-4">
// //               SAAS at Parul Hospital brings compassionate, specialized care with
// //               modern diagnostics and a multidisciplinary team for chest, allergy
// //               and sleep disorders.
// //             </p>

// //             <ul className="space-y-3 text-gray-700">
// //               <li className="flex gap-3 items-start">
// //                 <span className="text-[#a82b24] mt-1 text-xl">•</span>
// //                 <div>
// //                   <div className="font-semibold">Experienced specialists</div>
// //                   <div className="text-xs text-gray-500">
// //                     Skilled pulmonologists & sleep specialists
// //                   </div>
// //                 </div>
// //               </li>

// //               <li className="flex gap-3 items-start">
// //                 <span className="text-[#a82b24] mt-1 text-xl">•</span>
// //                 <div>
// //                   <div className="font-semibold">Advanced diagnostics</div>
// //                   <div className="text-xs text-gray-500">
// //                     In-house sleep lab & lung testing
// //                   </div>
// //                 </div>
// //               </li>

// //               <li className="flex gap-3 items-start">
// //                 <span className="text-[#a82b24] mt-1 text-xl">•</span>
// //                 <div>
// //                   <div className="font-semibold">Holistic care</div>
// //                   <div className="text-xs text-gray-500">
// //                     From testing to long-term rehabilitation
// //                   </div>
// //                 </div>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* image */}
// //           <div className="md:w-1/2">
// //             <img
// //               //   src={saasLogoWall}
// //               src={saas}
// //               alt="SAAS lobby wall logo"
// //               className="rounded-xl shadow-lg w-full object-cover"
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Doctors / Team */}
// //       <section className="container mx-auto px-4 py-8 md:py-12">
// //         <div className="text-center mb-6">
// //           <h3 className="text-2xl font-bold">Our Consultants</h3>
// //           <div className="w-16 h-1 bg-[#a82b24] rounded-full my-3 mx-auto" />
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           <div className="bg-white rounded-lg p-6 shadow-sm border">
// //             <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
// //               {/* Replace with doctor image */}
// //               Dr. Prakhar Agrawal
// //             </div>
// //             <h4 className="mt-4 font-semibold">Dr. Prakhar Agrawal</h4>
// //             <p className="text-xs text-gray-500 mb-2">MD, DM Pulmonology</p>
// //             <p className="text-sm text-gray-700">
// //               Pulmonologist & Sleep Physician — lead consultant in respiratory &
// //               sleep disorders.
// //             </p>
// //           </div>

// //           <div className="bg-white rounded-lg p-6 shadow-sm border">
// //             <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
// //               Dr. Kirti Kadian
// //             </div>
// //             <h4 className="mt-4 font-semibold">Dr. Kirti Kadian</h4>
// //             <p className="text-xs text-gray-500 mb-2">MD, DNB Pulmonology</p>
// //             <p className="text-sm text-gray-700">
// //               Specialist in critical care & sleep medicine with focus on
// //               patient-centered therapy.
// //             </p>
// //           </div>

// //           <div className="bg-white rounded-lg p-6 shadow-sm border">
// //             <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
// //               Allied Team
// //             </div>
// //             <h4 className="mt-4 font-semibold">Allied Health Team</h4>
// //             <p className="text-xs text-gray-500 mb-2">
// //               Physiotherapists & Sleep Technicians
// //             </p>
// //             <p className="text-sm text-gray-700">
// //               Pulmonary rehab therapists and trained sleep lab staff to support
// //               recovery and therapy adherence.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact + CTA */}
// //       <section id="contact" className="bg-white border-t mt-6">
// //         <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center gap-6">
// //           <div className="md:w-2/3">
// //             <h3 className="text-2xl md:text-3xl font-bold">
// //               Book a Consultation
// //             </h3>
// //             <p className="text-gray-600 mt-2">
// //               Visit SAAS at Parul Hospital — outpatient consultation,
// //               diagnostics and sleep studies.
// //             </p>

// //             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
// //               <div className="flex items-start gap-3">
// //                 <FaPhoneAlt className="text-[#a82b24] mt-1" />
// //                 <div>
// //                   <div className="font-semibold">Call / WhatsApp</div>
// //                   <div className="text-sm text-gray-600">0755-2556620</div>
// //                   <div className="text-sm text-gray-600">7999732232</div>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-3">
// //                 <FaMapMarkerAlt className="text-[#a82b24] mt-1" />
// //                 <div>
// //                   <div className="font-semibold">Location</div>
// //                   <div className="text-sm text-gray-600">
// //                     Parul Hospital, Main Building
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-3">
// //                 <FaClock className="text-[#a82b24] mt-1" />
// //                 <div>
// //                   <div className="font-semibold">Timings</div>
// //                   <div className="text-sm text-gray-600">
// //                     Mon–Sat: 10:00 AM – 2:00 PM; 6:00 PM – 8:00 PM
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="md:w-1/3 bg-[#f8fafb] rounded-lg p-6 shadow-sm border">
// //             <h4 className="text-lg font-semibold mb-2">Quick Appointment</h4>
// //             <form className="space-y-3">
// //               <input
// //                 type="text"
// //                 placeholder="Full name"
// //                 className="w-full border rounded-md px-3 py-2"
// //               />
// //               <input
// //                 type="tel"
// //                 placeholder="Phone number"
// //                 className="w-full border rounded-md px-3 py-2"
// //               />
// //               <select className="w-full border rounded-md px-3 py-2">
// //                 <option>Choose service</option>
// //                 <option>Consultation</option>
// //                 <option>Sleep Study</option>
// //                 <option>Pulmonary Rehab</option>
// //               </select>
// //               <button
// //                 type="button"
// //                 className="w-full bg-[#a82b24] text-white px-4 py-2 rounded-md font-semibold"
// //               >
// //                 Request Call Back
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer-like small map + hospital image */}
// //       <section className="container mx-auto px-4 py-8 md:py-12">
// //         <div className="flex flex-col md:flex-row gap-6 items-center">
// //           <div className="md:w-1/2">
// //             <img
// //               // src={hospital}
// //               alt="Parul Hospital"
// //               className="rounded-xl shadow-lg w-full object-cover"
// //             />
// //           </div>

// //           <div className="md:w-1/2">
// //             <h4 className="text-xl font-semibold">Visit Us</h4>
// //             <p className="text-gray-600 mb-4">
// //               Parul Hospital — SAAS is located at the main hospital building. We
// //               provide full-time emergency respiratory care and scheduled
// //               outpatient services.
// //             </p>

// //             {/* simple map iframe placeholder -> replace src with actual Google Maps embed if available */}
// //             <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden border">
// //               <iframe
// //                 title="Parul Hospital map"
// //                 className="w-full h-full"
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3"
// //                 loading="lazy"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <footer className="bg-white border-t">
// //         <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
// //           © {new Date().getFullYear()} SAAS — Superspeciality Asthma, Allergy &
// //           Sleep Centre · Parul Hospital
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default SAAS;

// // src/pages/SAAS.jsx

// // import saasLogoWall from "../assets/saas-logo-wall.jpg";
// // import saasSign1 from "../assets/saas-sign-1.jpg";
// // import saasBanner from "../assets/saas-banner.jpg";
// // import hospital from "../assets/Hospital.jpg";

// import saas from "../assets/saas.jpeg";

// import {
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaClock,
//   FaStethoscope,
//   FaHeartbeat,
//   FaBed,
//   FaUserMd,
// } from "react-icons/fa";

// const SAAS = () => {
//   return (
//     <div className="bg-gray-50 text-gray-900">
//       <section className="relative bg-text-white py-5 px-4">
//         <div className="text-center ">
//           <h2 className="text-3xl md:text-3xl text-[#192131] font-bold mb-2">
//             About <span className="text-[#00A297]">SAAS</span>
//           </h2>

//           <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />
//           <p className="text-sm md:text-xl text-gray-500 max-w-xl mx-auto">
//             "Superspeciality Asthma, Allergy & Sleep Centre"
//           </p>
//         </div>
//       </section>

//       {/* Hero */}
//       <section className="container mx-auto px-4 py-8 md:py-12">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="md:w-1/2">
//             <img
//               src={saas}
//               alt="SAAS - Chest Allergy & Sleep Centre"
//               className="w-full rounded-xl shadow-lg object-cover"
//             />
//           </div>

//           <div className="md:w-1/2">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-[#00A297] leading-tight">
//               SAAS
//             </h1>
//             <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-1">
//               Superspeciality — Chest, Allergy & Sleep Centre
//             </h2>

//             <div className="w-24 h-1 bg-[#00A297] rounded-full my-4" />

//             <p className="text-gray-600 mb-4">
//               Breathe Better, Sleep Better, Live Better. Comprehensive care for
//               respiratory disease, allergic conditions and sleep disorders —
//               including diagnostic testing, pulmonary rehabilitation and CPAP
//               therapy.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
//               <div className="flex items-start gap-3">
//                 <FaStethoscope className="text-[#00A297] mt-1" />
//                 <div>
//                   <div className="text-sm font-semibold">Pulmonology</div>
//                   <div className="text-xs text-gray-500">
//                     Diagnostics & care
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <FaHeartbeat className="text-[#00A297] mt-1" />
//                 <div>
//                   <div className="text-sm font-semibold">Sleep Medicine</div>
//                   <div className="text-xs text-gray-500">
//                     Sleep study & CPAP
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <FaUserMd className="text-[#00A297] mt-1" />
//                 <div>
//                   <div className="text-sm font-semibold">Allergy Clinic</div>
//                   <div className="text-xs text-gray-500">
//                     Testing & immunotherapy
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <FaBed className="text-[#00A297] mt-1" />
//                 <div>
//                   <div className="text-sm font-semibold">Pulmonary Rehab</div>
//                   <div className="text-xs text-gray-500">
//                     Exercise & recovery
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row gap-3">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center bg-[#00A297] text-white px-5 py-3 rounded-lg font-semibold shadow hover:shadow-lg"
//               >
//                 Book Appointment
//               </a>
//               <a
//                 href="#services"
//                 className="inline-flex items-center justify-center border border-gray-300 px-5 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
//               >
//                 See Services
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Two-column alternating */}
//       <section id="services" className="container mx-auto px-4 py-8 md:py-12">
//         <div className="flex flex-col md:flex-row gap-8 items-center">
//           <div className="md:w-1/2">
//             <img
//               src={saas}
//               alt="SAAS exterior sign"
//               className="rounded-xl shadow-lg w-full object-cover"
//             />
//           </div>

//           <div className="md:w-1/2">
//             <h3 className="text-2xl font-bold text-gray-800">Core Services</h3>
//             <div className="w-16 h-1 bg-[#00A297] rounded-full my-3" />

//             <p className="text-gray-600 mb-4">
//               We offer focused, evidence-based care for respiratory and sleep
//               conditions:
//             </p>

//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
//               <li className="bg-white rounded-lg p-4 shadow-sm border">
//                 <div className="font-semibold">
//                   Comprehensive Lung Function Testing
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   Spirometry, lung volumes
//                 </div>
//               </li>

//               <li className="bg-white rounded-lg p-4 shadow-sm border">
//                 <div className="font-semibold">Level 1 Sleep Study (PSG)</div>
//                 <div className="text-xs text-gray-500">
//                   Diagnosis of sleep apnea
//                 </div>
//               </li>

//               <li className="bg-white rounded-lg p-4 shadow-sm border">
//                 <div className="font-semibold">CPAP / BIPAP Titration</div>
//                 <div className="text-xs text-gray-500">
//                   Individualized therapy
//                 </div>
//               </li>

//               <li className="bg-white rounded-lg p-4 shadow-sm border">
//                 <div className="font-semibold">Pulmonary Rehabilitation</div>
//                 <div className="text-xs text-gray-500">
//                   Exercise & education
//                 </div>
//               </li>

//               <li className="bg-white rounded-lg p-4 shadow-sm border">
//                 <div className="font-semibold">
//                   Allergy Testing & Immunotherapy
//                 </div>
//                 <div className="text-xs text-gray-500">Personalized plans</div>
//               </li>

//               <li className="bg-white rounded-lg p-4 shadow-sm border">
//                 <div className="font-semibold">
//                   Bronchoscopy & Emergency Respiratory Care
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   Critical care support
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Alternating: content left / image right */}
//       <section className="container mx-auto px-4 py-8 md:py-12">
//         <div className="flex flex-col md:flex-row gap-8 items-center">
//           <div className="md:w-1/2">
//             <h3 className="text-2xl font-bold text-gray-800">
//               Why choose SAAS?
//             </h3>

//             <div className="w-16 h-1 bg-[#00A297] rounded-full my-3" />

//             <p className="text-gray-600 mb-4">
//               SAAS at Parul Hospital brings compassionate, specialized care with
//               modern diagnostics and a multidisciplinary team for chest, allergy
//               and sleep disorders.
//             </p>

//             <ul className="space-y-3 text-gray-700">
//               <li className="flex gap-3 items-start">
//                 <span className="text-[#00A297] mt-1 text-xl">•</span>
//                 <div>
//                   <div className="font-semibold">Experienced specialists</div>
//                   <div className="text-xs text-gray-500">
//                     Skilled pulmonologists & sleep specialists
//                   </div>
//                 </div>
//               </li>

//               <li className="flex gap-3 items-start">
//                 <span className="text-[#00A297] mt-1 text-xl">•</span>
//                 <div>
//                   <div className="font-semibold">Advanced diagnostics</div>
//                   <div className="text-xs text-gray-500">
//                     In-house sleep lab & lung testing
//                   </div>
//                 </div>
//               </li>

//               <li className="flex gap-3 items-start">
//                 <span className="text-[#00A297] mt-1 text-xl">•</span>
//                 <div>
//                   <div className="font-semibold">Holistic care</div>
//                   <div className="text-xs text-gray-500">
//                     From testing to long-term rehabilitation
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           <div className="md:w-1/2">
//             <img
//               src={saas}
//               alt="SAAS lobby wall logo"
//               className="rounded-xl shadow-lg w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SAAS;

import saas from "../assets/saas.jpeg";
import hospital from "../assets/Hospital.jpg";
import saas1 from "../assets/saas1.png";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaStethoscope,
  FaHeartbeat,
  FaBed,
  FaUserMd,
} from "react-icons/fa";

const SAAS = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ================= HERO HEADING ================= */}
      <section className="relative bg-white py-6 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-3xl text-[#192131] font-bold mb-2 tracking-wide">
            <span className="text-[#00A297]">SAAS</span>
          </h2>

          <div className="w-24 h-1 bg-[#00A297] mx-auto rounded-full mb-4" />

          <p className="text-sm md:text-xl text-gray-500 max-w-xl mx-auto">
            "Superspeciality Asthma, Allergy & Sleep Centre"
          </p>
        </div>
      </section>

{/* ================= MAIN HERO SECTION ================= */}
<section className="container mx-auto px-4 py-4 md:py-0 md:-mt-14">
  <div className="flex flex-col md:flex-row items-center gap-2">

    {/* IMAGE */}
    <div className="md:w-1/2 relative group">
      <img
        src={saas1}
        alt="SAAS Centre"
        className="w-full rounded-2xl object-cover transform group-hover:scale-[1.02] transition-all duration-300"
      />
    </div>

    {/* TEXT CONTENT */}
    <div className="md:w-1/2">
      <h1 className="text-3xl md:text-3xl font-extrabold text-[#00A297] leading-tight">
        SAAS
      </h1>

      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-2">
        Superspeciality — Chest, Allergy & Sleep Centre
      </h2>

      <div className="w-20 h-1 bg-[#00A297] rounded-full my-5" />

      <p className="text-gray-600 text-md font-medium leading-relaxed">
        Comprehensive care for respiratory diseases, allergy disorders,
        and sleep-related issues with modern diagnostics, pulmonary
        rehabilitation and advanced CPAP therapy.
      </p>

      {/* SERVICE ICON GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
        {[
          {
            icon: <FaStethoscope />,
            title: "Pulmonology",
            sub: "Diagnostics & care",
          },
          {
            icon: <FaHeartbeat />,
            title: "Sleep Medicine",
            sub: "Sleep study & CPAP",
          },
          {
            icon: <FaUserMd />,
            title: "Allergy Clinic",
            sub: "Testing & immunotherapy",
          },
          {
            icon: <FaBed />,
            title: "Pulmonary Rehab",
            sub: "Exercise & recovery",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-all border border-[#00A297]"
          >
            <div className="text-[#00A297] text-xl">{item.icon}</div>
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* ⭐ FULL-WIDTH SUMMARY SECTION ⭐ */}
<section className="w-full bg-white py-16 px-4 md:-mt-28">
  <div className="max-w-6xl mx-auto">
    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
      SAAS is a dedicated superspeciality centre offering expert care in
      pulmonology, allergy management, and sleep medicine. With advanced 
      diagnostics, comprehensive rehabilitation, and an experienced medical 
      team, we ensure precise evaluation and effective treatment for all 
      respiratory and sleep-related conditions.
    </p>
  </div>
</section>

      {/* ================= SLEEP APNEA SECTION ================= */}
      <section className="container mx-auto px-4 py-6 md:py-0 md:-mt-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-3xl font-bold text-center text-black">
            स्लीप एप्निया (<span className="text-[#00A297]">Sleep Apnea</span>)
          </h2>

          <p className="text-center text-gray-600 mt-2 text-md font-medium md:text-xl">
            खर्राटों से जुड़ी एक गंभीर बीमारी — चुपचाप आपकी जान भी ले सकती है
          </p>

          <div className="w-24 h-1 bg-[#00A297] mx-auto rounded-full my-8"></div>

          {/* LEFT TEXT — RIGHT TEXT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE — Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                स्लीप एप्निया के सामान्य लक्षण
              </h3>

              <ul className="space-y-3 text-gray-700 text-md font-medium">
                {[
                  "तेज़ खर्राटे लेना",
                  "रात में बार–बार पेशाब आना",
                  "अधिक/दिन के समय ज़्यादा नींद आना",
                  "सुबह के वक्त सिर में दर्द",
                  "मोटापा / तोंद निकलना",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-[#00A297] text-xl mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE — Complications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                स्लीप एप्निया का इलाज न करने पर क्या हो सकता है?
              </h3>

              <ul className="space-y-3 text-gray-700 text-md font-medium">
                {[
                  "उच्च रक्तचाप",
                  "दिल की बीमारी",
                  "स्ट्रोक का खतरा",
                  "मधुमेह (डायबिटीज)",
                  "थकान और दिन में नींद आना",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-[#00A297] text-xl mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES SECTION ================= */}
      <section id="services" className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          {/* IMAGE RIGHT SIDE */}
          <div className="md:w-1/2">
            <img
              src={hospital}
              alt="SAAS Services"
              className="rounded-2xl shadow-xl w-full object-cover hover:scale-[1.02] transition-all duration-300"
            />
          </div>

          {/* TEXT LEFT SIDE */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800">
              Core <span className="text-[#00A297]">Services</span>
            </h3>

            <div className="w-20 h-1 bg-[#00A297] rounded-full my-4" />

            <p className="text-gray-600 mb-6 text-md font-medium">
              We provide world-class diagnosis and treatment for Lung Disorders,
              Allergies, and Sleep-related diseases.
            </p>

            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FaStethoscope className="text-[#00A297] text-xl" />,
                  text: "Comprehensive Lung Function Testing",
                },
                {
                  icon: <FaHeartbeat className="text-[#00A297] text-xl" />,
                  text: "Level 1 Sleep Study (PSG)",
                },
                {
                  icon: <FaBed className="text-[#00A297] text-xl" />,
                  text: "CPAP / BIPAP Titration",
                },
                {
                  icon: <FaUserMd className="text-[#00A297] text-xl" />,
                  text: "Pulmonary Rehabilitation",
                },
                {
                  icon: <FaStethoscope className="text-[#00A297] text-xl" />,
                  text: "Allergy Testing & Immunotherapy",
                },
                {
                  icon: <FaHeartbeat className="text-[#00A297] text-xl" />,
                  text: "Bronchoscopy & Emergency Respiratory Care",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-white border border-[#00A297] p-4 rounded-xl shadow hover:shadow-md transition flex items-start gap-3"
                >
                  {item.icon}
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAAS;
