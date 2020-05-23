import React, {  Component, useRef } from 'react';
import '../styles/page1.css';
import Menu from "./menu"
import Arrow from "./arrow"
import Svg from "./svg"
import { gsap } from 'gsap';
import { Tween } from 'react-gsap';
import {Redirect} from "react-router-dom"

class Page1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            scroll: 0,
            arrow: 'Projects'
        }
        this.myRef = React.createRef();
        this.myRef2 = React.createRef();
        
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handler)
        const scrollY = this.state.scroll
        const div1 = this.myRef
        const div2 = this.myRef2
        window.addEventListener('scroll', function(){
            if(scrollY > 0){
            
                gsap.to(div1.current, 0.1, {
                    height: "100vh"
                })
                gsap.to(div2.current, 0.1, {
                    width: '100vw',
                    delay: 1
                })
                gsap.to(div2.current, 0.1, {
                    width: '0vw',
                    delay: 2
                })
                gsap.to(div1.current, 0.3, {
                    height: "0vh",
                    delay: 3
                })
                
                
            }
        })
        

    }
    
    handler = () =>{
        this.setState({
            scroll: window.pageYOffset,
        })
    }
    render(){
        if(this.state.scroll === 0){
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
                    <Arrow text = {this.state.arrow}/>
                    <footer>
                        <a href = "">
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
                    <div ref={this.myRef} className = "overlayY"/>
                    <div ref={this.myRef2} className = "overlayX"/>
                </div>
            )
        }else{
            return(
                <Redirect to = "/projects"/>
                
                
            )   
        }
        
    }

    
    
}

export default Page1;