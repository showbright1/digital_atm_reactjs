import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CashWithdrawalComponent from '../components/CashWithdrawalComponent';

const CashWithdrawalPage = props => {
    const history = useHistory();
    
    return (
        <div className="page center-h">
            <CashWithdrawalComponent />
        </div>
    );
}

export default CashWithdrawalPage;