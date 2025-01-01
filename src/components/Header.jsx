import React from 'react'
import { Image } from "react-bootstrap"
import logo from "../assets/nba-logo.png"



const Header = () => {
    return (
        <div>
            <Image src={logo}></Image>
            <h1 className='fw-bold my-1 display-3'>NBA Legends</h1>

        </div>
    )
}

export default Header