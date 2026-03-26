import React from 'react';
import dollarImg from '../../assets/dollar1.png';
import logoImg from '../../assets/logo.png';
const Navbar = () => {
  return (
     <>
       <div className="navbar bg-base-100 ">
         <div className="navbar-start">
           <a> <img src={logoImg}/></a>
         </div>
          <div className="navbar-center ml-100">
            <ul className='flex gap-11.25'>
              <li className='btn btn-ghost'>Home</li>
              <li className='btn btn-ghost'>Fixture</li>
              <li className='btn btn-ghost'>Teams</li>
              <li className='btn btn-ghost'>Schedules</li>
            </ul>
          </div>

         <div className="navbar-end">
           <button className="btn btn-ghost text-[#131313] font-semibold text-[16px] ">0 Coin
             <img src={dollarImg} />
           </button>
         </div>
       </div>
     </>
  );
};

export default Navbar;