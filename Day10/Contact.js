import { useState } from "react";
import React  from "react";
import './Contact.css'




function Contact() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [text, setText]=useState("");

 
  return (
    <div>
    <div className="contact">
      
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" >
          <label>Full Name</label>
          <input name="name" value={name} onChange={e=>setName(e.target.value)}  placeholder="Enter full name..." type="text" />
          <label>Email</label>
          <input name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email..." type="email" />
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={text} 
            onChange={e=>setText(e.target.value)}></textarea>
          
          <button type="submit" className="main" >SUBMIT</button>
        </form>
      </div>
       
    </div>
   
    </div>
  );
}

export default Contact;