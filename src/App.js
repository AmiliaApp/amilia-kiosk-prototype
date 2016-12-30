import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Navbar, Nav, NavItem } from 'react-bootstrap';
import Card from './card/Card';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#"><img src="logo-fr.png" alt="Amilia" /></a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem eventKey={1} href="#">Login</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Grid>
					<Row className="text-center">
						<Card />
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;
