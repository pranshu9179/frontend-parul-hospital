import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import  { Provider } from "react-redux"
import store from './Redux/store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <>
    <App />
      <ToastContainer />
    </>
  </Provider>
  </BrowserRouter>
)
  


// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./Redux/store.js";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { HelmetProvider } from "react-helmet-async"; // ✅ Added

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <HelmetProvider>   {/* ✅ Wrap the entire app */}
//         <>
//           <App />
//           <ToastContainer />
//         </>
//       </HelmetProvider>
//     </Provider>
//   </BrowserRouter>
// );
