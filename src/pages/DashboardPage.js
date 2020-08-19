import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import LoginRef from '../components/LoginRef';

const DashboardPage = props => {
    const history = useHistory();
    const userLogin = localStorage.getItem('userLogin');
    if(!userLogin) history.push('login');
    return (
        <div className="page">
            <LoginComponent />
            <LoginRef />
        </div>
    );
}

export default DashboardPage;