import React from 'react'
import {Link} from "react-router-dom"
import "./common.css"
const Common = (props) => {
  return (
    <div className='container-lg container-fluid' >
      <div className="row common-container">
        <div className="col-md-6 col-12 text-container">
            <h1>{props.title} </h1>
            <h1 className='common-name'>{props.name}</h1>
            <p>{props.desc}</p>
            <button type='submit' className='common-btn'><Link to={props.path} style={{textDecoration:"none"}}>{props.btnText}</Link></button>
        </div>
        <div className="col-md-6 col-12 img-container">
        <img src={props.imgURL} alt=""/> 
        </div>
      </div>
    </div>
  )
}

export default Common
