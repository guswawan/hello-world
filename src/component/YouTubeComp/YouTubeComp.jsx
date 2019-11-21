import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://via.placeholder.com/150x100" alt=""></img>
            </div>
            <p className="title">{props.title}</p>
    <p className="decs">{props.description}</p>
        </div>
    )
}

//default props
YouTubeComp.defaultProps = {
    title: 'Video',
    description: 'Here is the description'
}

export default YouTubeComp;