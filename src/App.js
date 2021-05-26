
import './App.css';

import React from 'react'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/store";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {


    return (

            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer  />
                <div className='app-wrapper-content'>
                    <Route exact path='/messages' render={() => <DialogsContainer /> }/>

                    <Route exact path='/profile' render={()=> <Profile/>}/>
                    <Route exact path='/news' render={()=><News/>}/>
                    <Route exact path='/music' render={()=><Music/>}/>
                    <Route exact path='/settings' render={()=><Settings/>}/>

                </div>
            </div>
        );
}


export default App;
