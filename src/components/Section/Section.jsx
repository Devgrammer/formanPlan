import React from 'react'
import Pdf from '../../data/resume.pdf'

function Section(props) {
    return (
        <div className={ `sec-container max-w-full min-h-screen flex  justify-center items-center scroll-sm mb-1  antialiased pt-16 ${props.bg}` }>
            <div className="section-main-wrapper flex-col space-y-4 w-full h-4/5">
            <div className="sec-content  text-center leading- tracking-tighter">
                <h2 className="head text-5xl font-bold  xs:text-4xl ">{ props.heading }</h2>
                <h3 className="head-slogn text-3xl font-regular xs:text-2xl"> { props.sheading }</h3>
                <p className="head-desc text-xl font text-gray-400 m-2 xs:text-lg xs:font-semibold">{ props.slang }</p>
            </div>
            <div className="sec-link flex justify-center">
                <a href={ Pdf } target="_blank" rel="noreferrer" className="slink1 text-blue-500 text-xl m-2 xs:text-lg">Resume > </a>
                <a href="https://www.linkedin.com/in/iamcrazyabhi" className="slink1 text-blue-500 text-xl   m-2 xs:text-lg">Linkedin ></a>
            </div>
            <div className="sec-img w-full flex justify-center">
                <img src={ props.src } className="w-1/3 xs:w-full" alt="Abhinav Rastogi" />
            </div>
            </div>
        </div>
    )
}

export default Section
