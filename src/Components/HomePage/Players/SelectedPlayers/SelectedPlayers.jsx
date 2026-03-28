import { Trash2 } from "lucide-react";
import React from "react";

const SelectedPlayers = ({ SelectedPlayersTab }) => {
  return (
    <div>
      {SelectedPlayersTab.map((Players) => {
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
                  <p className="text-sm text-gray-500">{Players.battingStyle}</p>
                </div>
              </div>

              {/* Right: delete button */}
              <button className="text-red-500 hover:text-red-700 transition">
                <Trash2></Trash2>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;

// <div className="flex justify-between items-center">
//   <div>
//   <img src={Players.playerImage} alt="" />
//   <p>{Players.playerName}</p>
//   <p>{Players.battingStyle}</p>
//   </div>
// </div>
