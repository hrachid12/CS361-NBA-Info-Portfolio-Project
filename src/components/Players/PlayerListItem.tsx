import { Link } from 'react-router-dom';

import Player from '../../models/Player';

const PlayerListItem: React.FC<{ player: string }> = (props) => {
	return (
		<li>
			<Link to={{
                pathname: `/players/${props.player}`,
                state: props.player
            }}>Player ID: {props.player}</Link>
		</li>
	);
};

export default PlayerListItem;
