// App.js
import { Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
// import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import HomePage from "./Home/HomePage";
import Doctor from "./Components/DoctorsPage";
import DoctorProfile from "./Components/DoctorProfile'";
import Departments from "./Components/Departments";
import EnquiryPage from "./Components/EnquiryPage ";
import FacilityGallery from "./Components/FacilityGallery";
import LegalPage from "./Components/LegalPage";
import AdminPanel from "./Components/Admin/AdminPanel";
import AppointmentPage from "./Components/AppointmentPage";
import Login from "./Components/Login";
import OurMilestone from "./Components/OurMilestone";
import Scrolltop from "./Components/Scroll-Top/Scrolltop";
import ThankYou from "./Components/Thankyou"; // adjust path as needed

import SAAS from "./Components/Saas";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <Scrolltop />
      <Routes>
        <Route path="Adminpanel" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/saas" element={<SAAS />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="doctor/:id" element={<DoctorProfile />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/enquiryPage" element={<EnquiryPage />} />
          <Route path="/facilitygallery" element={<FacilityGallery />} />
          <Route path="/legalpage" element={<LegalPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* <Route path="Admin-panel" element={<AdminPanel/>} /> */}

          <Route path="/appointment/:id" element={<AppointmentPage />} />
          {/* <Route path="/appointment/:doctorId" element={<AppointmentPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
