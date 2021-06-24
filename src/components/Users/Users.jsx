import React from "react";
import style from './users.module.css';

let Users=(props)=>{

    if (props.users.length===0) {

        props.setUsers([
            {
                id: 1,
                photoURL: 'https://i.pinimg.com/originals/db/a0/c4/dba0c439943a72691801ce5448d5914e.jpg',
                followed: true,
                fullname: 'Alexey',
                status: 'Js developer',
                location: {city: "SPB", country: "RUSSIA"}
            },
            {
                id: 2,
                photoURL: 'https://s00.yaplakal.com/pics/pics_original/4/2/3/14760324.jpg',
                followed: false,
                fullname: 'Vasya',
                status: 'Hi hi',
                location: {city: "Verhnyaa pishma", country: "RUSSIA"}
            },
            {
                id: 3,
                photoURL: 'https://www.avtorinok.ru/photo/pics/bmw/i8/179091.jpg',
                followed: false,
                fullname: 'Irzhan',
                status: 'Hello',
                location: {city: "Irkutsk", country: "RUSSIA"}
            }
        ])
    }
    return <div>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div >
                        <img src={u.photoURL} className={style.usersPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={ ()=>{props.unfollow(u.id) } }>Unfollow</button>
                            :
                            <button onClick={ ()=>{props.follow(u.id)} }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users;