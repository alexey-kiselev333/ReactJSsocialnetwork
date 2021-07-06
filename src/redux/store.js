import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi1', likesCount: 12},
                {id: 2, message: 'hey hey1', likesCount: 11},
                {id: 3, message: 'privet1', likesCount: 13},
                {id: 4, message: 'kak dela?1', likesCount: 14},
                {id: 5, message: 'VSE xorocho1', likesCount: 15},
                {id: 6, message: 'ok1', likesCount: 16}],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
            newMessageBody: ''
        },
        sidebar: {
            sideone: [{id: 1, menu: 'Profile'},
                {id: 2, menu: 'Messages'},
                {id: 3, menu: 'News'},
                {id: 4, menu: 'Music'},
                {id: 5, menu: 'Settings'}
            ]
        }
    },

    getState() {

        return this._state;
    },
    _callSubscriber() {
        console.log('Statedd');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }

}
export default store;