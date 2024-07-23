import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'
const Contact = () => {
    
  return (
    <div className='border-b border-neutral-900 pb-10 ' id='contact'> 
        <motion.h2
        whileInView = {{opacity : 1 , y : 0}}
        initial = {{opacity : 0 , y : -100}}
        transition = {{duration : 0.8}} 
        className='my-10 text-center text-4xl ' >Get in Touch</motion.h2>
        <div className="text-center tracking-tighter ">
            <motion.p
            whileInView = {{opacity : 1 , x : 0}}
            initial = {{opacity : 0 , x : -100}}
            transition = {{duration : 1}} 
            className='mt-4 mb-2 '>{CONTACT.address}</motion.p>
            <motion.div
            whileInView = {{opacity : 1 , x : 0}}
            initial = {{opacity : 0 , x : 100}}
            transition = {{duration : 1}} 
            className='flex  justify-center'>
                <a href='mailto:ayushpetwal003@gmail.com' className='my-2'>{CONTACT.email}</a>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact
