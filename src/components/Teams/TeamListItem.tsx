import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Team from '../../models/Team';
// import styles from './TeamListItem.module.css';

const TeamListItem: React.FC<{ team: Team }> = (props) => {
	return (
		<Link
			to={{
				pathname: `/teams/${props.team.name}`,
				state: props.team
			}}
		>
			{' '}
			<Card border="secondary" bg="light" style={{ width: '20rem' }}>
				<Card.Img variant="top" src={props.team.image} style={{ width: '16rem' }} />
				<Card.Footer>
					<Card.Title >{props.team.name}</Card.Title>
				</Card.Footer>
			</Card>
		</Link>
	);
};

export default TeamListItem;
