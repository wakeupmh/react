import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/fontawesome-free-solid'
export default props =>
    <Navbar bg="dark" variant="dark" stick="top"> 
        <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faCalendarCheck}/> TodoApp
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#/todos">Tarefas</Nav.Link>
            <Nav.Link href="#/about">Sobre</Nav.Link>
        </Nav>
    </Navbar>