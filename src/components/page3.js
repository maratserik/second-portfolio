import React, {Component} from 'react';
import Menu from "./menu"
import { Tween } from 'react-gsap';
import Arrow from "./arrow"
import '../styles/page3.css';

class Page3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            arrow: 'Projects'
        }
    }
    render(){

        
            return(
                <div className = "Page3">
                    <Menu/>
                    
                    <div className = "bubbles">
                        <div className = "bubble-1">
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                        <div className = "bubble-2">
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>
                    <Tween
                        from = {{  opacity: 0}}
                        to = {{ opacity: 1}}
                        duration = {1}
                        stagger = {0.3}
                    >
                        <div className = "myImage">
                            <a href = "https://www.linkedin.com/in/marat-serikbayev-96b4b91a3/">
                                <div>
                                    
                                </div>
                            </a>
                        </div>
                    </Tween>
                    <Tween
                        from = {{opacity: 0, x: -50}}
                        to = {{opacity:1, x: 0}}
                        duration = {1}
                        stagger = {0.3}
                    >
                        <div className = "text_near_Image">
                            <h3>I primarily build client-side of websites, but i also design them and develop mobile apps. I am currently a student of Nazarbayev University.</h3>
                        </div>
                    </Tween>
                    <div className = "technologies">
                        <Tween
                            from = {{opacity:0, x: -50}}
                            to = {{opacity:1, x: 0}}
                            duration = {1}
                            stagger = {0.3}
                            
                        >
                            <div className = "text_under_section">
                                <h2>The list of technologies that i work with</h2>
                            </div>
                        </Tween>
                        <div className = "frontend">
                            <Tween
                                from = {{opacity:0, y: -50}}
                                to = {{opacity:1, y: 0}}
                                duration = {1}
                                stagger = {0.3}
                                delay = {0.6}
                                
                            > 
                                <div className = "titleF">
                                    <h3>Frontend</h3>
                                </div>
                                <div className = "techsF">
                                    
                                    <span><h3>HTML</h3></span>
                                    <span><h3>S(CSS)</h3></span>
                                    <span><h3>Javascript</h3></span>
                                    <span><h3>React</h3></span>
                                    <span><h3>GSAP</h3></span>
                                    
                                </div>
                            </Tween>
                        </div>
                        <div className = "mobile"> 
                            <Tween
                                from = {{opacity:0, y: -50}}
                                to = {{opacity:1, y: 0}}
                                duration = {1}
                                stagger = {0.3}
                                delay = {0.8}
                                
                            > 
                                <div className = "titleM">
                                    <h3>Mobile</h3>
                                </div>
                                <div className = "techsM">
                                    <span><h3>React Native</h3></span>
                                    <span><h3>Expo CLI</h3></span>
                                    <span><h3>React Navigation</h3></span>
                                    
                                </div>
                            </Tween>
                        </div>
                        <div className = "other"> 
                            <Tween
                                from = {{opacity:0, y: -50}}
                                to = {{opacity:1, y: 0}}
                                duration = {1}
                                stagger = {0.3}
                                delay = {1}
                                
                            > 
                                <div className = "titleB">
                                    <h3>Other</h3>
                                </div>
                                <div className = "techsB">
                                    <div><h3>Git/Github</h3></div>
                                    <div><h3>Figma</h3></div>
                                    <div><h3>WordPress</h3></div>
                                </div>
                            </Tween>
                        </div>
                    </div>
                    <a href = "/projects"><Arrow text = {this.state.arrow}/></a>
                    
                </div>
            )
        
    }
}

export default Page3