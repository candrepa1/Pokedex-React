import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './provider/AuthProvider.js';

const ProtectedRoute = ({ children, ...props}) => {
    const {user} = useAuth();
    return(
        <Route {...props}  render={() => (user.user ? children : <Redirect to="/"/>)}/>
    );
}

export default ProtectedRoute;