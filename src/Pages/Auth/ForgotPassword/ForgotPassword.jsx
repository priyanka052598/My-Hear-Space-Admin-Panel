// import React from 'react'
// import images from 'assets';
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react';
// import { IoEyeOffOutline } from "react-icons/io5";
// import { IoEyeOutline } from "react-icons/io5";



// function ForgotPassword() {
//   const [newPassword, setNewPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [passwordError, setPasswordError] = useState('');
//   const [matchError, setMatchError] = useState('');
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);


//   // Password validation
//   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//   const navigate = useNavigate()
//   const handleValidation = () => {
//     if (!passwordRegex.test(newPassword)) {
//       setPasswordError('Please fill strong password.');
//     } else {
//       setPasswordError('');
//     }

//     if (newPassword !== confirmPassword) {
//       setMatchError('Passwords do not match.');
//     } else {
//       setMatchError('');
//     }
//   };


//   return (
//     <div>

//       <div className="relative h-screen flex  bg-[#F0F0F0]">
//         {/* Left Section */}
//         <div className="left w-[40%] font-sans h-full relative">
//           <img
//             className="absolute w-full h-full object-cover"
//             src={images.bg1}
//             alt=""
//           />

//           {/* Content */}
//           <div className=" flex pt-20 flex-col items-center h-full relative z-10">
//             <img className="logo w-[158px] mb-6" src={images.hearspacelogo} alt="" />
//             <div className="text flex flex-col justify-center items-center">
//               <span className="text-[30px] text-[#878787]">Welcome to</span>
//               <h1 className="text-[48px] text-[#ffffff]">Admin Panel!</h1>
//             </div>
//           </div>

//           {/* Base Image */}
//           <img
//             className="absolute w-full h-[250px] bottom-0 "
//             src={images.bg2}
//             alt=""
//           />
//         </div>
//         <div className="right w-[40%] mx-auto px-12    flex flex-col justify-center  my-20 rounded-[24px]  bg-white">
//           <form onSubmit={(e) => e.preventDefault()} className="login">
//             <h1 className='text-[40px] font-semibold text-center text-black'>Change Password</h1>
//             <div className="inputs mb-20  my-[35px]">
//               <div className="email relative h-[100px] mb-5">
//                 <label className='text-[18px]'>New Password </label>
//                 <input onChange={(e) => {
//                   setNewPassword(e.target.value);
//                   handleValidation();
//                 }}
//                   value={newPassword}
//                   id='password'
//                   type={showNewPassword ? 'text' : 'password'}
//                   placeholder='Enter Password'
//                   className=' w-full  px-4 h-[50px] border-[2px] rounded-[12px] border[#808080]' />
//                 <span
//                   onClick={() => setShowNewPassword(!showNewPassword)}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                 >
//                   {showNewPassword ? (
//                     <IoEyeOutline className="text-black text-[24px]" />
//                   ) : (
//                     <IoEyeOffOutline className="text-black text-[24px]" />
//                   )}
//                 </span>
//                 {passwordError && <span className="text-red-500 w-[70%] text-[14px]">{passwordError}</span>}
//               </div>
//               <div className="password  relative h-[80px]  ">
//                 <label className='font-medium text-[18px]'>Confirm Password </label>
//                 <input onChange={(e) => {
//                   setConfirmPassword(e.target.value)
//                   handleValidation();
//                 }}
//                   id='password'
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   placeholder='Enter Password'
//                   value={confirmPassword}
//                   className=' w-full  px-4 h-[50px] border-[2px] rounded-[12px] border[#808080]' />
//                 <span
//                   onClick={() => setShowNewPassword(!showNewPassword)}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                 >
//                   {showConfirmPassword ? (
//                   <IoEyeOutline className="text-black text-[24px]" />
//                 ) : (
//                   <IoEyeOffOutline className="text-black text-[24px]" />
//                 )}
//                                  </span>
//                 {matchError && <span className="text-red-500 text-[14px]">{matchError}</span>}
//                 {/* <span className='font-extralight text-[20px] absolute top-[100px] transform -translate-y-1/2 right-0'>Forgot Paswword?</span> */}
//               </div>
//             </div>
//             <div className="btn">
//               <button
//                 disabled={passwordError || matchError || !newPassword || !confirmPassword}
//                 className={`${!passwordError && !matchError && newPassword && confirmPassword
//                   ? 'bg-[#3A3A3A]'
//                   : 'bg-[#CCCCCC]'
//                   } cursor-pointer text-white h-[50px] rounded-[12px] w-full`}
//               // onClick={() => navigate('/success')}
//               >
//                 Set Password
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>



//     </div>
//   )
// }

// export default ForgotPassword









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import images from 'assets';

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState('');
  const [matchError, setMatchError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password validation
  // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const navigate = useNavigate();

  const handleValidation = () => {
    

    if (   newPassword !== confirmPassword) {
      setMatchError('Passwords do not match.');
    } else {
      setMatchError('');
    }
  };


  return (
    <div>
      <div className="relative h-screen flex bg-[#F0F0F0]">
        {/* Left Section */}
        <div className="left w-[40%] font-sans h-full relative">
          <img
            className="absolute w-full h-full object-cover"
            src={images.bg1}
            alt=""
          />
          <div className="flex pt-20 flex-col items-center h-full relative z-10">
            <img className="logo w-[158px] mb-6" src={images.hearspacelogo} alt="" />
            <div className="text flex flex-col justify-center items-center">
              <span className="text-[30px] text-[#878787]">Welcome to</span>
              <h1 className="text-[48px] text-[#ffffff]">Admin Panel!</h1>
            </div>
          </div>
          <img
            className="absolute w-full h-[250px] bottom-0"
            src={images.bg2}
            alt=""
          />
        </div>

        {/* Right Section */}
        <div className="right w-[40%] mx-auto px-12 flex flex-col justify-center my-20 rounded-[24px] bg-white">
          <form onSubmit={(e) => e.preventDefault()} className="login">
            <h1 className="text-[40px] font-semibold text-center text-black">
              Change Password
            </h1>
            <div className="inputs mb-20 my-[35px]">
              {/* New Password Field */}
              <div className="email relative h-[100px] mb-5">
                <label className="text-[18px]">New Password </label>
                <input
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    // handleValidation();
                  }}
                  // onBlur={handleValidation} // Validate on blur

                  value={newPassword}
                  id="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="w-full px-4 h-[50px] border-[2px] rounded-[12px] border[#808080]"
                />
                <span
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute bg-white right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showNewPassword ? (
                    <IoEyeOutline className="text-black text-[24px]" />
                  ) : (
                    <IoEyeOffOutline className="text-black text-[24px]" />
                  )}
                </span>
                {passwordError && (
                  <span className="text-red-500 w-[70%] text-[14px]">
                    {passwordError}
                  </span>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="password relative h-[80px]">
                <label className="font-medium text-[18px]">Confirm Password </label>
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    // handleValidation();
                  }}
                  // onBlur={handleValidation} // Validate on blur

                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  value={confirmPassword}
                  className="w-full px-4 h-[50px] border-[2px] rounded-[12px] border[#808080]"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute bg-white right-4 mt-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <IoEyeOutline className="text-black text-[24px]" />
                  ) : (
                    <IoEyeOffOutline className="text-black text-[24px]" />
                  )}
                </span>
                {matchError && (
                  <span className="text-red-500 text-[14px]">{matchError}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="btn">
              <button
                disabled={passwordError || matchError || !newPassword || !confirmPassword || newPassword !== confirmPassword}
                className={`${
                    newPassword === confirmPassword
                    ? 'bg-[#3A3A3A]'
                    : 'bg-[#CCCCCC]'
                  } cursor-pointer text-white h-[50px] rounded-[12px] w-full`}
              >
                Set Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
