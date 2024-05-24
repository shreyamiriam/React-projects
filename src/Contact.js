import React from 'react'
import './Contact.css';

function Contact(props) {
  return (
    <div style={props.st}>
      
      <p>{props.id.name1}</p>
      <h1>{props.name} Contact Page</h1>
        <label>Email Address</label>
        <input type="text"/>
        <br/>
        <label>message</label>
        <textarea></textarea>
        <button>Send</button>
        
    </div>

  )
}

export default Contact