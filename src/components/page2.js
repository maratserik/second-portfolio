import React, {Component} from 'react';
import '../styles/page2.css';
import Menu from "./menu"
import Arrow from "./arrow"
import { Tween } from 'react-gsap';
import { gsap } from 'gsap';

class Page2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            scroll: 0,
            arrow: 'About'
        }
        
        //this.myRef = React.createRef();
        //this.myRef2 = React.createRef();
    }
    /*
    componentWillMount(){
        
        const div1 = this.myRef
        const div2 = this.myRef2
        
        window.addEventListener("scroll", function(){
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
            
        })
    }*/
    render(){
        return(
            <div className = 'Page2'>
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
                        </div>
                        <div className = "below">
                            <h3><a href = "">CHECK GITHUB</a></h3>
                        </div>
                    </Tween>
                </main>
                <Tween
                        from = {{opacity: 0, y: 60}}
                        to = {{opacity:1, y: 0}}
                        duration = {1.5}
                        stagger = {0.3}
                        
                >
                    <section>
                        <a href ="" className = "section_image1">
                            <div></div>
                        </a > 
                        <a href ="" className = "section_image2">
                            <div></div>
                        </a>
                        <a href ="" className = "section_image3">
                            <div></div>
                        </a>
                        
                    </section>
                </Tween>


                <Arrow text = {this.state.arrow}/>
                
            </div>
        )
    }
}

export default Page2