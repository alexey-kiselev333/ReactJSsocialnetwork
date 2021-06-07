const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const FOLLOW='FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS'
let initialState = {
    users: [{id: 1,photoURL:'https://i.pinimg.com/originals/db/a0/c4/dba0c439943a72691801ce5448d5914e.jpg', followed:true, fullname: 'Alexey',status:'I am a boss', location: {city:"SPB",country:"RUSSIA"}},
            {id: 2,photoURL:'https://s00.yaplakal.com/pics/pics_original/4/2/3/14760324.jpg', followed:false,fullname: 'Vasya',status:'Hi hi', location: {city:"Verhnyaa pishma",country:"RUSSIA"}},
            {id: 3,photoURL:'https://www.avtorinok.ru/photo/pics/bmw/i8/179091.jpg', followed:false, fullname: 'Irzhan',status:'Hello', location: {city:"Nizhnaya boyanovka",country:"RUSSIA"}}

        ],
    newPostText: 'it-kamasutra'
}

const usersReducer = (state=initialState,action)=>{

        switch (action.type) {
            case FOLLOW:
                return  {...state,
                users: state.users.map(u=> {
                    if (u.id===action.userId) {
                    return {...u,followed: true}
                    }
                    return u;
                })}



            case UNFOLLOW:
                return  {...state,
                    users: state.users.map(u=> {
                        if (u.id===action.userId) {
                            return {...u,followed: false}
                        }
                        return u;
                    })}
            case SET_USERS:{
                return {...state,users:[...state.users,...action.users]}
            }
            default:
                return state;}}

export const followAC = (userId) => ({type:FOLLOW, userId })
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId })
export const setUsersAC = (users) => ({type:SET_USERS, users })
export default usersReducer;