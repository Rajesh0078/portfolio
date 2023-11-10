import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'
import { FaFileDownload } from "react-icons/fa"

const About = () => {
    const onButtonClick = () => {
        const pdfUrl = "/assets/Rajesh_Peketi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Rajesh_Peketi.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='px-[10rem] py-4  mt-5 border-t border-gray-300' id='About'>
            <center className='text-[3.8rem] font-bold '>About <span className='text-orange-600'>Me</span></center>
            <div className='flex items-center justify-between w-full px-[10rem] my-[5rem] flex-wrap gap-5'>
                <div className='bg-slate-200 w-[28rem] h-[28rem] mt-12 rounded-full'>
                    <img src="/assets/mine.png" alt="mine" className='h-[35rem] mt-[-7rem] mine rounded-full' />
                </div>
                <div className=' w-[65%]'>
                    <h1 className='font-bold text-6xl'>I'm Rajesh</h1>
                    <p className='py-4 text-2xl font-semibold'>I'm a Full Stack web Developer</p>
                    <p className=' text-[1.7rem] text-gray-700'>I am a Full-Stack developer based in Rajahmundry, India. I am a Mechanical engineering undergraduate from Aditya college of engineering & technology. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.</p>
                    <p className='text-3xl mt-5'><span className='text-indigo-800'>Email:</span> peketirajesh007@gmail.com</p>
                    <p className='text-3xl mt-2'><span className='text-indigo-800'>Place:</span> Rajahmundry, AP - 533437</p>
                    <Link hrefLang='/assets/Rajesh_Peketi.pdf' onClick={onButtonClick} className='mt-12 text-[1.7rem] inline-block cursor-pointer font-semibold btn bg-blue-900 px-[3rem] py-4 rounded-[2.8em] text-white ' >Resume<FaFileDownload className='inline ms-3 pb-1' /></Link>
                </div>
            </div>
        </div>
    )
}

export default About