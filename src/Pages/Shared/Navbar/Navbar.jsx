import React from "react";
import {
  FaHome,
  FaWallet,
  FaShoppingBasket,
  FaBell,
  FaHouseUser,
  FaCartArrowDown,
  FaUserSecret,
  FaUserPlus,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-300">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="font-kanit  menu p-4 w-80 h-full text-[15px] text-base-content">
          {/* Sidebar content here */}
          <h1 className="text-left   ms-4 font-bold mt-8 mb-8 text-3xl">
            <span className="text-gray-700 underline ">P</span>romy
          </h1>

          <hr className="border-t-2 border-gray-500 mb-10" />

          <li className="mb-4">
            <NavLink to="/">
              <FaUserSecret></FaUserSecret> Home
            </NavLink>
          </li>
          {/* <li className="mb-4">
                <NavLink to="/dashboard/addclasses">
                   
                  <FaBell></FaBell>Resume
                </NavLink>
              </li> */}

          <li className="mb-4">
            <NavLink to="/about">
              <FaCartArrowDown></FaCartArrowDown>About Me
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/seeprojects">
              <FaUserPlus></FaUserPlus>See My Projects
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink to="/">
              <FaHouseUser></FaHouseUser> Testimonial
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink to="/dashboard/home">
              <FaHome></FaHome> Blog
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet> Service
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/contact">
              <FaShoppingBasket></FaShoppingBasket>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
