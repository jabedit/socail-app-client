import React from "react";
import {AiFillHome, AiFillMessage} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { Link } from "react-router-dom";
const Rightbar = () => {
  return (
    <div className="  bg-white  shadow-2xl rounded-2xl">
      <ul className="menu w-56 p-2 rounded-box text-purple-500 font-bold">
        <li>
          <Link to='/'> <AiFillHome /> Home</Link>
        </li>
        <li>
        <Link to="/media"><AiFillMessage /> Media</Link>
        </li>
        <li>
          <Link to='/about'> <CgProfile /> About</Link>
        </li>
        
        <li>
          <Link to='/message'> <AiFillMessage /> Message</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Rightbar;
