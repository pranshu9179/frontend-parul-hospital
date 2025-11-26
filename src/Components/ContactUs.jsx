import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { createInquiry } from "../Redux/inquiries/inquiryThunks";
import { clearMessages } from "../Redux/inquiries/inquirySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector(
    (state) => state.inquiry
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inquiryData = {
      ...formData,
      callbackTime: formData.requestCallback ? new Date().toISOString() : null,
    };

    await dispatch(createInquiry(inquiryData));

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, { position: "top-right" });
      dispatch(clearMessages());
    }
    if (error) {
      toast.error(error, { position: "top-right" });
      dispatch(clearMessages());
    }
  }, [successMessage, error, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO — META TAGS */}
      <Helmet>
        <title>Contact Parul Hospital – Get in Touch for Appointments</title>
        <meta
          name="description"
          content="Reach out to Parul Hospital in Bhopal for appointments, inquiries, or emergencies. Call us or fill the contact form today."
        />
      </Helmet>

      <ToastContainer />
      {/* Header */}
      <div className="text-center mb-2 pt-12">
        <h1 className="text-2xl font-bold text-[#161B38] sm:text-3xl">
          Contact <span className="text-[#00A297]">Parul</span> Hospital
        </h1>
        <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
          We're here to help you with all your healthcare needs. Reach out to us
          anytime
        </p>
      </div>

      {/* Contact Info + Map */}
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Contact Info */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <FaPaperPlane className="text-[#00A297] mr-2" /> Get in Touch
            </h2>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-[#00A297] text-xl mt-1" />
              <p className="text-gray-700">
                Parul Hospital, Shivaji Nagar, Bhopal, Madhya Pradesh 462016
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-[#00A297] text-xl" />
              <p className="text-gray-700">0755-2556620, 0755-2556669</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaMobileAlt className="text-[#00A297] text-xl" />
              <p className="text-gray-700">+91 7997732332</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#00A297] text-xl" />
              <p className="text-gray-700">parulhospital123@gmail.com</p>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <iframe
              title="Parul Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.4301673976424!2d77.42951067477625!3d23.227428508653443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c425c42f5ade5%3A0x98ee20e54c77a162!2sPARUL%20HOSPITAL%20I%20MULTISPECIALITY%20HOSPITAL!5e0!3m2!1sen!2sin!4v1757323817135!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
