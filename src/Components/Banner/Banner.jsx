import React from "react";
import BgShadowImg from "../../assets/bg-shadow.png";
import BannerMainImg from "../../assets/banner-main.png";
const Banner = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgShadowImg})` }}
        className="my-3 rounded-3xl bg-black hero min-h-[80vh]"
      >
        <div className="hero-content text-center">
          <div className="max-w-md flex justify-center items-center flex-col space-y-5">
            <img src={BannerMainImg} alt="" />
            <p className="text-[40px] font-bold text-[#FFFFFF] md:whitespace-nowrap">
              Assemble Your Ultimate Dream 11 Cricket Team
            </p>
            <p className="text-[24px] font-medium text-[#ffffff]/50 md:whitespace-nowrap">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="py-2 px-2 border rounded-xl border-[#E7FE29]">
              <button className="btn rounded-xl border-none bg-[#E7FE29] text-[#131313]">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
