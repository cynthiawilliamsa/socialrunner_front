import React from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink   } from 'reactstrap';

class NavHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" >
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home">My Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search">RaceFinder</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/login">Logout</NavLink>
              </NavItem>             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavHeader;
