import { Link } from 'react-router-dom';

import Player from '../../models/Player';

const PlayerListItem: React.FC<{ player: Player}> = (props) => {
	return (
		<li>
			<Link to={{
                pathname: `/players/${props.player.id}`,
                state: props.player
            }}>Player ID: {props.player.id}</Link>
		</li>
	);
};

export default PlayerListItem;
