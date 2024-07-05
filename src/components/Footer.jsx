import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='flex justify-between'>
        <div className='m-2 font-thin tracking-tight text-2xl '>Ayush Petwal</div>
        <div className='m-2 flex items-center justify-end gap-4 text-3xl '>
            <a href="https://www.linkedin.com/in/ayush-petwal/" target='_blank'><FaLinkedin /></a>
            <a href="https://www.instagram.com/ayush_petwal/" target='_blank'><FaInstagram /></a>
            <a href="https://x.com/AyushPetwal_" target='_blank'><FaXTwitter /></a>
        </div>
    </div>
  )
}

export default Footer
