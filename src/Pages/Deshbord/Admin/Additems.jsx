import { FaUtensils } from "react-icons/fa";
import Title from "../../../Components/Shared/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSceoure from "../../../Hooks/useAxiosSceoure";
const imgbbKey = import.meta.env.VITE_IMAGE_KEY_IMGBB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
const Additems = () => {
  const axios = useAxiosPublic();
  const axiosSceure = useAxiosSceoure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const imagefile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const menu = {
      name: data.name,
      recipe: data.recipe,
      image: res.data.data.display_url,
      price: data.price,
      category: data.category,
    };
    const manuRespons = await axiosSceure.post("/api/v1/menu", menu);
    console.log(manuRespons.data);
  };

  return (
    <div>
      <Title title={"What's new?"} subTitle={"ADD AN ITEM"}></Title>
      {/* from------------ */}

      <div className="mx-5 lg:mx-40 mb-20 bg-white p-5 lg:p-20 min-h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className="text-black">
          <h1 className="text-xl font-bold">Recipe name*</h1>
          <input
            {...register("name")}
            type="text"
            placeholder="Recipe name"
            className="w-full p-2 lg:p-4 bg-transparent border rounded-md my-2"
          ></input>
          <div className="flex justify-between gap-5 items-center">
            <div className="flex-1">
              <h1 className="text-xl font-bold">Category*</h1>
              <select
                defaultValue={"default"}
                {...register("category")}
                className="select w-full  py-0 bg-transparent my-2 border"
              >
                <option disabled value={"default"}>
                  Who shot first?
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soups"}>Soups</option>
                <option value={"desserts"}>Desserts</option>
                <option value={"drinks"}>drinks</option>
              </select>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Price*</h1>
              <input
                {...register("price")}
                type="text"
                placeholder="Price"
                className="w-full p-2 lg:p-4 bg-transparent border rounded-md my-2"
              ></input>
            </div>
          </div>
          <h1 className="text-xl font-bold">Recipe Details*</h1>

          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered w-full p-2 lg:p-4 bg-transparent border rounded-md my-2"
            placeholder="Recipe Details"
          ></textarea>

          <div className="flex justify-between items-center gap-10 mt-10">
            <input
              {...register("image")}
              type="file"
              className="file-input  bg-transparent "
            />
            <div className="flex items-center gap-2 bg-yellow-600 text-white  px-4 py-2 font-cinzel text-xl font-bold">
              <input
                type="submit"
                value={"Add Item"}
                className="cursor-pointer"
              />
              <FaUtensils></FaUtensils>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Additems;
