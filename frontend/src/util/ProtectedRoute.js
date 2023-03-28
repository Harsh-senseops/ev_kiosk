import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
const ProtectedRoute = ({Component,roles}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log("I ran from login",isLoggedIn)
   
    const checkUserToken = () => {
        const userToken = localStorage.getItem('isLoggedIn');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
       return navigate("/authentication/sign-in/basic")
        }
        setIsLoggedIn(true);
    }
    // checkUserToken()
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