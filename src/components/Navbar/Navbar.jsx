import React from 'react'
import s from './Navbar.module.css'

import SideSl from "./sideSl/SideSl";

const Navbar = (props) => {

    let sides=props.state.sidebar.sideone.map(s =><SideSl menu={s.menu} />)

    return (
        <nav className={s.nav}>
        {sides}
        <div className={s.na}>
            <div className={s.k}>
                <h1>Friends</h1>
            </div>
            <div className={s.nas}>
                <div className={s.f}>
                        <img src='https://avatars.mds.yandex.net/get-zen_doc/1718877/pub_5e149aef3642b600afd37db5_5e149b310a451800acb49c79/scale_1200'/>
                        Masha
                </div>
                <div className={s.f}>
                    <img src='https://avatars.mds.yandex.net/get-zen_doc/1718877/pub_5e149aef3642b600afd37db5_5e149b310a451800acb49c79/scale_1200'/>
                    Vasya
                </div>
                <div className={s.f}>
                    <img src='https://avatars.mds.yandex.net/get-zen_doc/1718877/pub_5e149aef3642b600afd37db5_5e149b310a451800acb49c79/scale_1200'/>
                    Lisa
                </div>

            </div>
        </div>
            </nav>
    )
}

export default Navbar;
