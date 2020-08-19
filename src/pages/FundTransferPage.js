import React from 'react';
import { useHistory } from 'react-router-dom';


const FundTransferPage = props => {
    const history = useHistory();
    const userLogin = localStorage.getItem('userLogin');
    if(!userLogin) history.push('login');
    return (
        <div className="page center">
            Fund Transfer page
        </div>
    );
}

export default FundTransferPage;