import React from 'react';
import LoginComponent from '../components/LoginComponent';
import LoginRef from '../components/LoginRef';

const LoginPage = props => {
    return (
        <div className="page center">
            <LoginComponent />
            <LoginRef />
        </div>
    );
}

export default LoginPage;