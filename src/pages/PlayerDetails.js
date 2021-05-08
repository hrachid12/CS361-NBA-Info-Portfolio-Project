import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
    const params = useParams();

    console.log(params['player_id'])
	return (
		<div>
			<h1>Player Details</h1>
		</div>
	);
};

export default PlayerDetails;
