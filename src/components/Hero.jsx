import { motion } from "framer-motion";

import { styles } from "../styles";
import { FoxCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#80ed99]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className='text-[#80ed99]'>Harrod</span>
          </h1>
          <TypeAnimation 
            className={`${styles.heroSubText} mt-2 text-white-100`}
            sequence={[
              'I\'m currently a software engineer at DoorDash.',
              1000,
              'I\'ve built and worked with services that operate at very high scale.',
              1000,
              'I have extensive experience in full stack development.',
              1000,
              'I have extensive experience in cloud and devops engineering.',
              1000,
              'I have extensive experience in platform engineering.',
              1000,
            ]}
            speed={60}
            repeat={Infinity}
          />
        </div>
      </div>

      <FoxCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
