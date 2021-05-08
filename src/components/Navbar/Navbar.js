import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="#home">NBA Info</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav variant="pills" defaultActiveKey="/home">
						<Nav.Item>
							<Nav.Link href="/home">Active</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link eventKey="link-1">Option 2</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
