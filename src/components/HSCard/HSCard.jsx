import React from 'react'

function HSCard() {
    const addr = 'url("./images/app-loader.gif")'
    return (
        <div>
            <div className="v-card bg-contain  w-w313 h-h240 antialiased shadow-active hover:transition-prime flex-col space-y-1   rounded-2xl p-8  hover:shadow-md " style={ { backgroundImage: `${addr}` } }>
                {/* style={ { backgroundImage: `url("./images/univ.jpg")` } } */ }
                <p className="sub-line font-medium text-3xl text-gray-dark">Look into more with Professional's Social Space.</p>
            </div>
        </div>
    )
}

export default HSCard
