import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {

  function top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const links = [
    <motion.div
      key="0"
      className="text-light-blue font-bold hover:text-white pb-1"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" scroll={false} onClick={top}> /home </Link>
    </motion.div>,

    <motion.div
      key="1"
      className="text-light-blue font-bold hover:text-white pb-1"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <Link href="/#about" scroll={false}> /about </Link>
    </motion.div>,

    <motion.div
      key="2"
      className="text-light-blue font-bold hover:text-white pb-1"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link href="/#experience" scroll={false}> /experience </Link>
    </motion.div>,

    <motion.div
      key="3"
      className="text-light-blue font-bold hover:text-white pb-1"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{ duration: 1.25 }}
    >
      <Link href="/#projects" scroll={false}> /projects </Link>
    </motion.div>,
  ];

  return (
    
    <div className="hidden sm:block flex flex-col items-end fixed bottom-10 right-0 pr-16 text-lg">
      {links.map((link, index) => (
        <React.Fragment key={index}>{link}</React.Fragment>
      ))}
      <motion.div
        className="pt-3 w-100 flex flex-row justify-around"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Navbar;
