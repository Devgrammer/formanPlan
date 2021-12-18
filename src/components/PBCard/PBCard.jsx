import React from 'react'

function PBCard() {
    const addr = 'url("./images/pot.png")'
    return (
        <div>
            <div className="v-card bg-cover  w-w480 h-h500 antialiased shadow-active hover:transition-prime flex-col space-y-1   rounded-2xl p-8  hover:shadow-md " style={ {  backgroundImage: `${addr}` } }>
                {/* style={ { backgroundImage: `url("./images/univ.jpg")` } } */ }
                <p className="sub-line font-medium text-3xl text-gray-dark">Look into more with Professional's Social Space.</p>
            </div>
        </div>
    )
}

export default PBCard
