import React from 'react'
import tech from "../images/tech.jpg"
import Common from "./Common"
const Home = () => {
    const info={
        title:"Grow your business with",
         name:"Mohit Technical",
          desc:"We are team of talented developer making websites",
     btnText:"Get Started",
     path:"/dev-web/service"
    }
  return (
    <div className='mt-5'>
      <Common title={info.title}  name={info.name} desc={info.desc} btnText={info.btnText} imgURL={tech} path={info.path}/>
    </div>
  )
  
}

export default Home
