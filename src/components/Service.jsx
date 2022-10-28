import React from 'react'
import NewCard from "./Card"
import developer from "../images/developer.png"
const Service = () => {
    const arr=[{
        id:0,
        imgURL:"https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
        title:"Web Development",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content",
        btnText:"Check Now"
    },{
        id:1,
        imgURL:"https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg",
        title:"App Development",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content",
        btnText:"Check Now"
    },{
        id:2,
        imgURL:"https://img.freepik.com/premium-vector/programming-code-icon-made-with-binary-code-coding-hacker-matrix-background-with-digits-1-0_127544-1141.jpg?w=2000",
        title:"Software Development",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content",
        btnText:"Check Now"
    },
    {
      id:3,
      imgURL:"https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?w=2000",
      title:"Digital Marketing",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content",
      btnText:"Check Now"
  },{
    id:4,
    imgURL:"https://assets.telegraphindia.com/telegraph/2022/Mar/1647575151_resized-pic23.jpg",
    title:"Android Development",
    desc:"Some quick example text to build on the card title and make up the bulk of the card's content",
    btnText:"Check Now"
},{
  id:5,
  imgURL:"https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.png",
  title:"marketing",
  desc:"Some quick example text to build on the card title and make up the bulk of the card's content",
  btnText:"Check Now"
}]

  return (
    <div className='container ' style={{margin:"70px auto"}}>
      <h1 className="mt-5" style={{textAlign:"center", color:"rgba(0, 0, 0, 0.600)",marginTop:"20px"}}>Our Services</h1>
       <div className="row">
        
        {arr.map((item)=>{
          return  <NewCard item={item} key={item.id}/>
        })}
    
      
       </div>
    
    </div>
  )
}

export default Service
