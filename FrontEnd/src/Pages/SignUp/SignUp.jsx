import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox.jsx";
import { UseSignup } from "../../Hooks/UseSignup.js";
import { Link } from "react-router-dom";

function SignUp() {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const HandleCheckBox = (gender) => {
    setInput({ ...input, gender });
  };
  const { signupHook, loading } = UseSignup();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    await signupHook(input);
  };

  return (
    <div className="flex xs:ml-0 md:ml-0 flex-col items-center justify-center min-w-[380px]">
      <div className="xs:w-80 lg:w-[550px] p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0 ">
        <h1 className="text-2xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">krlo</span>
        </h1>
        <form className="xs:px-5" onSubmit={HandleSubmit}>
          <div className="">
            <label htmlFor="#" className="label p-2">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="your name"
              value={input.fullname}
              onChange={(e) => setInput({ ...input, fullname: e.target.value })}
            />
          </div>
          <div className="">
            <label htmlFor="#" className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Username"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>
          <div className="">
            <label htmlFor="#" className="label p-2">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div className="">
            <label htmlFor="#" className="label p-2">
              <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Confirm Password"
              value={input.confirmpassword}
              onChange={(e) =>
                setInput({ ...input, confirmpassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            onCheckBoxChange={HandleCheckBox}
            selected={input.gender}
          />
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block "
          >
            Already have an account?
          </Link>
          <div>
  
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
