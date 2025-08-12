import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image="https://cdn.pixabay.com/photo/2023/01/26/10/46/cat-7745585_1280.jpg"
                    name="bob"
                    size={200}/>
                <p>안녕하세요</p>
            </Navbar>
            <Navbar><p>너도 반갑다</p></Navbar>
        </div>
    );
}

function Navbar({children}) {
    return (
        <header style={{backgroundColor:'yellow'}}>
            {children}

        </header>
    )
}

function Avatar({image, name, size}) {
    return (
        <div>
            <img src={image}
                 alt={`${name}`}
                 width={size}
                 height={size}
                 style={{borderRadius: '50%'}}/>
        </div>
    )
}
