import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Slicedata/Userslice";
export const store = configureStore({
    reducer:{
        users : userSlice
    }
})