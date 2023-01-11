/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import React, { useState } from 'react';
import { FaRegEnvelope, FaEyeSlash, FaEye } from 'react-icons/fa';
import { MdOutlineDriveFileRenameOutline, MdLockOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-.dom';
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const PROD_URL = process.env.REACT_APP_PROD_URL;

export function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // eslint-disable-next-line no-unused-vars
  const [confirmpassword, setConfirmpassword] = useState();
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState();

  const navigate = useNavigate('');

  // Show or hide entered password
  const handleClickPass = () => setShowPass(!showPass);

  // Show or hide entered confirm password
  const handleClickConfP = () => setShowConfirmPass(!showConfirmPass);

  // Send registration to the backend
  const submitHandler = () => {
    axios.post(`${BASE_URL}/auth/user`, {
      name,
      email,
      password,
    });
    if (name && email && password) {
      // Notifies with success
      toast.success('Saved successfuly !', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      // Redirects to Login component
      navigate('/');
    } else {
      console.log('status:false');

      // Notifies with Error
      toast.error('Error: Check your fields please!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      // Keeps on Sign up page to throw user errors
      navigate('/register');
    }
  };

  // const handleImage = (e) => {
  //   const file = e.target.files[0];
  //   setFileToBase(file);
  //   console.log(file);
  // };

  // const setFileToBase = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //   };
  // };

  return (
    <div
      className="bg-img bg-cover h-[100vh] mx-auto
          flex flex-col items-center justify-center min-h-screen py-2 "
    >
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <div className="bg-cabin-blue  bg-opacity-40 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* logo-brand */}
          <div
            className="logo-brand text-left text-white font-bold absolute mt-5 ml-8 border-b border-r rounded border-teal-100 
                    px-2"
          >
            <a href="/" className="outline-none">
              Design<span className="text-cyan-900">AK</span>
            </a>
          </div>

          {/* Sign up left-Side */}
          <div className="w-2/5 text-white rounded-tl-2xl rounded-bl-2xl py-52 px-12">
            <h3 className="text-3xl font-bold mb-2">Goto Sign-in</h3>
            <div className="border-2 w-14 border-white inline-block mb-2"></div>
            {/* Barre */}
            <p className="mb-6">Connectez-vous tant que vous disposez déjà d'un compte !</p>

            {/* Sign-up Button */}
            <a
              className="loginBtn rounded-full py-2 px-12 border inline-block font-semibold bg-constancia-blue border-white text-white
                  hover:bg-white hover:text-cyan-900 hover:bg-opacity-40"
              href="/"
            >
              Sign-in
            </a>
          </div>

          <div className="w-3/5 py-16 bg-white bg-opacity-40 gap-6 rounded-tr-2xl rounded-br-2xl flex flex-col items-center">
            {/* Sign in section */}
            <div className="text-3xl text-center text-cyan-900 font-bold">
              <h2>Register</h2>
              <div className="border-2 w-14 border-constancia-blue inline-block"></div>
              {/* Barre */}
            </div>
            <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center">
              <MdOutlineDriveFileRenameOutline className="name text-gray-500 m-2" />
              <input
                className="pl-2 outline-none text-sm flex-1"
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center">
              <FaRegEnvelope className="email text-gray-500 m-2" />
              <input
                className="pl-2 outline-none text-sm flex-1 bg-white"
                type="text"
                name="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center flex-row-reverse">
              {/* Button show|hide password-icon*/}
              <span onClick={handleClickPass}>
                {showPass ? (
                  <FaEye className="password text-gray-500" />
                ) : (
                  <FaEyeSlash className="password text-gray-500" />
                )}
              </span>

              <input
                className="pl-2 outline-none text-sm flex-1"
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <MdLockOutline className="password text-.5xl text-gray-500 m-2" />
              </div>
            </div>
            <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center flex-row-reverse">
              {/* Button show|hide confirmPassword-icon*/}
              <span onClick={handleClickConfP}>
                {showConfirmPass ? (
                  <FaEye className="password text-gray-500" />
                ) : (
                  <FaEyeSlash className="confirmPassword text-gray-500" />
                )}
              </span>

              <input
                className="pl-2 outline-none text-sm flex-1"
                name="confirmPassword"
                type={showConfirmPass ? 'text' : 'password'}
                placeholder="Confirm your Password"
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
              <div>
                <MdLockOutline className="confirmPassword text-.5xl text-gray-500 m-2" />
              </div>
            </div>
            <div className="input-item">
              <div className="w-80 mb-5 flex flex-col items-start">
                <label
                  className="block mb-2 text-sm font- text-gray-900 dark:text-white"
                  htmlFor="multiple_files"
                >
                  Upload your picture
                </label>
                <input
                  className="block w-full text-sm text-gray-600 border  rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="multiple_files"
                  type="file"
                  multiple
                />
              </div>

              <div className="w-80 mb-3 flex">
                <label htmlFor="remember" className="text-xs flex justify-center space-x-4">
                  <span className="flex items-end text-gray-900">Already have an account ?</span>
                  <a
                    href="/Login"
                    className="text-gray-900 hover:text-white underline outline-none font-medium"
                  >
                    Sign in
                  </a>
                </label>
              </div>

              {/* Login Button */}
              <button
                href="/"
                className="saveBtn w-80 rounded py-2 text-cyan-900 font-semibold bg-constancia-blue hover:text-white hover:bg-opacity-70"
                type="submit"
                onClick={submitHandler}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
