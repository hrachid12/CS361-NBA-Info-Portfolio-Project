import { NavLink } from 'react-router-dom';

import styles from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.active} to="/home">Home</NavLink>
                    </li>

                    <li>
                        <NavLink activeClassName={styles.active} to="/players">Players</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;