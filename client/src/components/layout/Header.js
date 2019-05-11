import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, FormControl, Button } from 'react-bootstrap';
import OrderActions from "../../actions/OrderActions";
import {LinkContainer } from 'react-router-bootstrap'

export class Header extends Component{
    state = {
        activeUserId: "1"
    };

    onActiveUserChanged = (e) => {
        e.preventDefault();
        this.setState({ activeUserId: e.target.value });
   };

    onSubmit = (e) => {
        e.preventDefault();
        OrderActions.userChanged(this.state.activeUserId);
    };



    render() {
  return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand>ShutterShop eXtreme</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           <NavDropdown title="Customer" id="basic-nav-dropdown">
                  <LinkContainer to="/customerOrder">
                        <NavDropdown.Item >Order shutters</NavDropdown.Item>
                  </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/customerOrderList">
                      <NavDropdown.Item >My orders</NavDropdown.Item>
              </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/worker" >
              <Nav.Link href="/worker">Worker</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Manager" id="basic-nav-dropdown">
                  <LinkContainer to="/manager">
                      <NavDropdown.Item>Manage orders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/managerStatistics">
                      <NavDropdown.Item>Check statistics</NavDropdown.Item>
                  </LinkContainer>
              </NavDropdown>

          </Nav>

            <FormControl required type="text" placeholder="Enter your nickname here" className="mr-sm-2" onChange={this.onActiveUserChanged.bind(this)} />
            <Button variant="outline-success" onClick={this.onSubmit.bind(this)}>Login</Button>

        </Navbar.Collapse>
      </Navbar>
  )
}}



export default Header;