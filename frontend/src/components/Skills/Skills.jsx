import React from 'react'
import "./skills.css"
import { FaNode, FaReact, FaHtml5, FaGithub, FaJava, FaNodeJs, FaBootstrap, FaAws } from "react-icons/fa"
import { BiLogoNetlify, BiLogoTailwindCss } from "react-icons/bi"
import { SiMysql, SiMongodb, SiJavascript, SiRedux, SiRender } from "react-icons/si"

const Skills = () => {

    const hexa = [{
        bg: "#ffb300",
        clr: "yellow",
        icon: <FaHtml5 className='inline text-[5.8rem] pt-6' />,
        name: "Html5"
    }, {
        bg: "#dc306f",
        clr: "pink",
        icon: <SiJavascript className='inline text-[5.8rem] pt-6' />,
        name: "Javascript"
    }, {
        bg: "#f68401",
        clr: "orange",
        icon: <BiLogoTailwindCss className='inline text-[5.8rem] pt-6' />,
        name: "Tailwind Css"
    }, {
        bg: "#c62828",
        clr: "red",
        icon: <FaNodeJs className='inline text-[5.8rem] pt-6' />,
        name: "Express js"
    }, {
        bg: "#7127a8",
        clr: "purple",
        icon: <FaNode className='inline text-[5.8rem] pt-6' />,
        name: "Node js"
    }, {
        bg: "#34a297",
        clr: "teal",
        icon: <FaBootstrap className='inline text-[5.8rem] pt-6' />,
        name: "Bootstrap"
    }, {
        bg: "#259af3",
        clr: "blue",
        icon: <SiMongodb className='inline text-[5.8rem] pt-6' />,
        name: "mongodb",
    }, {
        bg: "#1c68c5",
        clr: "blue-dark",
        icon: <FaReact className='inline text-[5.8rem] pt-6' />,
        name: "React Js"
    }, {
        bg: "#9e9e9e",
        clr: "silver",
        icon: <SiRedux className='inline text-[5.8rem] pt-6' />,
        name: "Redux"
    }, {
        bg: "#7cb342",
        clr: "green",
        icon: <FaGithub className='inline text-[5.8rem] pt-6' />,
        name: "Github"
    }, {
        bg: "#00944a",
        clr: "green-dark",
        icon: <FaJava className='inline text-[5.8rem] pt-6' />,
        name: "Java"
    }, {
        bg: "#b7892b",
        clr: "gold",
        icon: <SiMysql className='inline text-[5.8rem] pt-6' />,
        name: "my sql"
    }, {
        bg: "#7127a8",
        clr: "purple",
        icon: <SiRender className='inline text-[5.8rem] pt-6' />,
        name: "render"
    }, {
        bg: "#34a297",
        clr: "teal",
        icon: <BiLogoNetlify className='inline text-[5.8rem] pt-6' />,
        name: "netlify"
    }, {
        bg: "#259af3",
        clr: "blue",
        icon: <FaAws className='inline text-[5.8rem] pt-6' />,
        name: "aws",
    },]

    return (
        <div id='Skills' className='px-[10rem] py-12'>
            <center className='text-[3rem] font-bold text-slate-200'>My <span className='text-yellow-400'>Skills & Abilities</span></center>
            <div className="main-wrapper bg-blue-900 mt-9 rounded-xl pb-10">
                {
                    hexa.map((i, ind) => {
                        return <div className={`badge ${i.clr}`} key={ind}>
                            <div className="circle">
                                {i.icon}
                            </div>
                            <div className="ribbon" style={{ background: `${i.bg}` }}>{i.name}</div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Skills