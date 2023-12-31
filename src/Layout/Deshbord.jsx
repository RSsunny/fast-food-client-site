import { Outlet } from "react-router-dom";
import DeshbordUserList from "../Components/Deshbord/DeshbordUserList";
import DeshbordAdmiList from "../Components/Deshbord/DeshbordAdmiList";
import useAdmin from "../Hooks/useAdmin";

const Deshbord = () => {
  const { isAdmin } = useAdmin();
  return (
    <div className="flex gap-5">
      <div className="w-[400px] min-h-screen bg-yellow-600 ">
        <div className="text-center mt-5 text-black">
          <h1 className="text-2xl font-cinzel font-bold">BISTRO BOSS</h1>
          <p className=" font-cinzel font-bold tracking-widest">Restaurant</p>
          {isAdmin ? (
            <DeshbordAdmiList></DeshbordAdmiList>
          ) : (
            <DeshbordUserList></DeshbordUserList>
          )}
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshbord;
