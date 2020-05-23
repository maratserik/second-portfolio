import React, {useRef} from "react"
import "../styles/menu.css"
import { Tween } from 'react-gsap';

function Menu(){
    
    return(
        <Tween
            from = {{opacity: 0}}
            to = {{opacity:1}}
            duration = {1}
            stagger = {1}
        >
            <nav>
                <div className = "burger">
                    <div className = "line_above"></div>
                    <div className = "line_below"></div>
                </div>
            </nav>

        </Tween>
    )
    
}



export default Menu