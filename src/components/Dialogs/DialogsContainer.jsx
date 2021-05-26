import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange=(body)=>{
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange}
    sendMessage={onSendMessageClick}
    dialogsPage={state}/>)
}

let f1=(state)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let f2=()=>{
    return {
        c:3
    }
}

const SuperDialogsContainer = connect(f1,f2)(Dialogs)

export default DialogsContainer;