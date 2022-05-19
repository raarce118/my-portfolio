import React from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
    return (

       <Card className= 'cards'>
           <Card.img variant="top" className='projectPic' src ={process.env.PUBLIC_URL + props.projectArr.img} />

           <Card.Body className='cards'>
               <Card.Title className='proj-name'><h3>{props.projectArr.name}</h3></Card.Title>

               <Card.Text>
                   <div className='github-link'>
                       <a href={props.projectArr.name}>link</a>
                   </div>
               </Card.Text>
           </Card.Body>
       </Card>
    )
}

export default Project;