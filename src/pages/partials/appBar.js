import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AppHeader = (props) => {
    const [ userLogin, setUserLogin ] = useState(false);

    useEffect( () => {
        setUserLogin( (localStorage.getItem('userLogin') === 'success') );
    }, [] );

    return (
        <div className="app-bar app-header" >
            <h2>Logo</h2>
            
            <div className="app-nav">
                <ul>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li><Link to="bank">Bank</Link></li>
                    <li><Link to="fund-transfer">Fund Transfer</Link></li>
                    <li><Link to="cash-withdrawal">Cash Withdrawal</Link></li>
                    <li><Link to="logout">Logout</Link></li>
                </ul>
            </div> 
        </div>
    )
}

const AppFooter = () => (
    <div className="app-bar app-footer" >
        <div>All rights reserved</div>
    </div>
)

const AppBar = { AppHeader, AppFooter };

export default AppBar;
