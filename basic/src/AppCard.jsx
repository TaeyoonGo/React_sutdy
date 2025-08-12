import React from 'react';

export default function AppCard() {
    return (
        <div>
            <Card>
                <h1>Card1</h1>
            </Card>
            <Card>
                <h1>Card1</h1>
                <p>설명</p>
            </Card>
        </div>
    );
}


function Card({children}) {
    return (
        <div style={{
            backgroundColor: 'black',
            borderRadius: '20px',
            color: 'white',
            minWidth: '200px',
            minHeight: '200px',
            margin: '1rem',
            padding: '1rem',
            textAlign: 'center',
        }}>
            {children}
        </div>
    )
}
