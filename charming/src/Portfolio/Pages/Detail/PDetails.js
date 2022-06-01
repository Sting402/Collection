import React from 'react';
import { Container, Card,ListGroup } from 'react-bootstrap';
import Comments from './Comments';
import './PDetails.css';

export default function PDetails(){
    return(
      
    
    <Container>
    
    <div className= 'aside-nav'>
      
    
      <ListGroup variant="flush">
      <h2 className='adside-h2'>HOT 5</h2>
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/150/100/?random" /></ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/150/100/?random" /></ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/150/100/?random" /></ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/150/100/?random" /></ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://picsum.photos/150/100/?random" /></ListGroup.Item>
      
      </ListGroup>
       
    </div>
      <Card>
      
        <h1 className='h1'>Portfolio</h1>
        
        <div>
          <img src="https://picsum.photos/720/720/?random" alt="" width="640" height="960"></img>
        </div>
      {/* <Card.Img variant="top" src="https://picsum.photos/720/640/?random" /> */}
      
      <div className='content'>
    <Card.Body>
      <Card.Title className='cardtitle'>Card Title</Card.Title>
        <Card.Text className='cardtext'>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
    </Card.Text>
    </Card.Body>
    <Comments />
    
    
  </div>
</Card>
<br />
    <br />
    <br />
</Container>


)

}