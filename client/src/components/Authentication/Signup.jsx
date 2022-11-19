import React, { useState } from 'react'
import { FaRegEnvelope, FaEyeSlash, FaEye} from 'react-icons/fa';
import { MdOutlineDriveFileRenameOutline, MdLockOutline } from "react-icons/md";

function Signup() {

  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [name, setName] = useState(); 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  // const [pict, setPict] = useState();
  const [submit, setSubmit] = useState();

  const handleClickPass = () => setShowPass(!showPass)
  const handleClickConfP = () => setShowConfirmPass(!showConfirmPass)
  const submitHandler = () => setSubmit()

  return (
    <div className="bg-wave-img bg-cover mx-auto
          flex flex-col items-center justify-center min-h-screen py-2 ">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
            <div className="bg-cabin-blue  bg-opacity-40 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                {/* logo-brand */}
                <div className="logo-brand text-left text-white font-bold absolute mt-5 ml-8 border-b border-r rounded border-teal-100 
                    px-2"><a href="/" className='outline-none'>Design<span className='text-cyan-900'>AK</span></a>
                </div>
            
                  {/* Sign up left-Side */}
                <div className='w-2/5 text-white rounded-tl-2xl rounded-bl-2xl py-52 px-12'>
                  <h3 className='text-3xl font-bold mb-2'>Goto Sign-in</h3>
                    <div className="border-2 w-14 border-white inline-block mb-2"></div>{/* Barre */}
                  <p className='mb-6'>Connectez-vous tant que vous disposez déjà d'un compte !</p>
                  
                  {/* Sign-up Button */}
                  <a className='loginBtn rounded-full py-2 px-12 border inline-block font-semibold bg-constancia-blue border-white text-white
                  hover:bg-white hover:text-cyan-900 hover:bg-opacity-40' 
                      href='/Login'>Sign-in</a>
                </div>
                
                <div className='w-3/5 py-16 bg-white bg-opacity-40 gap-6 rounded-tr-2xl rounded-br-2xl flex flex-col items-center'>{/* Sign in section */}
                    <div className='text-3xl text-center text-cyan-900 font-bold'><h2>Register</h2>
                      <div className="border-2 w-14 border-constancia-blue inline-block"></div>{/* Barre */}
                    </div>
                    <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center">
                        <MdOutlineDriveFileRenameOutline className='name text-gray-500 m-2'/>
                        <input className='pl-2 outline-none text-sm flex-1' type="text" 
                        name='name' placeholder='Your Name'
                          onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center">
                        <FaRegEnvelope className='email text-gray-500 m-2'/>
                        <input className='pl-2 outline-none text-sm flex-1 bg-white' type="text" 
                        name='email' placeholder='Your Email'
                          onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center flex-row-reverse">
                          {/* Button show|hide password-icon*/}
                            <button onClick={handleClickPass}>
                              {
                              showPass ? <FaEye className='password text-gray-500'/> 
                                : 
                                <FaEyeSlash className='password text-gray-500'/>
                              }
                          </button>
                          <input className='pl-2 outline-none text-sm flex-1' 
                          name='password'
                          type={showPass ? "text" : "password"}
                          placeholder='Your Password'
                            onChange={(e) => setPassword(e.target.value)}/>
                        <div><MdLockOutline className='password text-.5xl text-gray-500 m-2'/></div>
                    </div>
                    <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center flex-row-reverse">
                         {/* Button show|hide confirmPassword-icon*/}
                         <button onClick={handleClickConfP}>
                              {
                              showConfirmPass ? <FaEye className='password text-gray-500'/> 
                                : 
                                <FaEyeSlash className='confirmPassword text-gray-500'/>
                              }
                          </button>
                          <input className='pl-2 outline-none text-sm flex-1' 
                          name='confirmPassword'
                          type={showConfirmPass ? "text" : "password"}
                          placeholder='Confirm your Password'
                            onChange={(e) => setConfirmpassword(e.target.value)}/>
                        <div><MdLockOutline className='confirmPassword text-.5xl text-gray-500 m-2'/></div>
                    </div>
                    <div className="input-item">
                      <div className="w-80 mb-5 flex flex-col items-start">
                        <label class="block mb-2 text-sm font- text-gray-900 dark:text-white" for="multiple_files">Upload your picture</label>
                        <input className="block w-full text-sm text-gray-600 border  rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
                        {/* <label className='text-cyan-900 mb-2' htmlFor="picture">Upload your Picture</label>
                        <input className='w-30 text-xs text-cyan-900' name='picture' type="file" accept='image/*'/> */}
                      </div>

                      <div className="w-80 mb-3 flex">
                        <label htmlFor="remember" className='text-xs flex justify-center space-x-4'>
                          <span className='flex items-end text-gray-900'>Already have an account ?</span>
                        <a href="/Login" className='text-gray-900 hover:text-white underline outline-none font-medium'>Sign in</a>
                        </label>
                      </div>

                      {/* Login Button */}
                      <a href='/' className='saveBtn w-80 rounded py-2 text-cyan-900 font-semibold bg-constancia-blue hover:text-white hover:bg-opacity-70'
                      type="submit" onClick={submitHandler}>Save</a>
                    </div>
                </div>
          </div>
        </main>
    </div>
  )
}

export default Signup