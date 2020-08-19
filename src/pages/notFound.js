import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    return (
        <div className="page not-found-page">
            <div className="widget info-widget">
                <div className="header">
                    <h3>The page you requested is not found</h3>
                </div>
                <div className="info-form">
                    <button minimal={true} onClick={() => (history.push('/home'))}>go to Home page</button>
                </div>
            </div>
        </div>
    )
};

export default NotFound;