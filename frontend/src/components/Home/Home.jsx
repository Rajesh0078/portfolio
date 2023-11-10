import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import './home.css'
import { BsArrowBarDown } from "react-icons/bs"
import { store } from '../../App'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import 'animate.css';

const Home = () => {
    const { setActiveId } = useContext(store)

    const aboutclickHAndler = () => {
        setActiveId("About")
        const ele = document.getElementById("About")
        ele.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className=' home flex justify-between items-center ' id='Home'>
            <div className='flex items-center w-full px-[10rem] '>
                <div className='main w-[50%]'>
                    <h2 className='text-blue-900 text-[5rem] font-bold'>Hi There,</h2>
                    <h2 className='text-blue-900 text-[5rem] font-bold'>I'm Rajesh <span className='text-orange-600'>Peketi</span></h2>
                    <div className='text_animated my-3 text-[2.5rem] font-semibold '>
                        I'm a Creative <span className='text-red-800 relative'></span>
                    </div>
                    <p className='mt-5 text-[1.7rem] inline-block cursor-pointer font-semibold btn bg-blue-900 px-[3rem] py-4 rounded-[2.8em] text-white' onClick={aboutclickHAndler}>About me <BsArrowBarDown className='inline' /></p>
                    <ul className='flex mt-12 text-5xl gap-8'>
                        <Link to="https://linkedin.com/in/peketi-rajesh-911304263" target='_blank' className='cursor-pointer'><FaLinkedinIn /></Link>
                        <Link to="https://github.com/Rajesh0078" target='_blank' className='cursor-pointer'><FaGithub /></Link>
                        <Link to="https://instagram.com/rajesh__.__007" target='_blank' className='cursor-pointer'><FaInstagram /></Link>
                        <Link to="https://t.me/rajeshp007_dev" target='_blank' className='cursor-pointer'><FaTelegramPlane /></Link>
                        <Link to="" target='_blank' className='cursor-pointer'><FaTwitter /></Link>
                    </ul>
                </div>
                <div className='bg-orange-400 w-[50rem] ms-auto rounded-full'>
                    <img src="/assets/person.png" alt="" className='h-[50rem] mt-[-3rem]' />
                </div>
            </div>
        </div>
    )
}

export default Home