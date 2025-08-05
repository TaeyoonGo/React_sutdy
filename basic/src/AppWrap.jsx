import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image="https://images.unsplash.com/photo-1743360167520-761fa087ee8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name='bob'
                    size={300}
                />
                <p>안녕하세요</p>
            </Navbar>
            <Navbar>
                <p>안녕</p>
            </Navbar>
        </div>
    );
}

function Navbar({children}) {
    return (
        <header style={{backgroundColor : 'yellow'}}>
            {children}
        </header>
    )
}

function Avatar({image, name, size}){
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{borderRadius:'50%'}}/>
        </div>
    )
}
