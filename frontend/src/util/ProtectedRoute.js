import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
const ProtectedRoute = ({Component}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
    const checkUserToken = () => {
        if (!isLoggedIn || isLoggedIn === 'undefined' || isLoggedIn === "false") {
       navigate("/authentication/sign-in/basic")
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