import React from 'react';
import '../styles/arrow.css';

function Arrow(props){
    return(
        <div className = 'Arrow'>
            <h1>{props.text}</h1>
            <div>
                <div className ="line"/>
            </div>
        </div>
    )
}

export default Arrow