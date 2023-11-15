import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { CiUser } from "react-icons/ci";
const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="fixed top-0 z-20 w-full mx-auto">
      <div className="flex justify-between items-center py-3  uppercase bg-black bg-opacity-50    max-w-[1400px] mx-auto px-2 md:px-5   w-full">
        <div>
          <h1 className="text-4xl font-cinzel font-bold">BISTRO BOSS</h1>
          <p className="text-2xl font-cinzel font-bold tracking-widest">
            Restaurant
          </p>
        </div>
        <div className="flex gap-5 items-center font-cinzel font-bold">
          <div className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-yellow-500 border-b border-yellow-500"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-yellow-500 border-b border-yellow-500"
                  : ""
              }
            >
              contact us
            </NavLink>
            <NavLink
              to="/dasbboard"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-yellow-500 border-b border-yellow-500"
                  : ""
              }
            >
              DASHBOARD
            </NavLink>
            <NavLink
              to="/ourmanue"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-yellow-500 border-b border-yellow-500"
                  : ""
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/ourshop"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-yellow-500 border-b border-yellow-500"
                  : ""
              }
            >
              Our Shop
            </NavLink>
          </div>
          <div>
            {user ? (
              <Link to={"/profile"}>
                <div className="avatar">
                  <div className="w-9 rounded-full text-4xl">
                    {user?.photoURL ? <img src={user.photoURL} /> : <CiUser />}
                  </div>
                </div>
              </Link>
            ) : (
              <Link to={"/signin"}>SignIn</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
