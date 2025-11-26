// // components/HomePage.jsx
// import Hero from "../Components/Hero";
// import AboutUs from "../Components/AboutUs";
// import Services from "../Components/Services";
// import ContactUs from "../Components/ContactUs";
// import FacilityGallery from "../Components/FacilityGallery";
// import PatientStories from "../Components/PatientStories";
// import DoctorFAQ from "../Components/DoctorFAQ";
// import DoctorBoxes from "../Components/DoctorBoxes";
// import OurMilestone from "../Components/OurMilestone";

// const HomePage = () => {
//   return (
//     <>
//       <Hero />
//       <AboutUs />
//       <DoctorBoxes/>
//       <Services />
//       <FacilityGallery/>
//       <OurMilestone/>
//       <PatientStories/>
//       <ContactUs />

//       {/* <DoctorFAQ/> */}
//     </>
//   );
// };

// export default HomePage;





import { Helmet } from "react-helmet";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import ContactUs from "../Components/ContactUs";
import FacilityGallery from "../Components/FacilityGallery";
import PatientStories from "../Components/PatientStories";
import DoctorFAQ from "../Components/DoctorFAQ";
import DoctorBoxes from "../Components/DoctorBoxes";
import OurMilestone from "../Components/OurMilestone";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Parul Hospital – Multi-Specialty Hospital in Bhopal</title>
        <meta
          name="description"
          content="Parul Hospital offers advanced medical care across specialties like urology, neurology, oncology, orthopaedics and more. Book your appointment today!"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero />
      <AboutUs />
      <DoctorBoxes />
      <Services />
      <FacilityGallery />
      <OurMilestone />
      <PatientStories />
      <ContactUs />
    </>
  );
};

export default HomePage;
