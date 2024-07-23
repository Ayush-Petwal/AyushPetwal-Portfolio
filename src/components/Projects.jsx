import React from 'react';
import { PROJECTS } from '../constants';
import {motion} from 'framer-motion';
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' id='projects'>
      <motion.h2
      whileInView = {{opacity : 1 , y : 0}}
      initial = {{opacity : 0 , y : -100}}
      transition = {{duration : 0.8}} 
      className='my-20 text-center text-4xl '>Projects</motion.h2>
      <div>
        {PROJECTS.map((project , index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center '>
            <motion.div 
            whileInView = {{opacity : 1 , x : 0}}
            initial = {{opacity : 0 , x : -100}}
            transition = {{duration : 0.8}}
            className='w-full lg:w-1/4'>
              <img width={150} height={150} src={project.image} alt={project.title} className='mb-6 rounded' />
              <div className='flex gap-6 mb-3'>
                <a href={project.github} target='_blank'>< FaGithub className='text-2xl text-white ' /></a>
                <a href={project.livelink} target='_blank'>< CiLink className='text-3xl text-white ' /></a>
              </div>
            </motion.div>
          <motion.div
          whileInView = {{opacity : 1 , x : 0}}
          initial = {{opacity : 0 , x : 100}}
          transition = {{duration : 0.8}} 
          className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{project.title}</h6>
            <p className='mb-4 text-neutral-400'>{project.description} </p>
            
            { project.technologies.map((tech , index) => (
              <span key={index} 
              className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                {tech}
              </span>
            ))}
          </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
