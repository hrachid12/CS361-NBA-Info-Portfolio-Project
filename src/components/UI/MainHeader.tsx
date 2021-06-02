import { useContext } from 'react';
import { LanguageContext } from '../../store/language-context'
import { ThemeContext } from '../../store/theme-context';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './MainHeader.module.css';

const MainHeader = () => {
	const langCtx = useContext(LanguageContext);
	const themeCtx = useContext(ThemeContext);

	const englishHandler = () => {
		langCtx.changeLanguage('english');
	}

	const spanishHandler = () => {
		langCtx.changeLanguage('spanish');
	}

	const frenchHandler = () => {
		langCtx.changeLanguage('french');
	}

	const lightHandler = () => {
		themeCtx.changeTheme('light');
	}

	const darkHandler = () => {
		themeCtx.changeTheme('dark');
	}

	return (
		<Navbar expand="lg" variant="dark" className={themeCtx.selectTheme(`${styles.header_light}`, `${styles.header_dark}`)} >
			<Navbar.Brand style={{ color: 'white' }}>NBA Info</Navbar.Brand>
			<Navbar.Toggle aria-controls="main-nav" />

			<Navbar.Collapse id="main-nav">
				<Nav className="mr-auto">
					<NavLink exact activeClassName={styles.active} className={styles.navitem} to="/">Home</NavLink>
					<NavLink activeClassName={styles.active} className={styles.navitem} to="/teams">Teams</NavLink>
					<NavLink activeClassName={styles.active} className={styles.navitem} to="/players">Players</NavLink>
					<NavDropdown title="Languages" id="language-dropdown" className={themeCtx.selectTheme(`${styles.dd_light}`, `${styles.dd_dark}`)} >
						<NavDropdown.Item onClick={englishHandler}>English</NavDropdown.Item>
						<NavDropdown.Item onClick={spanishHandler}>Español</NavDropdown.Item>
						<NavDropdown.Item onClick={frenchHandler}>Français</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Themes" id="theme-dropdown" className={themeCtx.selectTheme(`${styles.dd_light}`, `${styles.dd_dark}`)} >
						<NavDropdown.Item onClick={lightHandler}>Light</NavDropdown.Item>
						<NavDropdown.Item onClick={darkHandler}>Dark</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainHeader;
