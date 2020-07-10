import React, {Component} from 'react';
import '../styles/page2.css';
import Menu from "./menu"
import Arrow from "./arrow"
import Showcase from "./showcase"
import { Tween } from 'react-gsap';


class Page2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            arrow: 'Home'
        }
        
        
    }
    render(){
        
        return(
            <div className = 'Page2'  >
                <Menu/>
                <main>
                    <Tween
                        from = {{opacity: 0, x: -50}}
                        to = {{opacity:1, x: 0}}
                        duration = {1.5}
                        stagger = {0.3}
                    >
                        <div className = "upper">
                            <div className = 'upper_text1_container'>
                                <h2>
                                    Projects
                                </h2>
                            </div>
                            <div  className = 'upper_text2_container'>
                                <h3>
                                    You can view code of projects
                                </h3>
                                <h3>
                                    in my Github account bellow
                                </h3>
                            </div>
                            <div className = "below">
                                <h3><a href = "https://github.com/Maracrasava">CHECK GITHUB</a></h3>
                            </div>
                        </div>
                        
                    </Tween>
                </main>
                
                <Tween
                        from = {{opacity: 0, y: -60}}
                        to = {{opacity:1, y: 0}}
                        duration = {1.5}
                        stagger = {0.3}
                        
                >
                    <section>
                        <a href ="" className = "section_image1 section_image">
                            <div></div>
                        </a > 
                        <a href ="" className = "section_image2 section_image">
                            <div></div>
                        </a>
                        <a href ="" className = "section_image3 section_image">
                            <div></div>
                        </a>
                        
                    </section>
                </Tween>

                
                <a href = "/"><Arrow text = {this.state.arrow}/></a>
                <Showcase/>
            </div>
        )
        
        
    }
}

export default Page2