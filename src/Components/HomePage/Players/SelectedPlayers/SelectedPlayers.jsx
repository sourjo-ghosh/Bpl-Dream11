import { Dice1, Trash2 } from "lucide-react";
import React from "react";

const SelectedPlayers = ({
  SelectedPlayersTab,
  setSelectedPlayersTab,
  setCoin,
  Coin,
}) => {
  const HandleSelectedPlayerBtn = (Players) => {
    const filteredPlayers = SelectedPlayersTab.filter(
      (SelectedPlayer) => (SelectedPlayer.playerName = !Players.playerName),
    );
    const DeletedPlayerPrice =
      setSelectedPlayersTab(filteredPlayers);
    setCoin(Coin + Players.price);
  };
  return (
    <div>
      {SelectedPlayersTab.length === 0 ? (
        <div className="p-15 flex flex-col gap-3 justify-center items-center">
          <h2 className="text-2xl font-bold text-[#131313]">
            No players selected Yet!
          </h2>
          <p className="text-xl text-[#131313]/50">
            Go to available tab to select Players
          </p>
        </div>
      ) : (
        SelectedPlayersTab.map((Players) => {
          return (
            <div key={Players.id} className="my-2">
              <div
                key={Players.id}
                className="flex justify-between items-center border border-gray-200 py-3 px-4"
              >
                {/* Left: image + info */}
                <div className="flex items-center gap-4">
                  <img
                    src={Players.playerImage}
                    alt={Players.playerName}
                    className="w-15 h-15 rounded object-cover bg-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-[#131313]">
                      {Players.playerName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {Players.battingStyle}
                    </p>
                    {/* <p>{Players.id}</p> */}
                  </div>
                </div>

                {/* Right: delete button */}
                <button
                  onClick={() => HandleSelectedPlayerBtn(Players)}
                  className="text-red-500 btn btn-outline hover:text-red-700 transition"
                >
                  <Trash2></Trash2>
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
