import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DeshbordUserList = () => {
  return (
    <div className="mt-20 ml-10 flex flex-col space-y-8 uppercase text-sm">
      <NavLink
        to={"/deshbord"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> User Home
      </NavLink>
      <NavLink
        to={"/deshbord/reservation"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> reservation
      </NavLink>
      <NavLink
        to={"/deshbord/paymenthistory"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> payment history
      </NavLink>
      <NavLink
        to={"/deshbord/mycart"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> my cart
      </NavLink>
      <NavLink
        to={"/deshbord/addreview"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> add review
      </NavLink>
      <NavLink
        to={"/mybooking"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-3 px-5 font-bold text-white"
            : "flex items-center gap-3 px-5 font-bold"
        }
      >
        <FaHome className="text-xl"></FaHome> my booking
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

export default DeshbordUserList;
