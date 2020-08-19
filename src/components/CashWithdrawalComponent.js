import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CashWithdrawalComponent = (props) => {
    const history = useHistory();
    const accDetails = { id: 1234, name: 'Suhas Bhosale', accType: 1, balance: 75000, dayLimit: 10000 }
    const acTypes = [{ id: 1, name: 'Saving'}, {id: 2, name: 'Current'}];

    const [acType, setAcType] = useState({});
    const [amount, setAmount] = useState(0);
    const [amountWithdrawn, setAmountWithdrawn] = useState(0);
    const [balance, setBalance] = useState(accDetails.balance);
    const [isAmount, setIsAmount] = useState(0);

    const withdrawAmount = (ev) => {
        if(amount % 100 === 0) {
            if((Number(amount) + amountWithdrawn) < accDetails.dayLimit) {
                if(amount < balance) {
                    setBalance(balance - amount);
                    setAmountWithdrawn(amountWithdrawn + Number(amount));
                    setAmount(0);
                    alert('Transaction Successful')
                } else alert('Insufficient balance');
            } else alert(`Daily limit is ${accDetails.dayLimit}`);
        } else alert('Amount is not valid');
    }
    return (
        <div className="card login-card center">
            <div className="form-group">
                <label>Account type</label>
                <select onChange={ el => setAcType(el) }>
                    { acTypes.map( el => <option key={el.id}>{el.name}</option> ) }
                </select>
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input type="number" name="amount" value={amount} id="amount" onChange={ ev => {
                    setAmount(ev.target.value);
                    setIsAmount(ev.target.value >= 100);
                } } />
            </div>
            <div className="form-group center-h">
                <button id="withdrawBtn" className="btn" onClick={ ev => withdrawAmount(ev) } 
                    disabled={!isAmount}>Withdraw {(amount >= 100 ? amount : '')}</button>
            </div>
            <p>Account Balance: {balance}</p>
            <p>Today Withdrawn: {amountWithdrawn}</p>
        </div>
    );
}

export default CashWithdrawalComponent;