import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/ContextComponent";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  const myRoutesPaths = [
    {
      myRoute: "Home",
      myPath: "/",
    },
  ];
  return (
    <nav className="flex justify-between items-center p-4 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold">
        ITEMS<span className="text-green-400">VALLY</span>
      </h2>
      {/* this menu for big screen */}
      <section className="font-semibold">
        <menu className="hidden md:flex items-center space-x-4">
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

          {user ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b-2 border-green-400"
                    : "hover:text-green-200"
                }
                to={"/about"}>
                Add Items
              </NavLink>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <img
                    className="w-10 rounded-full border-2 border-green-400"
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://placehold.jp/150x150.png"
                    }
                    alt={user?.displayName ? user?.displayName : "user"}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <a>{user?.email}</a>
                  </li>
                  <li>
                    <a>{user?.displayName ? user?.displayName : "user"}</a>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleLogOut}
                className="bg-yellow-300 p-2 rounded-md text-slate-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="p-2 rounded-md bg-yellow-200">
                Login
              </Link>
              <Link
                to="/register"
                className="p-2 rounded-md bg-green-400 text-white">
                Register
              </Link>
            </>
          )}
        </menu>

        {/* this menu for small screen */}
        <div className="drawer drawer-end z-50 md:hidden">
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
            <menu className="menu bg-base-200 text-base-content min-h-full p-6 space-y-3">
              {user ? (
                <>
                  <div className="dropdown dropdown-end mx-auto">
                    <div tabIndex={0} role="button" className="m-1">
                      <img
                        className="w-10 rounded-full border-2 border-green-400"
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://placehold.jp/150x150.png"
                        }
                        alt={user?.displayName ? user?.displayName : "user"}
                      />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li>
                        <a>{user?.email}</a>
                      </li>
                      <li>
                        <a>{user?.displayName ? user?.displayName : "user"}</a>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="bg-yellow-300 p-1 rounded-md">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="p-1 rounded-md bg-yellow-200 text-center">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="p-1 rounded-md bg-green-400 text-white text-center">
                    Register
                  </Link>
                </>
              )}
              <div className="divider">OR</div>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-400 border-b-2 border-green-400"
                      : "hover:text-green-200"
                  }
                  to={"/about"}>
                  Add Items
                </NavLink>
              )}
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
