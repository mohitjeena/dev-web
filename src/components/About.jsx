import React from 'react'
import Common from './Common'
import de from "../images/de.jpg"
const About = () => {
    const info={
        title:"Welcome to About Page",
         name:"Mohit Technical",
          desc:"We are team of talented developer making websites",
     btnText:"Contact Here",
     path:"/contact"
    }
  return (
    <div>
      <Common title={info.title}  name={info.name} desc={info.desc} btnText={info.btnText} imgURL={de} path={info.path}/>
    </div>
  
  
  )
}

export default About
