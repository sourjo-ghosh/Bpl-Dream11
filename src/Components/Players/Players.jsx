import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise, setCoin, coin}) => {
    const PlayersData = use(playersPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {
            PlayersData.map(data => <AvailablePlayers key={data.id} data={data} setCoin={setCoin} coin={coin}></AvailablePlayers>)
        }
        
        </div>
    );
};

export default Players;