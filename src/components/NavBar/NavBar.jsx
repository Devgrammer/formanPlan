import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav-cont bg-gray-darker w-full h-10 flex font-sans  items-center justify-center  fixed xs:p-4">
            <ul className="nav-list text-gray-300 flex justify-evenly w-3/4 xs:w-full xs:justify-between">
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer  xs:justify-start md:hidden xs:w-5"><Link to="/about"><img src="./icons/bag.svg" alt="shop" /></Link></li>
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer float-left xs:justify-center"><Link to="/"><img className="w-5 h-5" src="./images/apple.png" alt="apple" /></Link></li>
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer  xs:justify-start md:hidden xs:w-5"><Link to="/about"><img src="./icons/bag.svg" alt="shop" /></Link></li>
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer xs:hidden"><Link to="/">Home</Link></li>
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer xs:hidden"><Link to="/academic">Academic</Link></li>
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer xs:hidden"><Link to="/contact">Contact</Link></li>
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer xs:hidden"><Link to="/about">About</Link></li>
            </ul>
       </div>
    )
}

export default NavBar
