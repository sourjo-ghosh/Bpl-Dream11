import React, { useState } from "react";
import { CircleUserRound, Flag } from "lucide-react";
const AvailablePlayers = ({ data, setCoin, coin }) => {
  // console.log(setPlayerCount)
  const [IsSelected, setIsSelected] = useState(false);
  const PlayerPrice = data.price;
  // console.log(PlayerPriceReduce)
  const HandleSelectPlayerBtn = () => {
    let NewCoin = coin - PlayerPrice;
    if (NewCoin >= 0) {
      setCoin(coin - PlayerPrice);
    } else {
      alert("Not Enough Money to But this player");
      return;
    }
    alert(`${data.playerName} Is Selected Player Price ${PlayerPrice}`);
    setIsSelected(true);
  };
  return (
    <div className="rounded-2xl p-5 w-full border border-gray-300 flex flex-col justify-center">
      <div>
        <img
          src={data.playerImage}
          className="rounded-2xl w-full object-cover object-top h-55"
          alt=""
        />
      </div>
      <div className="card-info mt-5 flex flex-col justify-center items-start space-y-3">
        <h2 className="flex text-[#131313] font-semibold text-[20px] justify-center gap-3">
          <CircleUserRound className="text-[#131313]/60"></CircleUserRound>{" "}
          {data.playerName}
        </h2>
        <div className="mt-3 flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Flag className="text-[#131313]/60"></Flag>
            <span className="text-[#131313]/70">{data.playerCountry}</span>
          </div>
          <p className="btn text-[#131313]">All-Rounder</p>
        </div>
        <div className="border-t border-gray-300 mt-3 flex justify-between items-center w-full">
          <p className="mt-3">Rating</p>
          <button className="btn mt-3 rounded-2xl p-4">{data.rating}</button>
        </div>
        <div className=" flex justify-between items-center w-full">
          <p>Batting Style</p>
          <p className="mt-3 text-[#131313]/70">{data.battingStyle}</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="">
            Price <span>${data.price}</span>
          </p>
          <button
            onClick={HandleSelectPlayerBtn}
            disabled={IsSelected}
            className={`btn btn-outline rounded-2xl`}
          >
            {IsSelected ? "Selected" : "Select Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
