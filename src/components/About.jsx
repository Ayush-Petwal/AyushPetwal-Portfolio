import React from "react";
import OrbitingCircles from './OrbitingCirclesDemo'
import {ABOUT_TEXT} from '../constants'
import Button from "./Button";
import { delay, motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{ opacity : 1 , x : 0 }}
        initial={{ opacity : 0 , x : -100 }}
        transition={{ duration : 1 , delay : 0.2}} 
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center items-center ">
                <OrbitingCircles />
            </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
            <motion.div
             whileInView={{ opacity : 1 , x : 0 }}
             initial={{ opacity : 0 , x : 100 }}
             transition={{ duration : 1 , delay : 0.2}}
            className="flex flex-col my-auto justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                <div className="flex gap-6 mx-auto">
                  <a href="https://drive.google.com/file/d/1xmhvqBTahksXuaFH-2jzMoKyutgUopEd/view?usp=sharing" target='_blank'><Button text = " Resume "/></a>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
