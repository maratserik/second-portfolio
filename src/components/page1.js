import React, {  Component } from 'react';
import '../styles/page1.css';
import Menu from "./menu"
import Arrow from "./arrow"
import Svg from "./svg"
import { Tween } from 'react-gsap';
import {Redirect} from "react-router-dom"

class Page1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            scroll: 0,
            arrow: 'Projects'
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handler)
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
                            from = {{opacity: 0,}}
                            to = {{opacity:1}}
                            duration = {3}
                            stagger = {1}
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
                                from = {{opacity: 0,}}
                                to = {{opacity:1}}
                                duration = {1}
                                delay = {4}
                            >
                            <h3>Get in touch</h3>
                            </Tween>
                        </a>
                    </footer>
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