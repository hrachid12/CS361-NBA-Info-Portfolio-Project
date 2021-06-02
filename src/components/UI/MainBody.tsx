import { useContext } from 'react';
import styles from './MainBody.module.css';
import { ThemeContext } from '../../store/theme-context';

const MainBody: React.FC<{ className?: string}> = (props) => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className={`${themeCtx.selectTheme(`${styles.body_light}`, `${styles.body_dark}`)} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default MainBody;