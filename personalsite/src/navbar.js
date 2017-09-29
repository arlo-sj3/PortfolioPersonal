import React, {Component} from 'react';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class Mav extends Component {
  render() {
    return (
<Navbar className="navbar"
  fixedBottom
  inverse
   >
   <Navbar.Header>
       <Navbar.Brand>
         <a>MORE ---> </a>
       </Navbar.Brand>
     </Navbar.Header>
     <Nav>
     <NavItem
       target="_blank" href="https://github.com/arlo-sj3">GitHub</NavItem>
     <NavItem
       target="_blank" href="https://www.linkedin.com/in/arlo-shefte-jacobs-93288313b/">Linkedin</NavItem>
       <NavDropdown title="Contact Me" id="basic-nav-dropdown">
          <MenuItem >Phone: (303) 519-3825</MenuItem>
          <MenuItem divider />
          <MenuItem >Email: arlo.sj3@gmail.com</MenuItem>
          <MenuItem divider />
          <MenuItem >Address: 11990 W. Pleasant Ave. Golden, CO 80401</MenuItem>


        </NavDropdown>

   </Nav>

</Navbar>
    );
  }
}

export default Mav;
