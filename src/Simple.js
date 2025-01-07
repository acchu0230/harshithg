import React from "react";
import '@fontsource/inter';
import { Link } from 'react-router-dom';
import './global.css';
import './Simple.css';

const Simple = () => {
    return (
        <header>
            <h1>Welcome To HARSHITH G Portfolio</h1>
            
            <nav>
                <ul>
           <li> <Link to="/myinfo">About</Link></li>
           <li><Link to="/education">Qualification</Link></li>
           <li> <Link to="/skills">Skills</Link></li>
           <li> <Link to="/project">Projects</Link></li>
           <li> <Link to="/contact">Reach Me</Link></li>
            </ul>
            </nav>
        </header>
    );
    
}

export default Simple;






