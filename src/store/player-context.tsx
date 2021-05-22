import React, { useState } from 'react';
import Player from '../models/Player';

type PlayerContextObj = { players: Player[]; addPlayer: (player: Player) => void, getPlayer: (name: string) => Player | undefined};

export const PlayerContext = React.createContext<PlayerContextObj>({
	players: [],
	addPlayer: (player: Player) => {},
    getPlayer: (name: string) => undefined
});

const PlayerContextProvider: React.FC = (props) => {
	const [ players, setPlayer ] = useState<Player[]>([]);

	const addPlayerHandler = (player: Player) => {
		setPlayer((prevState) => {
            return [...prevState, player];
        });
	};

    const getPlayerHandler = (name: string) => {
		return players.find(player => player.name.toLowerCase() === name.toLowerCase());
	};

	const contextValue: PlayerContextObj = {
		players: [],
		addPlayer: addPlayerHandler,
        getPlayer: getPlayerHandler
	};

	return <PlayerContext.Provider value={contextValue}>{props.children}</PlayerContext.Provider>;
};

export default PlayerContextProvider;