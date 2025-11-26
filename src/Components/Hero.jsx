

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hospital from "../assets/Hospital.jpg";
import { FaStar, FaStarHalfAlt, FaGoogle } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "SAAS CENTRE",
    full: "Superspeciality Asthma, Allergy & Sleep Centre",
    highlight: "Specialty Care",
    description: "Led by DM PULMONOLOGISTS",
    bgImage: Hospital,
    cta: "Consult Now",
    emergency: "Clinic Helpline: (555) 333-4444",
    rating: 4.5,
    reviewSource: "justdial",
    features: [
      { icon: "🔬", text: "Advanced Diagnostics" },
      { icon: "👩‍⚕️", text: "Specialist Consultations" },
      { icon: "💊", text: "Preventive Care" },
    ],
    stats: [
      { value: "30+", label: "Specialists Available" },
      { value: "15+", label: "Medical Departments" },
    ],
  },
  {
    id: 2,
    title: "LEVEL 1 SLEEP LAB",
    highlight: "Sleep Wellness",
    full: "Most Advanced Sleep of Bhopal",
    description: "With Manual CPAP/BiPAP/AVAPS titration facility",
    bgImage: Hospital,
    cta: "Book Sleep Test",
    emergency: "Helpdesk: (555) 111-2222",
    rating: 4.8,
    reviewSource: "google",
    features: [
      { icon: "🛏️", text: "Overnight Monitoring" },
      { icon: "🧠", text: "Brain Wave Analysis" },
      { icon: "😴", text: "Sleep Apnea Treatment" },
    ],
    stats: [
      { value: "95%", label: "Accurate Diagnosis" },
      { value: "24/7", label: "Patient Support" },
    ],
  },
  {
    id: 3,
    title: "Interventional Pulmonology & Advanced Critical Care Unit",
    highlight: "Rapid Response",
    full: "",
    description:
      "Adult & Pediatric Flexible Bronchoscopy, Foreign Body Removal, Thoracoscopy",
    bgImage: Hospital,
    cta: "Call Emergency Now",
    emergency: "Emergency: (555) 555-6666",
    rating: 4.5,
    reviewSource: "google",
    features: [
      { icon: "🚑", text: "Ambulance Service" },
      { icon: "⚕️", text: "Critical Care Unit" },
      { icon: "🆘", text: "Trauma Center" },
    ],
    stats: [
      { value: "24/7", label: "Emergency Support" },
      { value: "5 min", label: "Response Time" },
    ],
  },
  {
    id: 4,
    title: "Allergy Testing & Treatment",
    full: "",
    highlight: "Life-Saving Services",
    description:
      "Allergy Skin prick Testing, Allergy Immunotherapy for children and adults, for children & Adults",
    bgImage: Hospital,
    cta: "Know More",
    emergency: "ICU Helpline: (555) 777-8888",
    rating: 4.9,
    reviewSource: "justdial",
    features: [
      { icon: "🏥", text: "Advanced ICU" },
      { icon: "🩺", text: "24x7 Monitoring" },
      { icon: "🫀", text: "Ventilator Support" },
    ],
    stats: [
      { value: "20+", label: "ICU Beds" },
      { value: "99%", label: "Recovery Rate" },
    ],
  },
  {
    id: 5,
    title: "24x7 Emergency Services",
    highlight: "Rapid Response",
    full: "Round the clock Expert care",
    description: "",
    bgImage: Hospital,
    cta: "Call Emergency Now",
    emergency: "Emergency: (555) 555-6666",
    rating: 5,
    reviewSource: "google",
    features: [
      { icon: "🚑", text: "Ambulance Service" },
      { icon: "⚕️", text: "Critical Care Unit" },
      { icon: "🆘", text: "Trauma Center" },
    ],
    stats: [
      { value: "24/7", label: "Emergency Support" },
      { value: "5 min", label: "Response Time" },
    ],
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const current = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Auto-scroll every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    return (
      <>
        {Array(full)
          .fill()
          .map((_, i) => (
            <FaStar key={`f-${i}`} className="text-yellow-400 mr-1" />
          ))}
        {half && <FaStarHalfAlt className="text-yellow-400 mr-1" />}
      </>
    );
  };

  return (
    <>
      <div className="relative h-[300px] md:h-[380px] lg:h-[550px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.bgImage})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative h-full flex items-center z-10 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white max-w-2xl"
              >
                <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm mb-3 border border-white/20">
                  {current.highlight}
                </div>

                <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 leading-tight">
                  {current.title}
                </h1>
                <h1 className="text-xl md:text-3xl font-bold">{current.full}</h1>

                <p className="text-sm md:text-xl mb-4 leading-relaxed max-w-lg">
                  {current.description}
                </p>

                {/* Reviews */}
                <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm p-3 rounded-lg w-fit">
                  <div className="flex items-center">
                    {current.reviewSource === "google" ? (
                      <FaGoogle className="text-white mr-2 text-lg" />
                    ) : (
                      <span className="text-white bg-[#F06543] px-2 py-0.5 rounded font-bold mr-2 text-sm">
                        JD
                      </span>
                    )}
                    {renderStars(current.rating)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="px-2 md:px-72 mt-2 relative z-20">
        <div className="flex md:flex-row items-center justify-between bg-[#00A297] text-white rounded-lg p-2 shadow-lg">
          <div className="flex items-center md:mb-0">
            <span className="text-[14px] md:text-xl font-medium">
              Call for Appointment
            </span>
          </div>
          <a
            href="tel:+7997732332"
            className="bg-white text-[#00A297] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition flex items-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
