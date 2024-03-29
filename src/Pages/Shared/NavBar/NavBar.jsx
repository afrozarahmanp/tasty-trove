import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>{" "}
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>{" "}
      </li>
      <li>
        <Link to="/secret">Secret</Link>{" "}
      </li>
      <li>
        <Link to="/">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </Link>
      </li>

      {user ? (
        <><li><span>{user?.displayName}</span></li><li><button onClick={handleLogOut} className="btn btn-ghost">
        LogOut
      </button></li>
          
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>{" "}
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">TastyTrove</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Menu</a>
      </div>
    </div>
  );
};

export default NavBar;
