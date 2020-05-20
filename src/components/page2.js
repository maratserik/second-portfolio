import React from 'react';
import '../styles/page2.css';
import Menu from "./menu"
import Arrow from "./arrow"

function Page2(){
    return(
        <div className = 'Page2'>
            <Menu/>
            <div>
                <div>
                    <h2>
                        Projects
                    </h2>
                </div>
                <div>
                    <h3>
                        You can view code of projects
                    </h3>
                    <h3>
                        in my Github account bellow
                    </h3>
                </div>

            </div>
            <Arrow/>
        </div>
    )
}

export default Page2