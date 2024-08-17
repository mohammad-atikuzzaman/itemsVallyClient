import React from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const myRoutesPaths = [
    {
      myRoute: "Home",
      myPath: "/",
    },
    {
      myRoute: "About",
      myPath: "/about",
    },
    {
      myRoute: "Login",
      myPath: "/login",
    },
    {
      myRoute: "Register",
      myPath: "/register",
    },
  ];
  return (
    <nav className="flex justify-between items-center p-4 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold">
        ITEMS<span className="text-green-400">VALLY</span>
      </h2>
      {/* this menu for big screen */}
      <section className="font-semibold">
        <menu className="hidden md:block space-x-4 ">
          {myRoutesPaths.map((routePath) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 border-b-2 border-green-400"
                  : "hover:text-green-200"
              }
              key={routePath?.myPath}
              to={routePath?.myPath}>
              {routePath?.myRoute}
            </NavLink>
          ))}
        </menu>

        {/* this menu for small screen */}
        <div className="drawer drawer-end md:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button text-3xl text-green-400">
              <MdMenu />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <menu className="menu bg-base-200 text-base-content min-h-full p-6">
              {myRoutesPaths.map((routePath) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-400 border-b-2 border-green-400"
                      : "hover:text-green-200"
                  }
                  key={routePath?.myPath}
                  to={routePath?.myPath}>
                  {routePath?.myRoute}
                </NavLink>
              ))}
            </menu>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
