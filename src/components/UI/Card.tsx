import { useContext } from 'react';
import styles from './Card.module.css';
import { ThemeContext } from '../../store/theme-context';

const Card: React.FC<{ className?: string}> = (props) => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className={`${themeCtx.selectTheme(`${styles.card_light}`, `${styles.card_dark}`)} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card;