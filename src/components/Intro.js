import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import photo from '../../public/images/photo.jpg'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Image from 'next/image'

const Intro = () => {
  return (
    <div id='home' className='flex flex-col pb-48'>

      <motion.div
          initial={{ y: '-25%', opacity: 0 }} 
          animate={{ y: '0%', opacity: 1 }} 
          transition={{duration:1.1}}
          className="z-[-1]"
      >
          <Image 
            src={photo}
            width={450}
            height={450}
            alt="Jordan Photo"
            className='rounded-3xl'
          />
      </motion.div>

      <div className='flex flex-col pt-6'>
        <div className='font-bold text-7xl pb-2'>
          <TypeAnimation className='text-light-blue'
            sequence={[
              'hey. i\'m jordan. '
            ]}
            repeat={0}
          />
        </div>
          
        <motion.div className='text-5xl text-grey pb-2 max-w-full'
          initial={{ y: '100%', opacity: 0 }} 
          animate={{ y: '0%', opacity: 1 }} 
          transition={{duration:0.75}}
        >
          I like creating stuff.
        </motion.div>
        <motion.div className='max-w-full text-2xl text-grey md:max-w-2xl'
          initial={{ y: '50%', opacity: 0 }} 
          animate={{ y: '0%', opacity: 1 }} 
          transition={{duration:1.1}}
        >
          I&apos;m a software engineer based in Maryland. I have great interest in full-stack development and everything in between. I love to make ideas come to life through software.
        
          <div className='pt-8'>
            <a href='mailto:jordan.a.marry@gmail.com' className="text-2xl text-light-blue font-bold py-2 px-8 cursor-pointer border border-light-blue rounded-md hover:text-white hover:border-white">
                <EmailRoundedIcon></EmailRoundedIcon>
                {"  " + "Say Hello!"}
            </a>
          </div>
        
        </motion.div>

        
      </div>
      

    </div>
  );
};

export default Intro;