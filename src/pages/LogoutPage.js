import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutPage = props => {
    const history = useHistory();
    localStorage.removeItem('userLogin');
    return (
        <div className="page center">
            You have been logged out.
            <button onClick={ () => history.push('login') }>go to Login Page</button>
        </div>
    );
}

export default LogoutPage;