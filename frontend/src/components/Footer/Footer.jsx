import React from 'react'
import { BsFillEnvelopeFill } from "react-icons/bs"
import { FaGithub, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import { FaMapLocationDot } from "react-icons/fa6"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='px-[10rem] py-10  bg-indigo-950 text-white  '>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-[2.5rem] font-semibold pb-7'>Rajesh's Portfolio</h1>
                    <p className='text-2xl w-[30rem] pb-6 text-slate-300'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                    <p className='text-2xl text-slate-300'>Keep Rising 🚀. Connect with me over live chat!</p>
                </div>
                <div>
                    <h1 className='text-[2.5rem] font-semibold pb-5'>Quick Links</h1>
                    <ul className='text-2xl'>
                        <li className='mb-2'>Home</li>
                        <li className='mb-2'>About</li>
                        <li className='mb-2'>Skills</li>
                        <li className='mb-2'>Work</li>
                        <li className='mb-2'>Education</li>
                    </ul>
                </div>
                <div className='text-2xl '>
                    <h1 className='text-[2.5rem] font-semibold mt-3 pb-7'>Contact info</h1>
                    <p className='mb-3'><BsFillEnvelopeFill className='inline me-2' /> peketirajesh007@gmail.com</p>
                    <p><FaMapLocationDot className='inline me-3' />Rajahmundry, AP - 533437</p>
                    <ul className='flex mt-12 text-2xl gap-4'>
                        <Link to="https://linkedin.com/in/peketi-rajesh-911304263" target='_blank' className='cursor-pointer bg-white rounded-full p-2'><FaLinkedinIn fill='black' /></Link>
                        <Link to="https://github.com/Rajesh0078" target='_blank' className='cursor-pointer bg-white rounded-full p-2'><FaGithub fill='black' /></Link>
                        <Link to="https://instagram.com/rajesh__.__007" target='_blank' className='cursor-pointer bg-white rounded-full p-2'><FaInstagram fill='black' /></Link>
                        <Link to="https://t.me/rajeshp007_dev" target='_blank' className='cursor-pointer bg-white rounded-full p-2'><FaTelegramPlane fill='black' /></Link>
                        <Link to="" target='_blank' className='cursor-pointer bg-white rounded-full p-2'><FaTwitter fill='black' /></Link>
                    </ul>
                </div>
            </div>
            <hr className='my-8 ' />
            <center className='text-3xl'>Designed By Rajesh P</center>
        </div>
    )
}

export default Footer