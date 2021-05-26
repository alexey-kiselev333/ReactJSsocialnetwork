const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState ={
    messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'hey hey'},
    {id: 3, message: 'privet'},
    {id: 4, message: 'kak dela?'},
    {id: 5, message: 'VSE xorocho'},
    {id: 6, message: 'ok'}
],
    dialogs: [{id: 1, name: 'Dimych'},
    {id: 2, name: 'Lesha'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Andrew'},
    {id: 6, name: 'Egor'}
],
    newMessageBody: ''}

const dialogsReducer = (state=initialState,action)=>{
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state



        case SEND_MESSAGE:
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: 6, message: body})
    }
    return state;
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) =>{
    return {
        type:UPDATE_NEW_MESSAGE_BODY,body:body
    }
}
export default dialogsReducer;