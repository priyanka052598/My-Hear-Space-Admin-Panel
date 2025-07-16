import images from 'assets';
import axios from 'axios';
import React, { useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { P } from '../../../../dist/assets/chart-B4PJgM5N';

function Login() {
    const [email,setEmail]=useState("");
    const[emailError,setEmailError]=useState("");
    const[password,setPassword]=useState("");
    const[passwordError,setPasswordError]=useState("");
    const[isFormValid, setIsFormValid]=useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate=useNavigate()

    // Create a masked version of the password using *
    const maskedPassword = "*".repeat(password.length);

    const validateForm = ()=> {
        let valid =true;

        // Email validation
  const emailRegex = /^(?=.*[a-z])[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const gmailRegex = /@gmail\.com$/;

    if (!email) {
        setEmailError('');
        valid = false;
      } 
      else if (!emailRegex.test(email)) {
        setEmailError('Incorrect ID');
        valid = false;
      } 
      else if (!gmailRegex.test(email)) {
        setEmailError('Incorrect ID');
        valid = false;
      }
      else {
        setEmailError('');
      }

       // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!password) {
    setPasswordError('');
    valid = false;
  } else if (!passwordRegex.test(password)) {
    setPasswordError(
      'Incorrect Password'
    );
    valid = false;
  } else {
    setPasswordError('');
  }

      return valid;
    }

    useEffect(() => {
      
    setIsFormValid(validateForm())
    
    }, [email,password])
    const serverUrl = import.meta.env.VITE_SERVER_URL;


  console.log("process.env.VITE_SERVER_URL",serverUrl)

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (validateForm()) {
          try {
              const {data}  = await axios.post(`${serverUrl}admins/login`, { email, password });
  
              console.log('Login successful:', data);
              
              // Store user data or token in local storage
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.admin));

            // Retrieve stored data to verify
            const token = localStorage.getItem('authToken');
            const user = JSON.parse(localStorage.getItem('user'));

            // console.log('Token:', token);
            // console.log('User:', user);
// toast.success(data.message);
              navigate('/Dashboard')
              // Handle successful login (e.g., store token, redirect user)
          } catch (error) {
            toast.error(error?.response?.data?.message);
              console.error('Login failed:', error.response?.data?.message || error.message);
          }
      }
  };


  return (
    <div className="relative h-screen flex  bg-[#F0F0F0]">
      {/* Left Section */}
      <div className="left w-[40%] font-sans h-full relative">
        <img
          className="absolute w-full h-full object-cover"
          src={images.bg1}
          alt=""
        />
        
        {/* Content */}
        <div className=" flex pt-20 flex-col items-center h-full relative z-10">
          <img className="logo w-[158px] mb-6" src={images.hearspacelogo} alt="" />
          <div className="text flex flex-col justify-center items-center">
            <span className="text-[30px] text-[#878787]">Welcome to</span>
            <h1 className="text-[48px] text-[#ffffff]">Admin Panel!</h1>
          </div>
        </div>

        {/* Base Image */}
        <img
          className="absolute w-full h-[250px] bottom-0 "
          src={images.bg2}
          alt=""
        />
      </div>
      <div className="right w-[40%] mx-auto px-12    flex flex-col justify-center  my-20 rounded-[24px]  bg-white">
        <form  onSubmit={handleSubmit} className="login">
            <h1 className='text-[40px] font-semibold text-center text-black'>Login</h1>
            <div className="inputs mb-20  my-[35px]">
                <div className="email h-[100px] mb-5">
                    <label  className='text-[18px] '>Email ID</label>
                    <input id='email' type="text" placeholder='Enter email ID' value={email} onChange={(e)=>setEmail(e.target.value)}  className=' w-full bg-transparent outline-none  px-4 h-[50px] border-[2px] rounded-[12px] border[#808080]' />
                    {emailError && ( <span className="text-red-500 text-[14px]">{emailError}</span>)}
                </div>
                <div className="password  h-[100px] relative ">
                    <label  className='font-medium text-[18px]'>Password  ID</label>
                    <input id='password' type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} className=' w-full bg-transparent outline-none  px-4 h-[50px] border-[2px] rounded-[12px] border[#808080]'  />
                    {passwordError && (<span className="text-red-500 text-[14px]">{passwordError}</span>)}
                    <Link to="/Forgotpassword" >
                    <span className='font-extralight cursor-pointer text-[20px] absolute top-[100px] transform -translate-y-1/2 right-0'>Forgot Paswword?</span>

                    </Link>
                </div>
            </div>
            {/* <Link className="btn"> */}
                <button type='submit' className={` ${email && password ?  "bg-[#3A3A3A] text-white cursor-pointer"
                                    : "bg-[#D9D9D9] text-white cursor-not-allowed" }bg-[#D9D9D9] h-[50px] rounded-[12px] w-full`} >Login</button>
            {/* </Link> */}
        </form>

      </div>
    </div>
  );
}

export default Login;