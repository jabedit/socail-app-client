import React from "react";
import { Link } from "react-router-dom";
import {AiFillHome, AiFillMessage} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {GrMultimedia} from 'react-icons/gr'
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import logo from "../../assets/logo.png";

const Header = ({ setTheme }) => {
  const { user, logOut } = useContext(AuthContext);
  // const handleLight = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  //   console.log(e.target.checked);
  // };
  const handleLogOut = (e) => {
    e.preventDefault();
    logOut();
  };
  return (
   
    <nav className="md:px-20  bg-white">
      <div className="navbar navbar-bg-color text-purple-500 font-semibold mb-7">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow categories  rounded-box w-52"
            >
              <li>
                <Link to="/"> <AiFillHome />Home</Link>
              </li>

              <li>
                <Link to="/media"> <GrMultimedia />Media</Link>
              </li>

              <li>
                <Link to="/message"><AiFillMessage />Message</Link>
              </li>
              <li>
                <Link to="/about"><CgProfile />About</Link>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-lg md:text-2xl font-bold italic">
            <img
              style={{ height: "2rem", width: "3rem" }}
              src={logo}
              alt="img"
            />
            FancySociety
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-3xl">

          <li className="pl-5">
                <Link to="/"> <AiFillHome /></Link>
              </li>

              <li className="pl-5">
                <Link to="/media"> <GrMultimedia /></Link>
              </li>

              <li className="pl-5 text-purple-500 ">
                <Link to="/message"><AiFillMessage /></Link>
              </li>
              <li className="pl-5">
                <Link to="/about"><CgProfile /></Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end">

          {user ? (
            <>
              <Link
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                  src={user.photoURL}
                  alt="img"
                />
              </Link>
              <Link
                onClick={handleLogOut}
                className=" bg-purple-500 px-3 py-2 rounded-lg text-white font-semibold  mr-3 "
              >
                LogOut
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-purple-500 px-3 py-2 rounded-lg text-white font-semibold mr-3 "
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
