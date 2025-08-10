import React from 'react';
import "../App.css"

export default function Avatar({image ,isNew}) {
    return (
        <div className="avatar">
            {
                isNew && <span className="badge">NEW</span>
            }
            <img className="photo" alt="avatar"
                 src={image}/>
        </div>
    );
}
