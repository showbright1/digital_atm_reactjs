import React from 'react';
import { useHistory } from 'react-router-dom';

const BankPage = props => {
    const history = useHistory();
    const userLogin = localStorage.getItem('userLogin');
    if(!userLogin) history.push('login');
    return (
        <div className="page center">
            Bank page
        </div>
    );
}

export default BankPage;