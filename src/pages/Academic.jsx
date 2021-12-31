import React from 'react'
import Assist from './../components/Assit/Assist';
import PCard from './../components/PCard/PCard';
import PBCard from './../components/PBCard/PBCard';
import HCard from './../components/HCard/HCard';
import HSCard from './../components/HSCard/HSCard';

export const Academic = () => {
    return (
        <div className="academic-cont  w-full h-full bg-gray-lighter items-center  flex-col space-y-20 pt-52  pl-40">
            <div className="acad-headline flex  items-start  justify-between">
                <div className="head-text flex justify-center w-2/3 ">
                    <h1 className=" text-5xl text-gray-light font-SF-50"><span className="text-gray-dark font-SFD-600">Academic.&nbsp;</span>The best time to explore, experiment & innovate.</h1>
                </div>
                <div className="assis ">
                         <Assist />     
                </div>
               
            </div>
            <div className="prod-nav flex w-full h-full space-x-20 text-center  ml-8">
                <div className="prod-mini-cont flex-col items-center ">
                    <div className="prod-img"><img className="w-24 h-24" src="./icons/school.svg" alt="img" /></div>
                    <div className="prod-name-div "><p className="prod-name font-medium text-xl text-gray-dark ">School</p></div>
                </div>
                 <div className="prod-mini-cont flex-col">
              <div className="prod-img"><img className="w-24 h-24"src="./images/rpaper.png" alt="img" /></div>
                <div className="prod-name-div justify-center"><p className="prod-name font-medium text-xl text-gray-dark">Research Paper</p></div>
          </div>
                <div className="prod-mini-cont flex-col">
                    <div className="prod-img"><img className="w-24 h-24" src="./images/medal.png" alt="img" /></div>
                    <div className="prod-name-div justify-center"><p className="prod-name font-medium text-xl text-gray-dark">Achievment</p></div>
                </div>
                <div className="prod-mini-cont flex-col">
                    <div className="prod-img"><img className="w-24 h-24" src="./images/college.png" alt="img" /></div>
                    <div className="prod-name-div justify-center"><p className="prod-name font-medium text-xl text-gray-dark">University</p></div>
                </div>
                <div className="prod-mini-cont flex-col">
                    <div className="prod-img"><img className="w-24 h-24" src="./images/certificate.png" alt="img" /></div>
                    <div className="prod-name-div justify-center"><p className="prod-name font-medium text-xl text-gray-dark">Certificates</p></div>
                </div>
         </div>
         
            {/* ========================Section-1=========================== */ }
         <div className="current-cont flex-col space-y-4">
             <div className="heading-latest">
                    <h2 className="headtxt-la font-medium text-3xl text-gray-light "><span className="d-latest text-gray-dark font-medium">The latest.&nbsp;</span>Take a look at what's new.</h2>
             </div>
             <div className="vcard-cont flex space-x-6 overflow-x-scroll w-full ">
                   <PCard/>
                   <PCard/>
                   <PCard/>
                   <PCard/>
             </div>
         </div>
 

       {/* ========================Section-2=========================== */}
         <div className="current-cont flex-col space-y-4">
             <div className="heading-latest">
                    <h2 className="headtxt-la font-medium text-3xl text-gray-light "><span className="d-latest text-gray-dark font-medium">The latest.&nbsp;</span>Take a look at what's new.</h2>
             </div>
             <div className="vcard-cont flex space-x-5  w-full ">
               <PBCard />
                    <div className="flex-col space-y-5"> 
                    <HCard />
                    <HCard />
                    </div>
              
             </div>
         </div>


            {/* ========================Section-3=========================== */ }
            <div className="current-cont flex-col space-y-4">
                <div className="heading-latest">
                    <h2 className="headtxt-la font-medium text-3xl text-gray-light "><span className="d-latest text-gray-dark font-medium">The latest.&nbsp;</span>Take a look at what's new.</h2>
                </div>
                <div className="vcard-cont flex space-x-6 overflow-x-scroll w-full ">
                    <HSCard />
                    <HSCard />
                    <HSCard />
                    <HSCard />
                </div>
            </div>
        </div>
    )
}
