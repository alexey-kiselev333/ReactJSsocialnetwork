import React from 'react'

import {NavLink} from "react-router-dom";
import p from './../Navbar.module.css'

const SideSl = (props) => {

    let path='/'+props.menu
    return (
        <div className={p.item} >

            <NavLink to={path} activeClassName={p.activelink}>{props.menu}</NavLink>

        </div>


    )
}

export default SideSl;