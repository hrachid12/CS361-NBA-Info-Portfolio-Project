import { useContext } from 'react';
import { LanguageContext } from '../../store/language-context'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './MainHeader.module.css';

const MainHeader = () => {
	const langCtx = useContext(LanguageContext);

	const englishHandler = () => {
		langCtx.changeLanguage('english');
	}

	const spanishHandler = () => {
		langCtx.changeLanguage('spanish');
	}

	const frenchHandler = () => {
		langCtx.changeLanguage('french');
	}

	return (
		<Navbar expand="lg" variant="dark" className={styles.header} >
			<Navbar.Brand style={{ color: 'white' }}>NBA Info</Navbar.Brand>
			<Navbar.Toggle aria-controls="main-nav" />

			<Navbar.Collapse id="main-nav">
				<Nav className="mr-auto">
					<NavLink exact activeClassName={styles.active} className={styles.navitem} to="/">Home</NavLink>
					<NavLink activeClassName={styles.active} className={styles.navitem} to="/teams">Teams</NavLink>
					<NavLink activeClassName={styles.active} className={styles.navitem} to="/players">Players</NavLink>
					<NavDropdown title="Languages" id="language-dropdown" className={styles.dd} >
						<NavDropdown.Item className={styles.dropdown_item} onClick={englishHandler}>English</NavDropdown.Item>
						<NavDropdown.Item className={styles.dropdown_item} onClick={spanishHandler}>Spanish</NavDropdown.Item>
						<NavDropdown.Item className={styles.dropdown_item} onClick={frenchHandler}>French</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainHeader;
