import React from 'react'
import { PiStudentFill } from "react-icons/pi"

const Education = () => {
    return (
        <div id='Education' className='px-[10rem] bg-slate-200 pt-8 pb-[5rem]'>
            <center className='text-[3rem] font-bold '><PiStudentFill className='inline-block mb-3' /> My <span className='text-blue-600'>Education</span></center>
            <center className='text-2xl font-semibold'>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</center>
            <div className='flex mt-[4rem] items-center gap-[6rem] bg-white py-5 px-[5rem] w-[65%] m-auto rounded-3xl shadow-xl '>
                <div>
                    <img src="/assets/edureka.png" alt="aditya" className='h-[10rem] w-[25rem]' />
                </div>
                <div className='py-12 ms-auto'>
                    <h1 className='text-orange-700 font-bold text-5xl'>MERN Stack Development</h1>
                    <p className='text-4xl mt-5'>Edureka online internship programme</p>
                    <p className='text-3xl mt-5 text-green-700'>4 Months | Completed</p>
                </div>
            </div>
            <div className='flex justify-between mt-[2rem] bg-white py-5 px-[4rem] m-auto w-[80%] rounded-3xl shadow-xl gap-12'>
                <div className='py-9'>
                    <h1 className='text-orange-700 font-bold text-[3rem]'>Bachelor Of Engineering In Mechanical Engineering</h1>
                    <p className='text-4xl mt-4'>Aditya College of Engineering & Technology</p>
                    <p className='text-3xl mt-4 text-green-700'>2020-2023 | Completed</p>
                    <p className='text-3xl mt-4'>7.68 CGPA</p>
                </div>
                <div>
                    <img src="/assets/aditya.jpg" alt="aditya" className='h-[18rem]' />
                </div>
            </div>
            <div className='flex justify-between mt-[2rem] bg-white py-5 px-[5rem] m-auto w-[65%] rounded-3xl shadow-xl gap-12'>
                <div>
                    <img src="/assets/aditya.jpg" alt="aditya" className='h-[18rem]' />
                </div>
                <div className='py-12'>
                    <h1 className='text-orange-700 font-bold text-5xl'>Diploma In Mechanical Engineering</h1>
                    <p className='text-3xl mt-5'>Aditya Polytechnic colleges</p>
                    <p className='text-3xl mt-5 text-green-700'>2016-2019 | Completed</p>
                    <p className='text-3xl mt-5'>71%</p>
                </div>

            </div>
        </div>
    )
}

export default Education