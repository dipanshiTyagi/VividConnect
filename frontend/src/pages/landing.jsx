import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {

    let navigate = useNavigate();
    
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>VividConnect</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => navigate('/gdhciau')}>Join as Guest</p>
                    <p onClick={() => navigate('/auth')}>Register</p>
                    <div role='button' onClick={() => navigate('/auth')}><p>Login</p></div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved ones</h1>
                    <p>Cover a distance by VividConnect</p>
                    <div role="button">
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt=" " />
                </div>
            </div>

        </div>
    )
}