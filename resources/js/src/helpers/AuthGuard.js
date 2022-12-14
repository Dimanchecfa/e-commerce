import React  from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged} from './../service/account.service';


const AuthGuard = ({children}) => {
    
    if(!isLogged()) {
        return <Navigate to="/auth/login" />
    }
    return children  
};

export default AuthGuard;