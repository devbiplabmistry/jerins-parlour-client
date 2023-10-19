import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Main from "../layouts/Main";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import Book from "../pages/customer/book/Book";
import Review from "../pages/customer/review/Review";
import ServiceList from "../pages/customer/serviceList/ServiceList";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard/book",
                element:<Book></Book>
            },
            {
                path:"/dashboard/booking-list",
                element:<ServiceList></ServiceList>
            },
            {
                path:"/dashboard/review",
                element:<Review></Review>
            },
        ]
    
    }
   
]);