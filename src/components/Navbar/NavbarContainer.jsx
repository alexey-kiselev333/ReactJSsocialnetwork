import React from 'react'
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";



let mapStateToProps=(state) =>{
    return {
        state:state

    }
}


const NavbarContainer =connect(mapStateToProps)(Navbar)

export default NavbarContainer
