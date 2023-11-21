import { FaTrash } from "react-icons/fa";
import Title from "../../../Components/Shared/Title";
import useCart from "../../../Hooks/useCart";

const ShopinhCaert = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((x, y) => x + y.data.price, 0);
  return (
    <div>
      {/* title......... */}
      <Title title={"My Cart"} subTitle={"WANNA ADD MORE?"}></Title>
      {/* --------------- */}
      <div className="mx-5 lg:mx-40 mb-20 bg-white p-5 lg:p-20">
        <div className="flex justify-between items-center uppercase font-cinzel font-bold lg:px-20 ">
          <h1>Total Orders : {cart.length}</h1>
          <p>total price : ${totalPrice}</p>
          <button className="px-6 py-2 bg-yellow-600 rounded-md text-white uppercase ">
            Pay
          </button>
        </div>
        {/* tabile...... */}
        <div>
          <div className="overflow-x-auto rounded-t-xl mt-10">
            <table className="table">
              {/* head */}
              <thead className="bg-yellow-600  text-white ">
                <tr className="">
                  <th></th>
                  <th className="py-5">ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart?.map((data, idx) => (
                  <tr key={data._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img
                            src={data.data.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{data.data.name}</td>
                    <td>${data.data.price}</td>
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

export default ShopinhCaert;
