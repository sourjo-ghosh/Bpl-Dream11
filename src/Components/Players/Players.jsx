import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const PlayersData = use(playersPromise);
    return (
        <div className="grid grid-cols-3 gap-4">

        {
            PlayersData.map(data => <AvailablePlayers key={data.id} data={data}></AvailablePlayers>)
        }
        
        </div>
    );
};

export default Players;