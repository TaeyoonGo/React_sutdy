import React from 'react';

export default function AppCard() {
    return (
        <div>
            <Card>
                <h1>안녕</h1>
            </Card>
            <Card>
                <p>너의이름은 뭐야</p>
            </Card>
        </div>
    );
}


function Card({children}) {
    return (
        <div style={{
            backgroundColor : 'black',
            borderRadius: '20px',
            color:'white',
            minHeight: '200px',
            maxWidth: '200px',
            margin:'1rem',
            padding:'1rem',
            textAlign:'center'
        }}>
            {children}
        </div>
    )
}
