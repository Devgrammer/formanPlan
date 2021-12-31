import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const [hover, setHover] = useState({
        bg:'bg-black',
        text:'text-white'
    })
    const [Navbar, setNavbar] = useState(false);

    const  changeBackground = ( ) =>{
        console.log(window.scrollY, hover);
        if(window.scrollY >= 40){
            // setHover({ bg: "bg-white/50 backdrop-blur-md",
            //     text:"text-black hover:text-red-700"
            // });
          setNavbar(true)
        }
        else{
            // setHover({
            //     bg: "bg-black text-gray-300 hover:text-gray-600",
            //     text: "text-white hover:text-red-500"
            // });
            setNavbar(false)
        }
    }
    
    window.addEventListener('scroll', changeBackground);
    return (
        <div className={ `nav-cont  w-full h-10 flex font-sans  items-center justify-center  fixed xs:p-4 ${Navbar ? "bg-white/50 backdrop-blur-md" : "bg-gray-darker text-gray-300 hover:text-gray-600"}`}>
        {/* <div onMouseOver={ ( )=>setHover ( "bg-white/50 backdrop-blur-md")} className={ `nav-cont  w-full h-10 flex font-sans  items-center justify-center  fixed xs:p-4 ${hover}`}> */}
            <ul className="nav-list flex justify-evenly w-3/4 xs:w-full xs:justify-between">
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer  xs:justify-start md:hidden xs:w-5"><Link to="/about"><img src="./icons/bag.svg" alt="shop" /></Link></li>
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer float-left xs:justify-center"><Link to="/"><img className="w-5 h-5" src="./images/apple.png" alt="apple" /></Link></li>
                <li className="nav-list-items hover:text-gray-lighter cursor-pointer  xs:justify-start md:hidden xs:w-5"><Link to="/about"><img src="./icons/bag.svg" alt="shop" /></Link></li>
                <li className={ `nav-list-items cursor-pointer xs:hidden ${Navbar ? "text-gray-dark hover:text-gray-black" : "text-gray-lighter hover:text-gray-lightest"}`}><Link to="/">Home</Link></li>
                <li className={ `nav-list-items cursor-pointer xs:hidden ${Navbar ? "text-gray-dark hover:text-gray-black" : "text-gray-lighter hover:text-gray-lightest"}`}><Link to="/academic">Academic</Link></li>
                <li className={ `nav-list-items cursor-pointer xs:hidden ${Navbar ? "text-gray-dark hover:text-gray-black" : "text-gray-lighter hover:text-gray-lightest"}`}><Link to="/contact">Contact</Link></li>
                <li className={ `nav-list-items cursor-pointer xs:hidden ${Navbar ? "text-gray-dark hover:text-gray-black" : "text-gray-lighter hover:text-gray-lightest"}`}><Link to="/about">About</Link></li>
            </ul>
       </div>
    )
}

export default NavBar
