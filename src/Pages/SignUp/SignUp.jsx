import { Link } from "react-router-dom";

import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
const SignUp = () => {
  const [eye, setEye] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign up</title>
      </Helmet>
      <div className="md:h-screen  bg-gray-200 md:p-10 text-black">
        <div className="flex flex-col-reverse  md:flex-row  max-w-7xl mx-auto  w-full h-full  items-center  relative overflow-hidden bg-cover bg-center object-cover">
          <div className="flex-1 h-full w-full md:w-1/2  ">
            <img
              className="h-full w-full md:rounded-l-xl object-center "
              src="https://i.ibb.co/rHpzXWb/vintage-4494596-1280.jpg"
              alt=""
            />
          </div>
          <div className=" bg-white flex-1 h-full  rounded-r-xl relative flex flex-col justify-between w-full md:w-1/2">
            <div className="flex justify-between items-center lg:px-5">
              <Link to={"/"}>
                <h1 className="text-lg lg:text-3xl m-2  font-bold font-playfair">
                  Career <span className="text-green-500">Crafters</span>
                </h1>
              </Link>
              <p className="text-xs mr-5 hidden md:block">
                Dont have an account ?{" "}
                <Link to={"/signin"} className="text-green-500">
                  Signin
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-5">
              <h1 className="text-3xl font-playfair font-bold text-center mt-10">
                Register
              </h1>
              <p className="text-center my-5">
                {" "}
                Explore job opportunities that match your skills and interests.
              </p>
              <h1>Name </h1>
              <input
                className="w-full p-2 border border-black outline-none my-3 bg-white"
                type="text"
                name="name"
                {...register("name", { required: true, minLength: 5 })}
                aria-invalid={errors.name ? "true" : "false"}
                required
              />
              {errors.name?.type <= "name" && <p>First name is required</p>}
              <h1>Email </h1>
              <input
                className="w-full p-2 border border-black outline-none my-3 bg-white"
                type="email"
                name="email"
                {...register("email")}
                required
              />
              <h1>Phone </h1>
              <input
                className="w-full p-2 border border-black outline-none my-3 bg-white"
                type="number"
                name="phone"
                {...register("phone")}
              />

              <h1>Password </h1>
              <div className="relative">
                <input
                  className="w-full p-2 border border-black outline-none my-3 bg-white"
                  type={eye ? "text" : "password"}
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
                {errors.password?.type === "minLength" && (
                  <p>password must be 6 charecters</p>
                )}
                <div
                  onClick={() => setEye(!eye)}
                  className="absolute right-5 top-5 text-3xl cursor-pointer"
                >
                  {eye ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>}
                </div>
              </div>
              <h1>Confrim Password </h1>
              <input
                className="w-full p-2 border border-black outline-none my-3 bg-white"
                type="password"
                name="confrimpassword"
                {...register("confrimpassword")}
                required
              />
              <div className="flex justify-between items-center">
                <p className="text-xs">
                  your have an account ?{" "}
                  <Link to={"/login"} className="text-green-500">
                    login
                  </Link>
                </p>
              </div>
              <input
                className="w-full p-2 mb-5   my-3 hover:border-none bg-green-500 hover:text-white duration-200 ease-linear text-3xl font-bold font-edu cursor-pointer"
                type="submit"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
