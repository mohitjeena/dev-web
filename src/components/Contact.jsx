import React from 'react'
import { useState } from 'react'
import "./contact.css"
const Contact = () => {
  const [val,setval]=useState({fullname:"",
  number:"",
email:"",
message:""})
function inputEvent(event){
    const {name,value}=event.target;
    setval((preValue)=>{
   return{  ...preValue,
     [name]:value
   }
    })
}
  function formSubmit(e){
   e.preventDefault();
   alert(`My name is ${val.fullname}.My number is ${val.number},and ${val.email} is my email address.${val.message}`)
  }
  return (
    <div className='contact-container'>
    <h1>Contact Us</h1>
     <form action="">
    
     <label htmlFor="name">Full Name</label>
     <input onChange={inputEvent} type="text" id='name' name="fullname" placeholder='name'  value={val.fullname} required/>
     
     <label htmlFor="num">Number</label>
     <input onChange={inputEvent} type="number" id="num" name="number" placeholder='mobile number' value={val.number}  required/>
    
     <label htmlFor="email">Email Address</label>
     <input onChange={inputEvent} type="email" placeholder='name@example.com' name='email' id='email' value={val.email}  required/>
    
     <label htmlFor="message">Message</label>
     <textarea onChange={inputEvent}  id="message" cols="30" rows="5" name="message" value={val.message} ></textarea>
    
     <button onClick={formSubmit} type='submit' className='contact-btn'>Submit Form</button>
     </form>
    </div>
  )
}

export default Contact
