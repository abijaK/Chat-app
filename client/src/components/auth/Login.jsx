import axios from "axios";
import React, { useState } from 'react'
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegEnvelope, FaEye, FaEyeSlash} from 'react-icons/fa';
// const HOST_URL=process.env.BASE_URL;

function Login() {

const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [pict, setPict] = useState();

  const [data, setData] = useState(undefined);

  // Show or hide entered password
  const handleClick = () => setShow(!show)
console.log(email,password);
  
  // Check if user credentials is the same in database
  const submitHandler = (e) => {
    e.preventDefault();
   axios.post(`https://gda-chat-app.onrender.com/auth/login`,
      {
        email,
        password
      }
      
    ).then((responses)=>{
     
      // Show Chatroom if user connected
      if(responses.data.status === true){
        setData(responses.data)

        // Notifies with success
        toast.success("Connected successfuly!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });

        // Redirects to the chat-room component
        navigate("/chats")
      }else{
        console.log("status:false");

        // Notifies with Error
        toast.error("Error: Check your fields please!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });

        // Keeps on Login page to throw user errors 
        navigate("/")
      }  
      
      // Stores user informations when he's connected
      const localData =
        {
          idSender:responses.data._id,
          name:responses.data.name,
          token:responses.data.token,
        }

      console.log(localData);

      localStorage.setItem("user", JSON.stringify(localData))  
      
    }).catch((err)=>{
      console.log(err);
    })
    
  }
  
  return (
    <div className="bg-img mx-auto bg-cover flex flex-col items-center justify-center min-h-screen py-2 ">
        <main className="md:w-[100vw] flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-cabin-blue  bg-opacity-40 rounded-tl-2xl rounded-tr-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className='w-2/5 text-white rounded-tl-2xl py-36 px-12'>{/* Sign up section */}
              <h3 className='text-3xl font-bold mb-2'>Goto Sign-in</h3>
                <div className="border-2 w-14 border-white inline-block mb-2"></div>{/* Barre */}
              <p className='mb-6'>Créez votre compte et connectez-vous pour débuter avec nous !</p>

              {/* Sign-up Button */}
              <a className='loginBtn rounded-full py-2 px-12 border inline-block font-semibold bg-constancia-blue border-white text-white
              hover:bg-white hover:text-cyan-900 hover:bg-opacity-40' 
                  href='/register'
                  >Sign-up</a>
            </div>
              <div className="text-left text-white font-bold absolute mt-5 ml-8 border-b border-r rounded border-teal-100 
                px-2"><a href="/" className='outline-none'>Design<span className='text-cyan-900'>AK</span></a></div>
            
              {/* FORM Section */}
              <form className='w-3/5 py-16 bg-white bg-opacity-40 gap-8 rounded-tr-2xl rounded-bl-2xl flex flex-col items-center' 
                  onSubmit={(e)=>submitHandler(e)}>

                <div className='text-3xl text-center text-cyan-900 font-bold'><h2>Sign-in</h2>
                  <div className="border-2 w-14 border-constancia-blue inline-block"></div>{/* Barre */}
                </div>

                    <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center">
                        <FaRegEnvelope className='email text-gray-500 m-2'/>
                        <input className='pl-2 outline-none text-sm flex-1' type="text" 
                          name='email' placeholder='Your Email'
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-item w-80 p-2 gap-2 bg-white rounded flex items-center flex-row-reverse">

                      {/* Button show|hide password-icon*/}
                      <span onClick={handleClick}>
                        {
                        show ? <FaEye className='password text-gray-500'/> 
                          : 
                          <FaEyeSlash className='password text-gray-500'/>
                        }
                      </span>
                      
                        <input className='pl-2 outline-none text-sm flex-1' 
                        name='password' placeholder='Your Password'
                        type={show ? "text" : "password"} 
                        onChange={(e) => setPassword(e.target.value)}/>
                        <div><MdLockOutline className='password text-.5xl text-gray-500 m-2'/></div>
                    </div>
                    <div className="input-item">
                      <div className="w-80 mb-5">
                        <label htmlFor="remember" className='text-xs flex justify-between'>
                          <span className='flex text-cyan-900'><input type="checkbox" name='remember' className='mr-1' />Remember me</span>
                        <a href="/edit/password" className='text-cyan-900 font-semibold'>Forgot Password ?</a>
                        </label>
                      </div>

                      {/* Sign-up Button */}
                      <button className='loginBtn w-80 rounded py-2 text-cyan-900 font-semibold bg-constancia-blue hover:text-white hover:bg-opacity-70'
                      type="submit"
                      >Login</button>
                    </div>
                </form>

          </div>
        </main>
      
      <ToastContainer/>

    </div>
  ) 
    
}

export default Login