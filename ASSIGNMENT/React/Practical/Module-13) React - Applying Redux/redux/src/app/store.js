import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "../Features/Counter/countSlice";

import  todoSlice  from "../Features/Todo/todoSlice";

export const store = configureStore({
    reducer:{
        counter : countSlice,
        todo: todoSlice
        
    }
})