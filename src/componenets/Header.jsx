import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  return (
    <div>
        <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Counter</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header