import React from 'react'

export const LoaderX =( )=> {
    return (
        <div className="loader-container bg-gray-black flex  w-full justify-center items-center text-center h-screen transition-all  duration-1000 ease-in-out ">
            <div className="loader-sub  flex-col space-y-5 text-center">
                <img src="./images/app-loader.gif" alt="loader" className="w-44 text-center xs:ml-3" />
                <p className="loader-text  text-gray-light text-lg">Stay hungry, Stay Foolish..</p>
            </div>
        </div>
    )
}


