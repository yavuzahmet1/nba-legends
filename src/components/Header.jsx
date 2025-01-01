import React from 'react'
import { Image } from "react-bootstrap"
import logo from "../assets/nba-logo.png"
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <Image src={logo}></Image>
            <h1 className='fw-bold my-1 display-3'>NBA Legends</h1>
            <nav className="d-flex gap-4 fs-5">
                <NavLink to={"/"}>Anasayfa</NavLink>
                <NavLink to={"/other"}>Other Pages</NavLink>
            </nav>
        </div>
    )
}

export default Header