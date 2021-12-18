import React from 'react'

function Section(props) {
    return (
        <div className={ `sec-container   flex-col justify-center scroll-sm h-screen mb-1  antialiased pt-16 ${props.bg}` }>
            <div className="sec-content  text-center leading- tracking-tighter">
                <h2 className="head text-5xl font-bold  xs:text-4xl ">{ props.heading }</h2>
                <h3 className="head-slogn text-3xl font-regular pt- xs:text-2xl"> { props.sheading }</h3>
                <p className="head-desc text-xl font-light text-gray-400 m-2 xs:text-lg xs:font-">{ props.slang }</p>
            </div>
            <div className="sec-link flex justify-center">
                <a href="www.google.com" className="slink1 text-blue-500 text-xl m-2 xs:text-lg">Resume > </a>
                <a href="https://www.linkedin.com/in/iamcrazyabhi" className="slink1 text-blue-500 text-xl   m-2 xs:text-lg">Linkedin ></a>
            </div>
            <div className="sec-img w-full flex justify-center">
                <img src={ props.src } className="w-2/5 xs:w-full" alt="Abhinav Rastogi" />
            </div>
        </div>
    )
}

export default Section
