

import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import drprakhar from "../assets/doctors/prakhar.jpg";
import news from "../assets/doctors/news.jpg";
import pankaj from "../assets/doctors/passpankaj.jpg";
import meeta from "../assets/doctors/passmeeta.jpg";

import image from "../assets/new.jpg"
import  mam  from "../assets/mam2.jpg"

const DoctorBoxes = () => {
  const featuredDoctors = [
   {
    id: 1,
    name: "Dr. Prakhar Agarwal",
    specialization: "DM (AIIMS) - Pulmonary Critical Care & Sleep Medicine MD, DNB, MNAMS, DAA (CMC Vellore)",
    image: image,
    timing: (
      <>

       Interventional Pulmonologist, Allergy, Asthma & Sleep Specialist

      </>
    ),
  },
    {
      id: 2,
      name: "Dr. Kirti Kadian",
      specialization: "DM (AIIMS) - Pulmonary Critical Care & Sleep Medicine, MD",
      image:  news,
      timing: "Interventional Pulmonologist, Interstitial Lung Disease, Pulmonary Rehabilitation & Sleep Specialist",
    },
    {
      id: 4,
      name: "Dr. Pankaj Agarwal",
      specialization: "MD Medicine",
      image: pankaj,
      timing: "Consulting Physician (Diabetes, Hypertension, Cardiac & Gastric Illness Specialist)",
      fee: "35+ YEARS OF EXPERIENCE",
    },
    {
      id: 3,
      name: "Dr. Meeta Agarwal",
      specialization: "MD Obstetrics & Gynaecology",
      image: meeta,
      timing: `Gold medalist FICOG, CIMP  `,
      fee: "35+ YEARS OF EXPERIENCE",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#192131]">
          Our <span className="text-[#00A297]">Medical</span> Experts
        </h2>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="group bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Doctor Info */}
            <div className="p-5">
              <div className="flex items-start space-x-4">
                {/* Image */}
                <div className="relative flex-shrink-0">
                <img
  src={doctor.image}
  alt={doctor.name}
  className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#00A297] group-hover:border-[#008B8B] transition-colors shadow-md"
/>

                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-bold whitespace-nowrap text-gray-800 group-hover:text-[#00A297] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-[#00A297] text-sm  ">
                    {doctor.specialization}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 whitespace-pre-line">
                    {doctor.timing}
                  </p>

                </div>
              </div>
              {doctor.fee && (
                    <div className=" md:ml-11 ml-28 mt-1 text-sm text-black font-semibold">
                      Exp: <span className="whitespace-nowrap text-gray-600  text-[12px]">{doctor.fee}</span>

                    </div>
                  )}
            </div>

            {/* Buttons */}
            <div className="px-5 pb-5 mt-auto">
              <div className="flex flex-col space-y-3">
                <Link
                  to={`/appointment/${doctor.id}`}
                  className="flex items-center justify-center w-full bg-[#00A297] hover:bg-[#008B8B] text-white py-2 px-4 rounded-lg text-sm font-medium transition"
                >
                  <FaCalendarAlt className="mr-2" size={14} />
                  Book Appointment
                </Link>

               <Link
  to={`/doctor?id=${doctor.id}`}
  className="flex items-center justify-center w-full border border-[#00A297] text-[#00A297] hover:bg-[#00A297]/5 py-2 px-4 rounded-lg text-sm font-medium transition"
>
  View
</Link>

              </div>

            </div>

          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-4">
   <Link
      to="/doctor"
      className="inline-block bg-[#00A297] text-white font-medium px-6 py-3 text-center m-auto  rounded-lg shadow-md hover:bg-[#008b82] transition-all duration-300"
    >
      Other Doctors And Departments
    </Link>
      </div>

    </div>
  );
};

export default DoctorBoxes;
