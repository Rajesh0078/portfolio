import React from 'react'
import { BsFillPersonFill, BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs"
import { BiSolidMessage } from "react-icons/bi"
import { FaTelegramPlane } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div id='Contact' className='px-[10rem] py-[2rem] bg-slate-200'>
            <center className='text-[3.5rem] font-bold '>Get in <span className='text-blue-900'>Touch</span></center>
            <div className=" bg-white mt-5 shadow-xl rounded-3xl p-[8rem] gap-12 flex">
                <img src="/assets/code.png" alt="code" className='w-[50%]' />
                <form className='w-full'>
                    <div className='border w-full py-4 px-5 mb-6 border-black text-3xl rounded-md bg-slate-200'>
                        <label htmlFor="name"><BsFillPersonFill className='inline me-5 text-blue-900' /></label>
                        <input type="text" placeholder='Name' className='outline-none bg-transparent' />
                    </div>
                    <div className='border w-full p-4 mb-6 border-black text-3xl rounded-md bg-slate-200'>
                        <label htmlFor="email"><BsFillEnvelopeFill className='inline me-5 text-blue-900' /></label>
                        <input type="text" placeholder='Email' className='outline-none bg-transparent' />
                    </div>
                    <div className='border w-full p-4 mb-6 border-black text-3xl rounded-md bg-slate-200'>
                        <label htmlFor="phone"><BsFillTelephoneFill className='inline me-5 text-blue-900' /></label>
                        <input type="text" placeholder='Phone' className='outline-none bg-transparent' />
                    </div>
                    <div className='border w-full flex p-4  mb-6 border-black text-3xl rounded-md bg-slate-200'>
                        <label htmlFor="phone"><BiSolidMessage className=' me-5 text-blue-900' /></label>
                        <textarea name="" id="" cols="54" rows="4" className='outline-none mt-[-.4rem] bg-transparent' placeholder='Message'></textarea>
                    </div>
                    <center>
                        <Link className='mt-6 text-[1.7rem] inline-block cursor-pointer font-semibold btn bg-blue-900 px-[3rem] py-4 rounded-[2.8em] text-white ' >Submit<FaTelegramPlane className='inline ms-3 pb-1' /></Link>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Contact