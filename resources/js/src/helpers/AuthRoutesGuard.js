import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isLogged } from '../service/account.service';

const AuthRouteLogin = ({children}) => {
    let navigate = useNavigate();
    if(isLogged()) 
    {
         return children; 
        
    }


   
};

export default AuthRouteLogin;