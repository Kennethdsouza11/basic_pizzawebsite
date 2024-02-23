import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GmailIcon from '@mui/icons-material/Mail';
import "../styles/Footer.css";


function Footer(){
    return (
    <div className = "footer">
        <div className = "socialMedia">
            <GmailIcon/>
            <GitHubIcon/>
            <LinkedInIcon/>
            
        </div>
        <p> &copy; 2024 kennethpizza.com</p>
    </div>
    );
}

export default Footer;