import React from 'react';
import '../styles/arrow.css';
import { Tween } from 'react-gsap';

function Arrow(props){
    return(
        <Tween
            from = {{opacity: 0, y: -50}}
            to = {{opacity:1, y: 0}}
            duration = {1}
            stagger = {0.3}
            delay = {1.5}
        >
            <div className = 'Arrow'>
                <h1>{props.text}</h1>
                <div>
                    <div className ="line"/>
                </div>
            </div>
        </Tween>
    )
}

export default Arrow