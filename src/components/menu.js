import React,{useState} from "react"
import "../styles/menu.css"
import { Tween, PlayState } from 'react-gsap';

function Menu(){
    const [menu, setMenu] = useState("closed")
    const [playing, setPlaying] = useState(false)
    const handler = () =>{
        if(menu === "open"){
            setMenu("closed")
            setPlaying(false)
        }
        if(menu === "closed"){
            setMenu("open")
            setPlaying(true)
        }
    }
    return(
        <Tween
            from = {{opacity: 0}}
            to = {{opacity:1}}
            duration = {1}
            stagger = {1}
        >
            <nav>                                                                               
                <div className = "burger" role = "button" onClick = {handler}>

                    <div className = {menu}></div>
                    <div className = {menu}></div>
                    <div className = {menu}>
                        <div>
                            <Tween
                                playState = {playing ? PlayState.play : PlayState.pause}
                                from = {{opacity:0, y: -30}}
                                to = {{opacity:1, y: 0}}
                                duration = {1}
                                stagger = {0.2}
                            >
                                <div><a href = "/">Home</a></div>
                                <div><a href = "/projects">Projects</a></div>
                                <div><a href = "/about">About</a></div>
                            </Tween>
                        </div>
                        <div>
                            <Tween
                                playState = {playing ? PlayState.play : PlayState.pause}
                                from = {{opacity:0, y: -30}}
                                to = {{opacity:1, y: 0}}
                                duration = {1}
                                stagger = {0.2}
                            >
                                <div><a href = "https://github.com/Maracrasava">Github</a></div>
                                <div><a href = "https://www.linkedin.com/in/marat-serikbayev-96b4b91a3/">LinkedIn</a></div>
                                <div><a href = "https://www.instagram.com/sericbiev/">Instagram</a></div>
                                <div><a href = "https://api.whatsapp.com/send?phone=+77087656629">WhatsApp</a></div>
                            </Tween>
                        </div>
                    </div>
                </div>
                
            </nav>

        </Tween>
    )
       
}



export default Menu