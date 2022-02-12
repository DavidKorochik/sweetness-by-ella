import React from 'react';
import { About, Description, Image, Hide } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>your day become</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>sweetier</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any home made cake that you need for any type of
          activity 🍰.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src='https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt='birthday cake'
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
