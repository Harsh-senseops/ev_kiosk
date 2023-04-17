import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
const ProtectedRoute = ({Component,roles}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('TOKEN_KEY'));
    console.log("I ran from login",isLoggedIn)
   
    const checkUserToken = () => {
        if (!isLoggedIn) { 
        navigate("/authentication/sign-in/basic")
        return;
        }
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
       
    return (
        <React.Fragment>
           <Component/>
        </React.Fragment>
    );
}
export default ProtectedRoute;