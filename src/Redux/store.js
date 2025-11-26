 import  {configureStore} from "@reduxjs/toolkit"
 import appointmentReducer from "../Redux/appointment/appointmentSlice"
 import userReducer from "../Redux/users/usersSlice"
 import inquiryReducer from "../Redux/inquiries/inquirySlice"



 const store = configureStore({
    reducer:{
      user: userReducer,
      appointment: appointmentReducer,
      inquiry: inquiryReducer

    }
 })

 export default store