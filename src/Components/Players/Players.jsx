import React, { use } from 'react';

const Players = ({playersPromise}) => {
    const data = use(playersPromise);
    console.log(data.length)
    return (
        <div>
            hello world 
        </div>
    );
};

export default Players;