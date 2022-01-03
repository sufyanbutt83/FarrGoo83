import React from 'react';
import { NavLink } from 'react-router-dom';
// import './errorpage.css';

function Errorpage()
{
    return (
        
        <div id="notfound">
            <div className="notfound">
                <h1>404</h1>
            </div>
            <h2>We are sorry, page not found</h2>
            <p className="mb-5">
                The page you are looking might have been removed
                had its name changed or is temporarily unavailabl
            </p>
            <NavLink to="/">Baack to HomePage</NavLink>
        </div>
        
    );
}

export default Errorpage;
