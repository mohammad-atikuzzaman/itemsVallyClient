import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../context/ContextComponent";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerWithEmailPass } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return alert("Please provide minimum 6 digit password");
    }
    // console.log(email, password)

    registerWithEmailPass(email, password)
    .then(() => navigate("/"))
    .catch(err => console.error(err))
  };

  return (
    <div className="w-[70%] mx-auto mt-12 p-4 md:p-6 lg:p-8 rounded-lg min-h-[40vh] bg-green-200 flex justify-between ">
      <div className="w-full space-y-8 pr-4 md:pr-6 lg:pr-8">
        <h2 className="font-semibold text-2xl">
          Register by email and password
        </h2>
        <div className="divider">OR</div>
        <button className="flex items-center gap-2 bg-green-400 hover:bg-green-500 w-full  text-center justify-center font-semibold text-xl p-2 rounded-md">
          <FaGoogle />
          <p>Google</p>
        </button>
      </div>
      <div className="w-full">
        <form onSubmit={handleRegister} className="">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            required
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
            required
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

export default Register;
