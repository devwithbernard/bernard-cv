import "./navbar.scss";

import {navigation} from "../../index";
import {NavLink} from "react-router-dom";
import {useRef} from "react";

import {UilTimes, UilBars} from "@iconscout/react-unicons";

export const Navbar = () =>{
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    return (<div className="navigation">
        <nav ref={navRef} className="navigation-container" >
            {navigation.map(({path,name,element}) =>(
                <NavLink
                    key={path}
                    className="navigation-item"
                    to={path}
                >
                    {name}
                </NavLink>))}
            <button onClick={showNavbar} className="nav-btn nav-btn-close">
                <UilTimes/>
            </button>
        </nav>
        <button onClick={showNavbar} className="nav-btn btn-bars">
            <UilBars/>
        </button>
    </div>)
}