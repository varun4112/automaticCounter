import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';
//   import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Counter() {
    const [counter, setCounter]=useState(0)

    function reset(){setCounter(0);}

    useEffect(() => {const intervalId = setInterval(() => {setCounter((prevCounter) => prevCounter + 1);}, 1000);
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div style={{height:"83vh"}}>
        <Row>
        <Col></Col>
        <Col><MDBCard alignment='center'>
            <MDBCardHeader>                
            </MDBCardHeader>
            <MDBCardBody>
            <MDBCardTitle>{counter}</MDBCardTitle>
            <MDBCardText>Seconds</MDBCardText>
            <MDBBtn onClick={reset}>Reset</MDBBtn>
            </MDBCardBody>
            <MDBCardFooter></MDBCardFooter>
      </MDBCard></Col>
        <Col></Col>
      </Row>
            
 
    </div>
  )
}

export default Counter