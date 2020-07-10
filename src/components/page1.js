import React, {  Component } from 'react';
import '../styles/page1.css';
import Menu from "./menu"
import Arrow from "./arrow"
import Svg from "./svg"
import { Tween } from 'react-gsap';




class Page1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrow: 'About'
        }
        
    }
    render(){
        
        return(
            <div className= "Page1" >
                <Menu/>
                
                <Svg/> 
                <div className= "Greeting">
                    <Tween
                        from = {{opacity: 0, x: -50}}
                        to = {{opacity:1, x: 0}}
                        duration = {1}
                        stagger = {0.3}
                    >
                        <div>
                            <h1 className = 'hello'>Hello</h1>
                        </div>
                        <div className = 'text2'>
                        
                            <h2>My name is Marat Serikbayev</h2>
                        </div>
                        <div className = 'text2'>
                            <h2>I am front-end developer</h2>
    
                        </div>
                    </Tween>
                </div>
                <a href = "/about"><Arrow text = {this.state.arrow}/></a>
                <footer>
                    <a href = "https://www.linkedin.com/in/marat-serikbayev-96b4b91a3/">
                        <Tween
                            from = {{opacity: 0, x: -50}}
                            to = {{opacity:1, x:0}}
                            duration = {1}
                            delay = {1}
                        >
                        <h3>Get in touch</h3>
                        </Tween>
                    </a>
                </footer>
                
                
            </div>
        )
        
    }

    
    
}

export default Page1;