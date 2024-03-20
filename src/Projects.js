import React from 'react'
import Header from './Header'
import img from './images/project1.JPG'
import './Projects.css'
const Projects = () => {
  return (
    <div>
    <Header name="Projects"/>  
     
     <div className="projectsdiv">
        
        <div className="p1 projects ">
        <img src={img}></img>
        <h2>Project1</h2>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p> 
        </div>

        <div className="p2 projects ">
        <img src={img}></img>
        <h2>Project2</h2>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>
         
       <div className="p3 projects ">
       <img src={img}></img>
       <h2>Project3</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>

            
       
       <div className="p5 projects ">
       <img src={img}></img>
       <h2>Project5</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>

       <div className="p6 projects ">
       <img src={img}></img>
       <h2>Project6</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>

       <div className="p7 projects ">
       <img src={img}></img>
       <h2>Project7</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>

       <div className="p8 projects ">
       <img src={img}></img>
       <h2>Project8</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>
       <div className="p9 projects ">
       <img src={img}></img>
       <h2>Project9</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>
       <br></br><br></br><br></br>

            
       

     </div>
    </div>
  )
}

export default Projects
