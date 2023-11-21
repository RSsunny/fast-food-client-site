import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DeshbordAdmiList = () => {
  return (
    <div className="mt-20 ml-10 flex flex-col space-y-8 uppercase text-sm">
      <NavLink
        to={"/deshbord/adminhome"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> Admin Home
      </NavLink>
      <NavLink
        to={"/deshbord/additems"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> add items
      </NavLink>
      <NavLink
        to={"/deshbord/manageitems"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome>manage items
      </NavLink>
      <NavLink
        to={"/deshbord/managebookings"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome>Manage bookings
      </NavLink>
      <NavLink
        to={"/deshbord/allusers"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> all users
      </NavLink>

      <hr className="mr-10 " />
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> Home
      </NavLink>
      <NavLink
        to={"/deshbord/menu"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> Menu
      </NavLink>
      <NavLink
        to={"/deshbord/shop"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> Shop
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> Contact
      </NavLink>
    </div>
  );
};
export default DeshbordAdmiList;
