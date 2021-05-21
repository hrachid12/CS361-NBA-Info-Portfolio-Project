import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<Navbar expand="lg" variant="dark" className={styles.header} >
			<Navbar.Brand style={{ color: 'white' }}>NBA Info</Navbar.Brand>
			<Navbar.Toggle aria-controls="main-nav" />

			<Navbar.Collapse id="main-nav">
				<Nav className="mr-auto">
					<NavLink exact activeClassName={styles.active} className={styles.navitem} to="/">Home</NavLink>
					<NavLink exact activeClassName={styles.active} className={styles.navitem} to="/teams">Teams</NavLink>
					<NavLink exact activeClassName={styles.active} className={styles.navitem} to="/players">Players</NavLink>
					<NavDropdown title="Languages" id="language-dropdown" className={styles.dd} >
						<NavDropdown.Item className={styles.dropdown_item} >English</NavDropdown.Item>
						<NavDropdown.Item className={styles.dropdown_item} >Spanish</NavDropdown.Item>
						<NavDropdown.Item className={styles.dropdown_item} >French</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainHeader;
