import axios from "axios";

const axiosInstance = axios.create({
    // baseURL:"http://localhost:5000/api",
     baseURL:"https://server-parul-hospital.onrender.com/api",
    //  baseURL:"https://backend.parulhospital.in/api",

    withCredentials:true
});



export default axiosInstance