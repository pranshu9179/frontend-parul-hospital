import React from "react";
import { Link } from "react-router-dom";
import {
  FaStethoscope,
  FaUserMd,
  FaCalendarAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaRegCalendarAlt,
  FaStar,
} from "react-icons/fa";
import drprakhar from "../assets/doctors/prakhar3.jpg";
import news from "../assets/doctors/news.jpg";
import meeta from "../assets/doctors/meeta.jpg";
import pankaj from "../assets/doctors/pankaj.jpg";

import mam from "../assets/mam2.jpg";
import image from "../assets/new.jpg";
import { Helmet } from "react-helmet";
const DoctorsPage = () => {
  // const { id } = useParams();

  //   const featuredDoctors = [
  //   {
  //   id: 1,
  //   slug: "dr-prakhar-agarwal",
  //   name: "Dr. Prakhar Agarwal",
  //   qualification: "DM Pulmonary Critical Care & Sleep Medicine, MD, DNB, MNAMS, DAA (CMC Vellore) – Allergy Specialist, Ex. Senior Resident – AIIMS Delhi",
  //   specialization: "Allergy Asthma Sleep & Critical Care",
  //   experience: "Ex. Senior Resident – AIIMS Delhi",
  //   // designation: "DM Pulmonary Critical Care & Sleep Medicine, MD, DNB, MNAMS, DAA (CMC Vellore) – Allergy Specialist, Ex. Senior Resident – AIIMS Delhi",
  //   image: image,
  //   timings: [
  //     { day: "Morning", time: "10:00 AM - 2:00 PM" },
  //     { day: "Evening", time: "6:00 PM - 8:00 PM" }
  //     // { day: "Sunday", time: "Emergency Only" }
  //   ],
  //   consultationFee: "₹800",
  //   rating: "4.9"
  // },

  //     {
  //       id: 2,
  //       slug: "dr-kirti-kadian",
  //       name: "Dr. Kirti Kadian",
  //       qualification:  "MD, DM Pulmonary Critical Care & Sleep Medicine, Ex. Senior Resident PGIMER Rohtak, Pulmonary Rehabilitation Expert" ,
  //       specialization: "Pulmonary Rehabilitation, Sleep Medicine",
  //       experience: "Ex.Senior Resident-PGIMER Rohtak",
  //       image: mam,
  //       timings: [
  //           { day: "Morning", time: "10:00 AM - 2:00 PM" },
  //        { day: "Evening", time: "6:00 PM - 8:00 PM" }
  //         // { day: "Sunday", time: "Closed" }
  //       ],
  //       // consultationFee: "₹700",
  //       rating: "4.8"

  //     },
  //       {
  //       id: 3,
  //       slug: "dr-meeta-agarwal",
  //       name: "Dr. Meeta Agarwal",
  //       qualification: "MD Obs. & Gynae.",
  //       specialization: "Adolescent & Menopausal Health, Preventive Gynecology",
  //       experience:"45+ years of expertise",
  //       image: meeta,
  //       timings: [
  //      { day: "Morning", time: "11:00 AM - 1:00 PM" },
  //   { day: "Evening", time: "7:00 PM - 8:00 PM" }

  //       ],
  //       rating: "4.7"
  //     },
  //     {
  //       id: 4,
  //       slug: "dr-pankaj-agarwal",
  //       name: "Dr. Pankaj Agarwal",
  //       qualification: "MD Medicine",
  //       specialization: "Cardiology, Gastroenterology, Diabetology",
  //        experience:"45+ years of expertise",
  //       image: pankaj,

  //       timings: [
  //   { day: "Morning", time: "11:00 AM - 1:00 PM" },
  //   { day: "Evening", time: "6:30 PM - 8:30 PM" }
  //       ],
  //       rating: "4.6"
  //     }
  //   ];

  const featuredDoctors = [
    // 🔹 Your existing doctors (unchanged)
    {
      id: 1,
      slug: "dr-prakhar-agarwal",
      name: "Dr. Prakhar Agarwal",
      qualification:
        "DM Pulmonary Critical Care & Sleep Medicine, MD, DNB, MNAMS, DAA (CMC Vellore) – Allergy Specialist, Ex. Senior Resident – AIIMS Delhi",
      specialization: "Allergy Asthma Sleep & Critical Care",
      experience: "Ex. Senior Resident – AIIMS Delhi",
      image: image, // your actual path
      timings: [
        { day: "Morning", time: "10:00 AM - 2:00 PM" },
        { day: "Evening", time: "6:00 PM - 8:00 PM" },
      ],
      consultationFee: "₹800",
      rating: "4.9",
    },
    {
      id: 2,
      slug: "dr-kirti-kadian",
      name: "Dr. Kirti Kadian",
      qualification:
        "MD, DM Pulmonary Critical Care & Sleep Medicine, Ex. Senior Resident PGIMER Rohtak, Pulmonary Rehabilitation Expert",
      specialization: "Pulmonary Rehabilitation, Sleep Medicine",
      experience: "Ex.Senior Resident-PGIMER Rohtak",
      image: news, // your actual path
      timings: [
        { day: "Morning", time: "10:00 AM - 2:00 PM" },
        { day: "Evening", time: "6:00 PM - 8:00 PM" },
      ],
      rating: "4.8",
    },
    {
      id: 3,
      slug: "dr-meeta-agarwal",
      name: "Dr. Meeta Agarwal",
      qualification: "MD Obs. & Gynae.",
      specialization: "Adolescent & Menopausal Health, Preventive Gynecology",
      experience: "45+ years of expertise",
      image: meeta, // your actual path
      timings: [
        { day: "Morning", time: "11:00 AM - 1:00 PM" },
        { day: "Evening", time: "7:00 PM - 8:00 PM" },
      ],
      rating: "4.7",
    },
    {
      id: 4,
      slug: "dr-pankaj-agarwal",
      name: "Dr. Pankaj Agarwal",
      qualification: "MD Medicine",
      specialization: "Cardiology, Gastroenterology, Diabetology",
      experience: "45+ years of expertise",
      image: pankaj, // your actual path
      timings: [
        { day: "Morning", time: "11:00 AM - 1:00 PM" },
        { day: "Evening", time: "6:30 PM - 8:30 PM" },
      ],
      rating: "4.6",
    },
  ];

  const otherDoctors = [
    {
      id: 5,
      slug: "dr-hh-trivedi",
      name: "Dr. H.H Trivedi",
      qualification: "MD (Medicine)",
      specialization: "Medicine",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [
        { day: "Morning", time: "10:00 AM - 12:00 PM" },
        { day: "Evening", time: "5:00 PM - 7:00 PM" },
      ],
      rating: "4.5",
    },
    {
      id: 6,
      slug: "dr-cc-chaubal",
      name: "Dr. C.C Chaubal",
      qualification: "MD, DM (Gastroenterology)",
      specialization: "Gastroenterology",
      experience: "25+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "11:00 AM - 1:00 PM" }],
      rating: "4.6",
    },
    {
      id: 7,
      slug: "dr-vikrant-shrivastava",
      name: "Dr. Vikrant Shrivastava",
      qualification: "MD, DM (Neurology)",
      specialization: "Neurology",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "5:30 PM - 7:30 PM" }],
      rating: "4.5",
    },
    {
      id: 8,
      slug: "dr-himanshu-sharma",
      name: "Dr. Himanshu Sharma",
      qualification: "MD, DM (Nephrology)",
      specialization: "Nephrology",
      experience: "Visiting Faculty",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "10:30 AM - 12:30 PM" }],
      rating: "4.4",
    },
    {
      id: 9,
      slug: "dr-yogesh-varma",
      name: "Dr. Yogesh Varma",
      qualification: "MD, DM (Cardiology)",
      specialization: "Cardiology",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "6:00 PM - 8:00 PM" }],
      rating: "4.6",
    },
    {
      id: 10,
      slug: "dr-sumit-bhatnagar",
      name: "Dr. Sumit Bhatnagar",
      qualification: "MD, DM (Cardiology)",
      specialization: "Cardiology",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "9:00 AM - 11:00 AM" }],
      rating: "4.5",
    },
    {
      id: 11,
      slug: "dr-madhuri-chandra",
      name: "Dr. Madhuri Chandra",
      qualification: "FICOG, MS (Obs & Gynaecology)",
      specialization: "Obstetrics & Gynaecology",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "10:00 AM - 12:00 PM" }],
      rating: "4.7",
    },
    {
      id: 12,
      slug: "dr-meenakshi-patel",
      name: "Dr. Meenakshi Patel",
      qualification: "MS (Obs & Gynaecology)",
      specialization: "Obstetrics & Gynaecology",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "6:00 PM - 8:00 PM" }],
      rating: "4.6",
    },
    {
      id: 13,
      slug: "dr-kirti-narayan",
      name: "Dr. Kirti Narayan",
      qualification: "DCH (Paediatrics)",
      specialization: "Paediatrics",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "9:30 AM - 11:30 AM" }],
      rating: "4.5",
    },
    {
      id: 14,
      slug: "dr-lalish-jhavar",
      name: "Dr. Lalish Jhavar",
      qualification: "DNB (Paediatrics)",
      specialization: "Paediatrics",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "5:30 PM - 7:30 PM" }],
      rating: "4.4",
    },
    {
      id: 15,
      slug: "dr-vasant-trivedi",
      name: "Dr. Vasant Trivedi",
      qualification: "D.Orth",
      specialization: "Orthopaedics & Trauma Surgery",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "10:00 AM - 12:00 PM" }],
      rating: "4.5",
    },
    {
      id: 16,
      slug: "dr-anurag-tiwari",
      name: "Dr. Anurag Tiwari",
      qualification: "MS (Orthopaedics)",
      specialization: "Orthopaedics",
      experience: "Visiting Faculty",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "6:00 PM - 8:00 PM" }],
      rating: "4.5",
    },
    {
      id: 17,
      slug: "dr-arvind-joshi",
      name: "Dr. Arvind Joshi",
      qualification: "MS, DNB (Urology)",
      specialization: "Urology",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "11:00 AM - 1:00 PM" }],
      rating: "4.6",
    },
    {
      id: 18,
      slug: "dr-hari-shankar",
      name: "Dr. Hari Shankar",
      qualification: "MS, MCH (Plastic Surgery)",
      specialization: "Plastic Surgery",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "5:30 PM - 7:30 PM" }],
      rating: "4.6",
    },
    {
      id: 19,
      slug: "dr-mridul-shahi",
      name: "Dr. Mridul Shahi",
      qualification: "MS, MCH (Neurosurgery)",
      specialization: "Neurosurgery",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "10:00 AM - 12:00 PM" }],
      rating: "4.7",
    },
    {
      id: 20,
      slug: "dr-devendra-choudhary",
      name: "Dr. Devendra Choudhary",
      qualification: "MS (Surgery)",
      specialization: "General Surgery",
      experience: "Visiting Faculty",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "6:00 PM - 8:00 PM" }],
      rating: "4.5",
    },
    {
      id: 21,
      slug: "dr-sk-saxena",
      name: "Dr. S.K Saxena",
      qualification: "MS (Surgery)",
      specialization: "General Surgery",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "9:30 AM - 11:30 AM" }],
      rating: "4.4",
    },
    {
      id: 22,
      slug: "dr-bhuvneshwar-garg",
      name: "Dr. Bhuvneshwar Garg",
      qualification: "MS (Surgery)",
      specialization: "General Surgery",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "5:30 PM - 7:30 PM" }],
      rating: "4.4",
    },
    {
      id: 23,
      slug: "dr-sk-tandon",
      name: "Dr. S.K Tandon",
      qualification: "MD (Psychiatry)",
      specialization: "Psychiatry & Mental Health",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "10:00 AM - 12:00 PM" }],
      rating: "4.6",
    },
    {
      id: 24,
      slug: "dr-farooq-ahmad",
      name: "Dr. Farooq Ahmad",
      qualification: "BPT",
      specialization: "Physiotherapy",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "6:00 PM - 8:00 PM" }],
      rating: "4.4",
    },
    {
      id: 25,
      slug: "dr-om-prakash",
      name: "Dr. Om Prakash",
      qualification: "MSC (Dietetics)",
      specialization: "Dietetics",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "9:30 AM - 11:30 AM" }],
      rating: "4.5",
    },
    {
      id: 26,
      slug: "dr-rajesh-chawla",
      name: "Dr. Rajesh Chawla",
      qualification: "DMRE",
      specialization: "Radiology",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "11:00 AM - 1:00 PM" }],
      rating: "4.5",
    },
    {
      id: 27,
      slug: "dr-pankaj-goyal",
      name: "Dr. Pankaj Goyal",
      qualification: "DNB (Radiologist)",
      specialization: "Radiology",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "5:30 PM - 7:30 PM" }],
      rating: "4.5",
    },
    {
      id: 29,
      slug: "dr-sc-badal",
      name: "Dr. S.C Badal",
      qualification: "MD (Anaesthesia)",
      specialization: "Anaesthesia",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "6:00 PM - 8:00 PM" }],
      rating: "4.4",
    },
    {
      id: 30,
      slug: "dr-cs-mishra",
      name: "Dr. C.S Mishra",
      qualification: "MD (Anaesthesia)",
      specialization: "Anaesthesia",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "9:00 AM - 11:00 AM" }],
      rating: "4.4",
    },
    {
      id: 31,
      slug: "dr-manish-kedia",
      name: "Dr. Manish Kedia",
      qualification: "MBBS, PGDCC, PGDMLS",
      specialization: "Physician",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Evening", time: "5:00 PM - 7:00 PM" }],
      rating: "4.5",
    },
    {
      id: 32,
      slug: "dr-dilip-kolekar",
      name: "Dr. Dilip Kolekar",
      qualification: "MBBS, DLO",
      specialization: "Physician",
      experience: "15+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "10:30 AM - 12:30 PM" }],
      rating: "4.4",
    },
    {
      id: 33,
      slug: "dr-p-tripathi",
      name: "Dr. P. Tripathi",
      qualification: "MD",
      specialization: "Pathology",
      experience: "20+ years",
      image: "/assets/default-doctor.png",
      timings: [{ day: "Morning", time: "9:30 AM - 11:30 AM" }],
      rating: "4.5",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

    {/* SEO — META TAGS */}
      <Helmet>
        <title>Our Doctors – Expert Physicians at Parul Hospital</title>
        <meta
          name="description"
          content="Meet the experienced and highly qualified doctors at Parul Hospital across various specialties. Schedule a specialist consultation now."
        />
      </Helmet>

      {/* Hero Banner */}

      <div className=" mb-4 bg-gradient-to-r from-[#00A297]/10 to-[#00788C]/10  p-8 text-center relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#00A297]/20"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#00788C]/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black  p-2 py-4 mt-4">
            <h1 className="text-4xl font-bold text-gray-800 ">
              Meet <span className="text-[#00A297]">Our Specialist</span>{" "}
              Doctors
            </h1>
          </h1>
          <p className="text-xl text-gray-600  mb-4">
            Highly qualified specialists providing comprehensive care with
            flexible timings
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Doctors Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Doctor Image with Overlay */}
                  <div className="md:w-3/4 h-auto md:h-auto relative group overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center">
                        {/* <div clabussName="bg-[#00A297] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <FaStar className="mr-1 text-yellow-300" />
                          {doctor.rating}
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="md:w-3/4 p-6 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {doctor.name}
                      </h3>

                      <div className="mb-">
                        <h4 className="text-sm font-semibold text-gray-500 ">
                          Designation
                        </h4>
                        <p className="text-[#00A297] font-medium mb-3">
                          {doctor.qualification}
                        </p>
                        {/* <p className="text-gray-700">{doctor.specialization}</p> */}
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 mb-1">
                            Experience
                          </h4>
                          <p className="text-gray-700">{doctor.experience}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 mb-1 flex items-center">
                          <FaClock className="mr-2" /> Available Timings
                        </h4>
                        <ul className="space-y-2">
                          {doctor.timings.map((timing, index) => (
                            <li key={index} className="flex">
                              <span className="text-gray-700 font-medium w-20">
                                {timing.day}
                              </span>
                              <span className="text-gray-600 flex-grow">
                                {timing.time}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/appointment/${doctor.id}`}
                        className="flex-1 text-center bg-[#00A297] hover:bg-[#008B8B] text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                      >
                        <FaCalendarAlt className="mr-2" />
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Doctors Section (Same Design as Featured Doctors) */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {otherDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Doctor Image with Overlay */}
                  {/* <div className="md:w-3/4 h-auto md:h-auto relative group overflow-hidden">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          </div> */}

                  {/* Doctor Details */}
                  <div className=" p-6 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {doctor.name}
                      </h3>

                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-500">
                          Designation
                        </h4>
                        <p className="text-[#00A297] font-medium mb-2">
                          {doctor.qualification}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 mb-1">
                            Specialization
                          </h4>
                          <p className="text-gray-700">
                            {doctor.specialization}
                          </p>
                        </div>
                        {/* <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Experience</h4>
                  <p className="text-gray-700">{doctor.experience}</p>
                </div> */}
                      </div>

                      {/* <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-1 flex items-center">
                  <FaClock className="mr-2" /> Available Timings
                </h4>
                <ul className="space-y-2">
                  {doctor.timings.map((timing, index) => (
                    <li key={index} className="flex">
                      <span className="text-gray-700 font-medium w-20">{timing.day}</span>
                      <span className="text-gray-600 flex-grow">{timing.time}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
                    </div>

                    {/* Buttons */}
                    {/* <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <Link
                to={`/doctor/${doctor.slug}`}
                className="flex-1 text-center bg-white border border-[#00A297] text-[#00A297] hover:bg-[#00A297] hover:text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                View Profile
              </Link>
              <Link
                to={`/appointment/${doctor.id}`}
                className="flex-1 text-center bg-[#00A297] hover:bg-[#008B8B] text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-2" />
                Book Now
              </Link>
            </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-r from-[#00A297] to-[#00788C] p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need an Appointment?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                We offer multiple convenient ways to schedule your visit with
                our specialists.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <FaCalendarAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Online Booking</h4>
                    <p className="text-sm text-white/80">
                      24/7 appointment scheduling
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone Call</h4>
                    <p className="text-sm text-white/80">
                      0755-2556620 , 2556669
                    </p>
                    <p className="text-sm text-white/80">7999732232</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Walk-in Clinic</h4>
                    <p className="text-sm text-white/80">
                      Parul Hospital, Shivaji Nagar, Bhopal, Madhya Pradesh
                      462016
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Clinic Hours
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex   border-b text-sm border-gray-100 pb-4">
                  <span className="font-medium text-gray-700">
                    Hospital Open -
                  </span>
                  <span className="text-gray-600 relative left-2 ">24X7</span>
                </li>
                <li className="flex justify-between border-b flex-col border-gray-100 pb-2">
                  <span className="font-medium whitespace-nowrap mb-2 text-gray-700">
                    Monday - Saturday
                  </span>
                  <span className="text-gray-600  whitespace-nowrap  ">
                    Morning 10:00 AM - 2:00 PM{" "}
                  </span>
                  <span className="text-gray-600  whitespace-nowrap  ">
                    {" "}
                    Evening 6:00 PM to 8:00 PM{" "}
                  </span>
                </li>
              </ul>
              <a
                href="https://maps.app.goo.gl/qERf9szeBaGj3B398"
                className="inline-flex items-center justify-center bg-[#00A297] hover:bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl w-full text-center"
              >
                Get Directions to Clinic
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
