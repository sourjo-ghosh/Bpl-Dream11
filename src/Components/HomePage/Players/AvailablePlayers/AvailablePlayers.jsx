import { CircleUserRound, Flag } from "lucide-react";
import React from "react";
import Card from "../../UI/Card";

const AvailablePlayers = ({ PlayersData , Coin , setCoin, SelectedPlayersTab, setSelectedPlayersTab}) => {
  // const data = PlayersData
  //   console.log(PlayersData.Name);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {PlayersData.map((PlayersData) => {
        return <Card PlayersData={PlayersData} key={PlayersData.id} Coin={Coin} setCoin={setCoin} SelectedPlayersTab={SelectedPlayersTab} setSelectedPlayersTab={setSelectedPlayersTab}></Card>;
      })}
    </div>
  );
};

export default AvailablePlayers;
