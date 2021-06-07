import React from 'react'
import s from './ProfileInfo.module.css'



const Profileinfo = () => {
    return (
        <div>
            <div className={s.prof}>
                <img src='https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )

}

export default Profileinfo;