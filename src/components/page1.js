import React from 'react';
import '../styles/page1.css';
import Menu from "./menu"
import Arrow from "./arrow"
import Svg from "./svg"

function Page1() {
  return(
    <div className= "Page1">
        <Menu/>
        <Svg/>
        <div className= "Greeting">
            <div>
                <h1>Hello</h1>
            </div>
            <div className = 'text2'>
                <h2>My name is Marat Serikbayev</h2>
                <h2>I am front-end developer</h2>
            </div>
        </div>
        <Arrow/>
        <footer>
            <a href ="">
                <h3>Get in touch</h3>
            </a>
        </footer>
    </div>
  )
}

export default Page1;