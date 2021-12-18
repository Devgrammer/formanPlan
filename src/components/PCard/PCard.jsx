import React from 'react'

function PCard() {
    const addr = 'url("https://images.unsplash.com/photo-1556117208-d18dc6ac3f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80")'
    return (
        
        <div className="v-card bg-cover antialiased shadow-active hover:transition-prime flex-col space-y-1   rounded-2xl p-8  hover:shadow-md " style={ { minWidth: '400px', height: '500px', backgroundImage: `${addr}`  }}>
                {/* style={ { backgroundImage: `url("./images/univ.jpg")` } } */ }
                <p className="sub-line font-semibold text-xs text-gray-light">BACK TO UNIVERSITY</p>
                <p className="sub-line font-bold text-3xl text-gray-darker">Buy a Mac for your university. Get AirPods<sup>1</sup>.</p>
                <p className="sub-line font-SF-800 text-gray-light">Save with education pricing.</p>
            </div>
        
    )
}

export default PCard
