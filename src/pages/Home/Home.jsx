import React from 'react'
import Footer from '../../components/Footer/Footer'
import Section from '../../components/Section/Section'

const homeData = [
    {
        heading: "iM Abhinav Rastogi",
        sheading: "Developer & Designer",
        slang: "Bridging Design to Code",
        bg: "bg-#fdfdfd font-cus-b  w-full",
        src: "./images/sec-img-1.jpg"
    },
    {
        heading: "Meet Myself",
        sheading: "Explore & Discover",
        slang: "Bridging Design to Code",
        bg: "bg-black font-cus-w w-full",
        src: "./images/sec-img-2.jpg"
    },
    {
        heading: "Skills",
        sheading: "Learn & Earn",
        slang: "Zero to Hero",
        bg: "bg-#fdfdfd font-cus-b w-full",
        src: "./images/skills.jpg"
    },
    {
        heading: "Projects",
        sheading: "Build & Deploy",
        slang: "Pixel to Program",
        bg: "bg-black font-cus-w w-full",
        src: "./images/wrk.jpg"
    },

]
    


function Home() {
    return (
        <>
        {
            homeData.map(value=>{
                return(
                    <Section heading={ value.heading } bg={ value.bg } sheading={value.sheading } slang={value.slang } src={ value.src } />
                )
            })
        }
            <Section heading={ "Recommendation" } bg={"bg-#fdfdfd font-cus-b"} sheading={"Work & Words" } slang={ ">Pixel to Program"} src={ " "} >
                <h2> Robert Downey Jr.</h2>
                <h2> Robert Downey Jr.</h2>
                <h2> Robert Downey Jr.</h2>
            </Section>
            <div className="split-cont flex w-full items-center p-4 space-x-4 xs:space-x-0 xs:p-2 xs:flex-col xs:space-y-1">
                <Section heading={ "Develop" } bg={ "bg-contain font-cus-b w-1/2 xs:w-full xs:h-h500" } sheading={ "Work & Words" } slang={ ">Pixel to Program" } src={ " " } style={ { backgroundImage: `url("https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`}} />
                <Section heading={ "Design" } bg={"bg-black font-cus-w w-1/2 xs:w-full xs:h-h500"} sheading={"Work & Words" } slang={ ">Pixel to Program"} src={ " "} />
            </div>
            <div className="split-cont flex w-full items-center p-4 pt-0 space-x-4 xs:space-x-0 xs:p-2 xs:flex-col xs:space-y-1 ">
                <Section heading={ "Develop" } bg={"bg-gray-100 font-cus-b w-1/2 xs:h-h500 xs:w-full"} sheading={"Work & Words" } slang={ ">Pixel to Program"} src={ " "} />
                <Section heading={ "Design" } bg={"bg-gray-100 font-cus-b w-1/2 xs:w-full xs:h-h500"} sheading={"Work & Words" } slang={ ">Pixel to Program"} src={ " "} />
            </div>

            <Footer />
      
    </>
    )
}

export default Home
