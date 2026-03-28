import React, { useState } from "react";

const AvailableSection = () => {
    const [ActiveBtn, setActiveBtn] = useState("available")
    // console.log(ActiveBtn, 'ActiveBtn')
  return (
    <div className="my-4 flex justify-between items-center">
      <p className="font-bold text-[17px] md:text-2xl text-center md:text-left">
        
        {ActiveBtn === "available" ? "Available Players" : "Selected Player (0/6)"}
      </p>
      <div className="flex justify-center items-center">
        <button onClick={()=> setActiveBtn("available")} className={`btn btn-outline ${ActiveBtn === "available" ? "bg-[#E7FE29]" : ""}  border-r-0 rounded-xl rounded-r-none`}>Available</button>
        <button 
        onClick={()=> setActiveBtn("selected")}
        className={`btn btn-outline  ${ActiveBtn === "selected" ? "bg-[#E7FE29]" : ""} border-l-0 rounded-xl rounded-l-none `}>Selected (0)</button>
      </div>
    </div>
  );
};

export default AvailableSection;
