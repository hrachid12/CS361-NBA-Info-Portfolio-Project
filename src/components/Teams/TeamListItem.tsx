import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Team from '../../models/Team';

import styles from './TeamListItem.module.css';

const TeamListItem: React.FC<{ team: Team }> = (props) => {
	return (
		<Link
			to={{
				pathname: `/teams/${props.team.name.replaceAll(' ', '_')}`,
				state: props.team
			}}
		>
			{' '}
			<Card border="secondary" bg="light" className={styles.card_bg}>
				<Card.Img variant="top" src={props.team.image} style={{ width: '16rem' }} />
				<Card.Footer>
					<Card.Title className={styles.red_title} >{props.team.name}</Card.Title>
				</Card.Footer>
			</Card>
		</Link>
	);
};

export default TeamListItem;
