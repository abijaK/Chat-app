import React from 'react'
import loginImage from '../assets/loginImage.jpg'

function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        <img src={loginImage} alt="bgLogin" />
    </div>
  )
}

export default Login