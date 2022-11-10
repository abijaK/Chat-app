import React from 'react'
import { FaRegEnvelope, FaEye, FaLock } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-cabin-blue  bg-opacity-40 rounded-tl-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className='w-2/5 text-white rounded-tl-2xl py-36 px-12'>{/* Sign up section */}
              <h3 className='text-3xl font-bold mb-2'>Goto Sign-up</h3>
                <div className="border-2 w-14 border-white inline-block mb-2"></div>{/* Barre */}
              <p className='mb-6'>Créez votre compte et connectez-vous pour débuter avec nous !</p>
              <a className='loginBtn rounded-full py-2 px-12 border inline-block font-semibold bg-constancia-blue border-white text-white
              hover:bg-white hover:text-constancia-blue' 
                  href='\'>Sign-up</a>
            </div>
              <div className="text-left text-white font-bold absolute mt-5 ml-8 border-b border-r rounded border-teal-100 px-2"
                >Design<span className='text-teal-800'>AK</span></div>
            <div className='w-3/5 py-16 bg-white bg-opacity-40 gap-8 rounded-tr-2xl rounded-bl-2xl flex flex-col items-center'>{/* Sign in section */}
                <div className='text-3xl text-center text-teal-800 font-bold'><h2>Sign-in</h2>
                  <div className="border-2 w-14 border-constancia-blue inline-block"></div>{/* Barre */}
                </div>
                <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center">
                    <FaRegEnvelope className='email text-gray-500 m-2'/>
                    <input className='pl-2 outline-none text-sm flex-1' type="text" name='email' placeholder='Email'/>
                </div>
                <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center flex-row-reverse">
                    <FaEye className='password text-gray-500'/>
                    <input className='pl-2 outline-none text-sm flex-1' type="text" name='password'placeholder='Password'/>
                    <div><MdLockOutline className='password text-.5xl text-gray-500 m-2'/></div>
                </div>
                <div className="input-item">
                  <div className="w-80 mb-5">
                    <label htmlFor="remember" className='text-xs flex justify-between'>
                      <span className='flex text-gray-600'><input type="checkbox" name='remember' className='mr-1' />Remember me</span>
                    <a href="/" className='text-gray-600'>Forgot Password ?</a>
                    </label>
                  </div>
                  <button className='loginBtn w-80 rounded py-2 bg-constancia-blue text-yellow-50 font-semibold'
                   type="submit">Login</button>
                </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Login