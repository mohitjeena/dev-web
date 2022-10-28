import React from 'react'
import "./card.css"
import Navbar from "./Navbar"
import imgurl from "../images/developer.png"
const NewCard = ({item}) => {
  return (
   
    <div className='col-12 col-md-6 col-lg-4 card-container mt-2'>
    
<div className="card mt-2 m-4">
  <img src={item.imgURL} className="card-img-top" alt="..." height="260px"/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.desc}</p>
    <a  className="btn btn-primary card-btn">{item.btnText}</a>
  </div>
</div>
</div>

  )
}

export default NewCard

 