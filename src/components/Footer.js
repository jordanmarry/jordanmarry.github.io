import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className='text-white pb-20'>
            <p className="text-lg">Built by Jordan</p>
            <p className="text-lg">All rights reserved. ©</p>
            <div className="flex flex-row">
                <a
                    target="_blank"
                    href="mailto:jordan.a.marry@gmail.com"
                    className="pr-3 text-light-blue hover:text-white"
                >
                    <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
                </a>
                <a
                    target="_blank"
                    href="https://github.com/jordanmarry"
                    className="pr-3 text-light-blue hover:text-white"
                >
                    <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jordanmarry"
                    className="text-light-blue hover:text-white"
                >
                    <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </a>
            </div>
        </div>
    );
}

export default Footer;
