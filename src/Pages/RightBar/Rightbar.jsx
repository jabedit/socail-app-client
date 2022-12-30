import React from "react";
import {AiFillHome} from 'react-icons/ai'
import { Link } from "react-router-dom";
const Rightbar = () => {
  return (
    <div className="    shadow-2xl rounded-2xl">
      <ul className="menu w-56 p-2 rounded-box">
        <li>
          <Link to='/'> <AiFillHome /> Home</Link>
        </li>
        <li>
          <Link to='/about'> <AiFillHome /> About</Link>
        </li>
        <li>
          <Link to='/'> <AiFillHome /> Home</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Rightbar;
