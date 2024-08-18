import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/ContextComponent";

const NavBar = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const myRoutesPaths = [
    {
      myRoute: "Home",
      myPath: "/",
    },
    {
      myRoute: "Add Items",
      myPath: "/about",
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
          {loading ? (
            "loading"
          ) : (
            <div>
              {user ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-400 border-b-2 border-green-400"
                        : "hover:text-green-200"
                    }
                    to={"/login"}>
                    Login
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-400 border-b-2 border-green-400"
                        : "hover:text-green-200"
                    }
                    to={"/register"}>
                    Register
                  </NavLink>
                </>
              ) : (
                <>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={
                            user?.photoURL
                              ? user.photoURL
                              : "https://placehold.jp/150x150.png"
                          }
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                      <li>
                        <a className="justify-between">Profile</a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          )}
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
