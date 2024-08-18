import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

  }
  return (
    <div className="w-[70%] mx-auto mt-12 p-4 md:p-6 lg:p-8 rounded-lg min-h-[40vh] bg-green-200 flex justify-between ">
      <div className="w-full space-y-8 pr-4 md:pr-6 lg:pr-8">
        <h2 className="font-semibold text-2xl">
          Login with email and password
        </h2>
        <div className="divider">OR</div>
        <button className="flex items-center gap-2 bg-green-400 hover:bg-green-500 w-full  text-center justify-center font-semibold text-xl p-2 rounded-md">
          <FaGoogle />
          <p>Google</p>
        </button>
      </div>
      <div className="w-full">
        <form onSubmit={handleLogin} className="">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 rounded-md outline-none"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 rounded-md outline-none"
          />
          <br />
          <input
            type="submit"
            value="Register"
            className="w-full bg-green-400 mt-4 p-2 rounded-md font-semibold cursor-pointer hover:bg-green-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
