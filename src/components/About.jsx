import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { links } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { harrod } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full yellow-green-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ProfileCard = ({ image }) => (
  <Tilt className='w-full h-full'>
    <motion.div
      variants={fadeIn("left", "spring", 0.5, 0.75)}
      className='w-full h-full yellow-green-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] w-full h-full flex justify-center items-center'>
        <img
          src={image}
          alt='profile'
          className='w-full h-full object-cover rounded-[20px]'
        />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Flex container for text and image */}
      <div className='flex flex-col md:flex-row gap-10 mt-4'>

        {/* Text Section */}
        <div className='flex-1'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>A bit about me.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a software engineer with experience in building applications and services from the ground up, taking them from architecture through development. 
            I've also gained a lot of cloud and devops experience by deploying and managing these services at high scale over Kubernetes and AWS.
            When I'm not coding, you'll find me out on the golf course or in the gym!
          </motion.p>
        </div>

        {/* Profile image section */}
        <div className='flex-shrink-0 w-full md:w-1/4 h-auto'>
          <ProfileCard image={harrod} />
        </div>
      </div>

      {/* Service Cards */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {links.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
