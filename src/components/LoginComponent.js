import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginComponent = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const checkLogin = (ev) => {
        if(username === 'username') {
            if(password === 'password') {
                history.push('dashboard');
                localStorage.setItem('userLogin', 'success');
            } else alert('Wrong password');
        } else alert('Username is not registered');
    }
    return (
        <div className="card login-card center">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username} id="username" onChange={ ev => {
                    setUsername(ev.target.value);
                    setIsValidUsername(ev.target.value.length > 3);
                } } />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} id="password" onChange={ ev => {
                    setPassword(ev.target.value);
                    setIsValidPassword(ev.target.value.length > 6);
                } } />
            </div>
            <div className="form-group center-h">
                <button id="loginBtn" className="btn" onClick={ ev => checkLogin(ev) } 
                    disabled={!isValidUsername || !isValidPassword}>Login</button>
            </div>
        </div>
    );
}

export default LoginComponent;