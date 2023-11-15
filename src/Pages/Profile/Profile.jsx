import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
    navigate("/signin");
  };
  return (
    <div className="mt-40 text-center text-3xl font-bold font-cinzel">
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Profile;
