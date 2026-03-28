import React from 'react';
import dollarImg from '../../assets/dollar1.png';
import logoImg from '../../assets/logo.png';
const Navbar = ({coin}) => {
  return (
     <>
       <div className="navbar bg-base-100 ">
         <div className="navbar-start">
           <a> <img src={logoImg}/></a>
         </div>
         <div className="navbar-end">
           <button className="btn btn-ghost text-[#131313] font-semibold text-[16px] ">{coin} Coin
             <img src={dollarImg} />
           </button>
         </div>
       </div>
     </>
  );
};

export default Navbar;