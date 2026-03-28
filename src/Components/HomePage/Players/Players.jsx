import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ PlayersPromise, Coin , setCoin }) => {
    const [SelectedPlayersTab, setSelectedPlayersTab] = useState([])
  const PlayersData = use(PlayersPromise);
//   console.log(PlayersData.length);
  const [ActiveBtn, setActiveBtn] = useState("available");
//   console.log(ActiveBtn);
  return (
    <>
      <div className="my-4 text-2xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-bold text-[#131313] text-2xl">
          {ActiveBtn === "available"
            ? "Available Players"
            : `Selected Player (${SelectedPlayersTab.length}/${PlayersData.length})`}
        </p>
        {/* <div className="flex justify-center items-center">
        <button className={`btn btn-outline bg-[#E7FE29]  border-r-0 rounded-xl rounded-r-none`}>Available</button>
        <button 
        className={`btn btn-outline  border-l-0 rounded-xl rounded-l-none `}>Selected (0)</button>
      </div> */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => setActiveBtn("available")}
            className={`btn btn-outline ${ActiveBtn === "available" ? "bg-[#E7FE29]" : ""}  border-r-0 rounded-xl rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveBtn("selected")}
            className={`btn btn-outline  ${ActiveBtn === "selected" ? "bg-[#E7FE29]" : ""} border-l-0 rounded-xl rounded-l-none `}
          >
            {`Selected (${SelectedPlayersTab.length})`}
          </button>
        </div>
      </div>

      {ActiveBtn === "available" ? (
        <AvailablePlayers PlayersData={PlayersData} Coin={Coin} setCoin={setCoin} SelectedPlayersTab={SelectedPlayersTab} setSelectedPlayersTab={setSelectedPlayersTab}></AvailablePlayers>
      ) : (
        <SelectedPlayers SelectedPlayersTab={SelectedPlayersTab} setSelectedPlayersTab={setSelectedPlayersTab}></SelectedPlayers>
      )}
    </>
  );
};

export default Players;
