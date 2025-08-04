import React from 'react';
import "../App.css"
import Profile from "./components/Profile.jsx";
import Avatar from "./components/Avatar.jsx";

export default function AppProfile() {
    const handleEvent = (event) => {
        console.log(event)
        alert('handleEvent')
    }
    return (
        <div>
            <button onClick={handleEvent}>버튼</button>
            <Profile
                image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                name='james kim'
                title='프론트엔드 개발자'
                isNew={true}
            />
            <Profile
                image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
                name='Anna Young'
                title='백엔드 개발자'
            />
            <Profile
                image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
                name='Bob Yu'
                title='프론트엔드 개발자'
            />
            <Avatar
                image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                isNew={true}
            ></Avatar>

        </div>
    );
}
