// import React from "react";
// import { Link } from "react-router-dom";
// import Login from "./Login";

// const SignUp = () => {
//   return (
//     <>
//       <div className="flex h-screen items-center justify-center ">
//         <div className="w-[600px]">
//           <div className="modal-box">
//             <form method="dialog">
//               {/* if there is a button in form, it will close the modal */}
//               <Link
//                 to="/"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               >
//                 ✕
//               </Link>
//             </form>
//             <h3 className="font-bold text-lg">Sign Up!</h3>
//             {/* Name */}
//             <div className="mt-4 space-y-2">
//               <span>Name</span>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your Full Name"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>
//             {/* Email  */}
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>
//             {/* Password */}
//             <div className="mt-4 space-y-2">
//               <span>Password!</span>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your Password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>
//             {/* Button */}
//             <div className="flex justify-around mt-4">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 SignUp
//               </button>
//               <p>
//                 Have Account?{" "}
//                 <button
//                   className="text-blue-500 underline cursor-pointer"
//                   onClick={() =>
//                     document.getElementById("my_modal_3").showModal()
//                   }
//                 >
//                   Login
//                 </button>{" "}
//                 <Login/>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const SignUp = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">SignUp!</h3>
            <div className="mt-4 space-y-2">
              <span>Name:</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-80 px-3 py-1 rounded-md outline:none"
              />
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email:</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 rounded-md outline:none"
              />
            </div>
            {/* Password  */}
            <div className="mt-4 space-y-2">
              <span>Password:</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 rounded-md outline:none"
              />
            </div>
            {/* Login Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                SignUp
              </button>
              <p className="text-xl">
                Have Account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
