import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <>
         
            <header>
                <NavLink exact to="/" className="logo">EFFORT!</NavLink>
                <ul>
                    <li><NavLink exact to="/fpa">FPA</NavLink></li>
                    <li><NavLink exact to="/cocomo">COCOMO</NavLink></li>
                    <li><NavLink exact to="/cocomo-2">COCOMO 2</NavLink></li>
                    <li><NavLink exact to="/slim">SLIM</NavLink></li>
                    <li><NavLink exact to="/ucp">UCP</NavLink></li>
                </ul>
            </header>
         
        </>
    )
}
export default Header;