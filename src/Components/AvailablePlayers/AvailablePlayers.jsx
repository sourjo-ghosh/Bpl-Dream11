import React from "react";
import NameIconImg from "../../assets/nameIcon.png";
import FlagImg from "../../assets/Flag.png";
const AvailablePlayers = ({ data }) => {
  return (
    <div className="border py-2.5 flex flex-col justify-center items-center">
        <div>
      <img src={data.playerImage} alt="" />
        </div>
      <h2>
        <img src={NameIconImg} alt="" /> {data.playerName}
      </h2>
      <div>
      <p>
        <img src={FlagImg} alt="" /> {data.playerCountry}
      </p>
      <span>All-Rounder</span>
      </div>
      <div>
        <p>
            Rating 
            <button>
                {data.rating}
            </button>
        </p>
      </div>
    </div>
  );
};

export default AvailablePlayers;
