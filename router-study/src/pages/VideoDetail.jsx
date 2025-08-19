import React from 'react';
import {useParams} from "react-router-dom";

export default function VideoDetail() {
    console.log(useParams());
    const {videoId}= useParams();

    return (
        <div>{videoId}</div>
    );
}
