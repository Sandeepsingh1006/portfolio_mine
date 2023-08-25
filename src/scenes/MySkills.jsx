import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-lg">
          "Unleashing the Power Within: Transforming Complexity into Seamless Solutions with Technical Expertise and Creative Vision!"
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* CORE JAVA */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
               CORE JAVA
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-36 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
          Proficient in Core Java, object-oriented programming, multithreading, and exception handling, I build reliable and high-performance software.
          </p>
        </motion.div>

        {/* Data Structures and Algorithms */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-2">
                Data Structures & Algorithms
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-36 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
          Skilled in Data structures and Algorithms, I possess a strong understanding of efficient data organization and problem-solving techniques to develop optimized and scalable solutions.
          </p>
        </motion.div>
        {/* Front-end web development */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Front-End Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-36 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
          Proficient in Front-End Web Development, I excel in HTML, CSS, JavaScript, and React framework, leveraging these skills to create captivating and interactive user interfaces with seamless functionality.
          </p>
        </motion.div>
      </div>
      <div className="md:flex md:justify-between mt-10 gap-32">
        {/* operating system*/}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">04</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Operating System
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-36 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
          Experienced in operating systems, I possess a solid understanding of the core concepts, functionalities, and principles that govern the management and coordination of computer resources, processes, memory, file systems, and more.
          </p>
        </motion.div>

        {/* Database management system */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-36">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">05</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Database Management System
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-36 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
          Proficient in database management systems, I have a strong grasp of the principles, design, and implementation of databases. I am skilled in data modeling, query optimization, database administration, and utilizing technologies like MySQL to create efficient and secure data solutions.
          </p>
        </motion.div>
        {/* Soft skill */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">06</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                SOFT SKILLS
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
          With well-honed soft skills, I possess excellent communication, problem-solving, and teamwork abilities, coupled with adaptability, creativity, and a strong work ethic. I excel at collaborating with others, adapting to new challenges, and effectively conveying ideas, making me a valuable asset in any professional setting.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
