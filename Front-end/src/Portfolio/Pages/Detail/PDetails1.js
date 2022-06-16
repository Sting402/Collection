import React from 'react';
import { Container, Card,ListGroup } from 'react-bootstrap';
import Comments from './Comments';
import './PDetails.css';
import  BasicBreadcrumbs  from "../Breadcrumb/breadcrumb"
import { Link } from "react-router-dom";


export default function PDetails(){
    return(
      
    <Container>
    <div>
    <BasicBreadcrumbs/>
    <div className= 'aside-nav'>
      
    
      <ListGroup variant="flush">
      <h2 className='h1'>相似作品</h2>
      <ListGroup.Item>
      <Link to ="/PDetails1">
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1520854026701-ec9e25ccd507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxGeXFGT2s2YjVEa3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      />
      </Link>
      </ListGroup.Item>
      
      <ListGroup.Item><Card.Img variant="top" src="https://images.unsplash.com/photo-1654709289319-40c2dc2e6d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=60" /></ListGroup.Item>
      
      </ListGroup>
    </div>
      <Card>
      
        <h1 className='h1'>Don't be aftaid.</h1>
        
        <div>
          <img className='img1' src="https://images.unsplash.com/photo-1590615368879-b1729dcab779?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8RnlxRk9rNmI1RGt8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt="" width="680" height="960"></img>
        </div>
      {/* <Card.Img variant="top" src="https://picsum.photos/720/640/?random" /> */}
      
      <div className='content'>
    <Card.Body>
      <Card.Title className='cardtitle'>Don't be afraid of anyone</Card.Title>
      <hr/>
        <Card.Text className='cardtext'>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
    </Card.Text>
    </Card.Body>
    </div>
    <br/>
</Card>

    <Comments />
</div>
</Container>

    


)

}