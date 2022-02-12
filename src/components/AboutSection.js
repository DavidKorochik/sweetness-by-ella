import React from 'react';
import home1 from '../img/home1.png';
import cake2 from '../img/cake2.jpg';
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
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
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
          Contact us for any home made cake that you need for any type of
          activity. We have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt='guy with a camera' />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
