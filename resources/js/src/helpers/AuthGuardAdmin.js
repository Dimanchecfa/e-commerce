import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuardAdmin = ({children}) => {

    



   

    if(!loggedAdmin) {
        return <Navigate to="/auth/login" />
    }
    return children
}
    


export default AuthGuardAdmin;