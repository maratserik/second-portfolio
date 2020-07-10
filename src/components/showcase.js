import React, {Component} from 'react';


class Showcase extends Component{
    render(){
        return(
            <div className="showcase">
                <div className="title">
                    <h3>Some projects that I have worked on</h3>
                </div>
                <div className="Project1 Project">
                    <div className="left_column">
                        <div>
                            <a href = "">
                            <h4>DayQuote app</h4>
                            </a>
                        </div>
                        <div className="image"></div>
                    </div>
                    <div className="right_column">
                        <h4>
                            By using knowledge of React, I have learned how to create mobile apps using React Native. The idea behind app is to help a person to find any famous person's quote. Currently, the front-end of app has been finished. Moreover, the connection between different screens has been established so that they could share data between each other. Since React Native resembles React, I have not encountered any major issue during development.
                        </h4>
                    </div>
                </div>
                <div className="Project2 Project">
                    <div className="left_column">
                            <div>
                                <a href = "">
                                <h4>This portfolio</h4>
                                </a>
                            </div>
                            <div className="image"></div>
                    </div>
                    <div className="right_column">
                        <h4>
                            The project that i had most fun while developing it. The process of developing was much easier with React than it was with plain HTML. I have divided repeated parts of pages into components which allowed me to easily handle them. Moreover,by using SASS, I styled each component/page. There has been some difficulties animating React with GSAP, but I used a react-gsap package in order to animate in declarative way
                        </h4>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Showcase

