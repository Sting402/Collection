import React from 'react';
import { Container, Card,ListGroup } from 'react-bootstrap';
import Comments from './Comments';
import './PDetails.css';
import { Navbar } from "../Breadcrumb/breadcrumb"

export default function PDetails(){
    return(
      
    
    <Container>
    <Navbar/>
    <div className= 'aside-nav'>
      
    
      <ListGroup variant="flush">
      <h2 className='adside-h2'>HOT 5</h2>
      <ListGroup.Item><Card.Img variant="top" src=    "https://images.unsplash.com/photo-1520854026701-ec9e25ccd507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxGeXFGT2s2YjVEa3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
 /></ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/200/100/?random" /></ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/150/250/?random" /></ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/250/100/?random" /></ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/150/150/?random" /></ListGroup.Item>
      
      </ListGroup>
       
    </div>
      <Card>
      
        <h1 className='h1'>Portfolio</h1>
        
        <div>
          <img src="https://images.unsplash.com/photo-1520854026701-ec9e25ccd507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxGeXFGT2s2YjVEa3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" width="640" height="960"></img>
        </div>
      {/* <Card.Img variant="top" src="https://picsum.photos/720/640/?random" /> */}
      
      <div className='content'>
    <Card.Body>
      <Card.Title className='cardtitle'>Card Title</Card.Title>
      <hr/>
        <Card.Text className='cardtext'>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
    </Card.Text>
    </Card.Body>
    </div>
    <Comments />
</Card>

</Container>


)

}