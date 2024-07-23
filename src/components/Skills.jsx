import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import  dsaLogo  from "../assets/dsaLogo.png";
import {motion} from 'framer-motion'
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const iconMotion = (duration) =>({
    initial : {y : -10},
    animate :{
        y : [10 , -10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse"
        }
    }
})

const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 ' id="skills">
        <motion.h2
         whileInView = {{opacity : 1 , y : 0}}
         initial = {{opacity : 0 , y : -100}}
         transition = {{duration : 1.5}}
        className='my-20 text-center text-4xl'>Programming <span className="text-neutral-500">Skills</span></motion.h2>
        <motion.div
        whileInView = {{opacity : 1 , x : 0}}
        initial = {{opacity : 0 , x : -100}}
        transition = {{duration : 1.5}}
        className='flex flex-wrap items-center justify-center gap-12 '>
            <motion.div
            variants = {iconMotion(2.5)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <img className="w-[4.5rem] h-[4.5rem] " src={dsaLogo} alt="DSA" />
            </motion.div>
            <motion.div
            variants = {iconMotion(3)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <FaHtml5 className="text-7xl text-orange-500 "/>
            </motion.div>
            <motion.div
            variants = {iconMotion(3.5)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <FaCss3Alt className="text-7xl text-blue-600 "/>
            </motion.div>
            <motion.div
            variants = {iconMotion(4)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className="text-7xl text-cyan-300 "/>
            </motion.div>
            <motion.div
            variants = {iconMotion(4.5)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className="text-7xl text-yellow-300 "/>
            </motion.div>
            <motion.div
            variants = {iconMotion(5)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <FaReact className="text-7xl text-cyan-500 " />
            </motion.div>
            <motion.div
            variants = {iconMotion(2.5)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <FaNodeJs className="text-7xl text-green-500 " />
            </motion.div>
            <motion.div
            variants = {iconMotion(3)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <SiExpress className="text-7xl text-white " />
            </motion.div>
            <motion.div
            variants = {iconMotion(3.5)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <SiMongodb className="text-7xl text-green-800 " />
            </motion.div>
            <motion.div
            variants = {iconMotion(4)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <RiNextjsFill className="text-7xl text-white " />
            </motion.div>
            <motion.div
            variants = {iconMotion(4.5)}
            initial = "initial"
            animate = "animate" 
            className='rounded-full border-4 border-neutral-800 p-4'>
                <SiTypescript className="text-6xl text-blue-500" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills
