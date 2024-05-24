import logo from './logo.svg';
import './App.css';
import {Header,Footer} from './Home'
import Contact from './Contact';

import React from 'react'

function App() {
  var age=16;
  return (
    <div>

      
      <Contact st={{color:"red"}}    id={{name1 :"Minnu", age:46}} name="Teacher"/>
      <div>
        <p>Some Contents</p>
      </div>
      <Contact st={{color:"green"}}   id={{name1:"Sneha",age:15}} name="Student"/>
    </div>
  )
}

export default App

