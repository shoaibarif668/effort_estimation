import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () =>{
    return(
        <>
        <div className="notFound above_particle">
            <h1>Looks Like you are lost</h1>
            <NavLink to="/" className="__redirect">Want to go back?</NavLink>
        </div>
        
        </>
    )
}
export default NotFound;