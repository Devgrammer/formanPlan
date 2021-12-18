import React from 'react'

function Assist() {
    return (
        <div className="assist-box flex">
            <div className="assist flex space-x-2 font-medium">
                <div className="assitant  w-12 h-12 rounded-full border-2 justify-center items-center bg-clip-padding "><img className="rounded-full scale-2" src="./images/ive.jpg" alt="assist" /></div>
                <div className="assit-faq ">
                    <p className="a-ques text-gray-700">Need to know more?</p>
                    <p className="a-link text-blue-light">Check Linkedin</p>
                </div>
            </div>
        </div>
    )
}

export default Assist
