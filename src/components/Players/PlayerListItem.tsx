import { Link } from 'react-router-dom';

const PlayerListItem: React.FC<{ player: string }> = (props) => {
	return (
		<tr>
			<td>
				<Link to={{
					pathname: `/players/${props.player}`,
					state: props.player
				}}>{props.player}</Link>
			</td>
		</tr>
	);
};

export default PlayerListItem;
