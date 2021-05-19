import { NavLink } from 'react-router-dom';

import styles from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						<NavLink exact activeClassName={styles.active} to="/">
							Home
						</NavLink>
					</li>

					<li>
						<NavLink activeClassName={styles.active} to="/teams">
							Teams
						</NavLink>
					</li>

					<li>
						<NavLink activeClassName={styles.active} to="/players">
							Players
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;