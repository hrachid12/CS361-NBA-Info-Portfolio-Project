import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Team from '../../models/Team';
import { ThemeContext } from '../../store/theme-context';

import styles from './TeamListItem.module.css';

const TeamListItem: React.FC<{ team: Team }> = (props) => {
	const themeCxt = useContext(ThemeContext);

	return (
		<Link
			to={{
				pathname: `/teams/${props.team.name.replaceAll(' ', '_')}`,
				state: props.team
			}}
		>
			{' '}
			<Card border="secondary" className={themeCxt.selectTheme(`${styles.card_bg}`, `${styles.card_bg_dark}`)}>
				<Card.Img variant="top" src={props.team.image} className={styles.card_img_top} />
				<Card.Footer>
					<Card.Title className={styles.title_color} >{props.team.name}</Card.Title>
				</Card.Footer>
			</Card>
		</Link>
	);
};

export default TeamListItem;
