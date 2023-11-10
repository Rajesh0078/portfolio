import React from 'react'

const Work = () => {
    return (
        <div id='Work' className='px-[10rem] py-[3rem] bg-blue-950'>
            <center className='text-[3.5rem] font-bold text-white'>Projects <span className='text-blue-500'>Made</span></center>
            <div className='grid grid-cols-3 gap-6 mt-12'>
                <div className='bg-white rounded-xl h-[30rem]  '></div>
                <div className='bg-white rounded-xl h-[30rem] '></div>
                <div className='bg-white rounded-xl h-[30rem] '></div>
                <div className='bg-white rounded-xl h-[30rem] '></div>
                <div className='bg-white rounded-xl h-[30rem] '></div>
                <div className='bg-white rounded-xl h-[30rem] '></div>
            </div>
        </div>
    )
}

export default Work