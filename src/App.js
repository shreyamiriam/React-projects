import logo from './logo.svg';
import './App.css';
import {Header,Footer} from './Home'
import Contact from './Contact';

import React from 'react'

function App() {
  var age=16;
  return (
    <div>

      
      <Contact/>
      <div>
        <p>Some Contents</p>
      </div>
      <Contact/>
    </div>
  )
}

export default App

