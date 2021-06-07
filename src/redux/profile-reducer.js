const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [{id: 1, message: 'Hi1', likesCount: 12},
        {id: 2, message: 'hey hey1', likesCount: 11},
        {id: 3, message: 'privet1', likesCount: 13},
        {id: 4, message: 'kak dela?1', likesCount: 14},
        {id: 5, message: 'VSE xorocho1', likesCount: 15},
        {id: 6, message: 'ok1', likesCount: 16}],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state=initialState,action)=>{

        switch (action.type) {
            case ADD_POST:{
                let newPost = {
                    id: 7,
                    message: state.newPostText,
                    likesCount: 0
                };
                let stateCopy={...state}
                stateCopy.posts=[...state.posts];
                stateCopy.posts.push(newPost);
                state.newPostText = '';
                return stateCopy;}
            case UPDATE_NEW_POST:{
                let stateCopy={...state};
                stateCopy.posts=[...state.posts]
                stateCopy.newPostText = action.newText;
                return stateCopy;
            }
            default:
                return state;

        } }

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return {
        type:UPDATE_NEW_POST,newText:text
    }
}
export default profileReducer;