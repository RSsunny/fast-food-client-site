import { useQuery } from "@tanstack/react-query";
import useAxiosSceoure from "../../../Hooks/useAxiosSceoure";
import Title from "../../../Components/Shared/Title";
import { FaTrash, FaUser } from "react-icons/fa";

const AllUser = () => {
  const axios = useAxiosSceoure();
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios("/api/v1/users");
      return res.data;
    },
  });
  const handleAdmin = (id) => {
    refetch();
    axios.patch(`/api/v1/users/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <Title title={"How many?"} subTitle={"MANAGE ALL USERS"}></Title>
      {/* all users------------ */}
      <div className="mx-5 lg:mx-40 mb-20 bg-white p-5 lg:p-20 min-h-screen">
        <div className="flex justify-between items-center uppercase font-cinzel font-bold lg:px-10 ">
          <h1>Total user : {data?.length}</h1>
        </div>
        {/* tabile...... */}
        <div>
          <div className="overflow-x-auto rounded-t-xl mt-10">
            <table className="table">
              {/* head */}
              <thead className="bg-yellow-600  text-white ">
                <tr className="">
                  <th></th>

                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data?.map((data, idx) => (
                  <tr key={data._id}>
                    <th>{idx + 1}</th>
                    <td>{data.email}</td>
                    <td>
                      {data.roll === "admin" ? (
                        "admin"
                      ) : (
                        <FaUser
                          onClick={() => handleAdmin(data._id)}
                          className="bg-yellow-600 text-white p-2 rounded-md w-8 h-8 cursor-pointer "
                        ></FaUser>
                      )}
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">
                        <FaTrash className="text-xl text-red-500 text-center mx-auto ml-2"></FaTrash>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
