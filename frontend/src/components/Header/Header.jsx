import React, { useContext } from 'react'
import { DiJavascript } from "react-icons/di"
import { store } from '../../App'


const Header = () => {

    const { activeId, setActiveId } = useContext(store)

    const handleClick = (e) => {
        const id = e.target.innerHTML
        setActiveId(id)
        const ele = document.getElementById(id)
        if (ele) {
            ele.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div className='flex items-center px-[10rem] py-4 fixed left-0 right-0 z-50 bg-white shadow'>
                <DiJavascript size={30} />
                <span className='text-3xl font-bold'>Rajesh</span>
                <div className='ms-auto  '>
                    <ul className='flex gap-6 text-[1.7rem] font-medium'>
                        <li onClick={handleClick} className={`${activeId === "Home" ? "active" : ""} link cursor-pointer`}>Home</li>
                        <li onClick={handleClick} className={`${activeId === "About" ? "active" : ""} link cursor-pointer`}>About</li>
                        <li onClick={handleClick} className={`${activeId === "Skills" ? "active" : ""} link cursor-pointer`}>Skills</li>
                        <li onClick={handleClick} className={`${activeId === "Education" ? "active" : ""} link cursor-pointer`}>Education</li>
                        <li onClick={handleClick} className={`${activeId === "Work" ? "active" : ""} link cursor-pointer`}>Work</li>
                        <li onClick={handleClick} className={`${activeId === "Contact" ? "active" : ""} link cursor-pointer`}>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header