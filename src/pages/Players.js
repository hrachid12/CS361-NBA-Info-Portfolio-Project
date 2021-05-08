import { Link } from 'react-router-dom';

const Players = () => {
	return (
		<div>
			<h1>Players page</h1>
			<ul>
				<li>
					<Link to="/players/1">Player 1</Link>
				</li>
				<li>
					<Link to="/players/2">Player 2</Link>
				</li>
				<li>
					<Link to="/players/3">Player 3</Link>
				</li>
			</ul>
		</div>
	);
};

export default Players;
