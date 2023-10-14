import React from 'react'
import { Container, FormControl, Navbar, NavDropdown, Nav, Dropdown, DropdownToggle } from 'react-bootstrap'
import { IoCart } from 'react-icons/io5';
function Header() {
  return (
    <Navbar bg='dark' varient='dark' style={{height:60}}>
        <Container>
            <Navbar.Brand>
                <a href='#'> brand name</a>
            </Navbar.Brand>
            <Navbar.Text className="search">
             <FormControl
             style={{width:500}}
             placeholder="search for product"
             className='m-auto'>
             </FormControl>
            </Navbar.Text>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <IoCart></IoCart>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
           
             
        
        </Container>
    </Navbar>
  )
}

export default Header
