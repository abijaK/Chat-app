import React from 'react'
import Signup from './Signup'
// import Login from './Login'

function Home() {
  return (
    // Construire ici l'espace d'interaction entre utilisateur
    <div className='bg-wave-img bg-cover h-full w-full'>
      {/* <h1>Bienvenue sur l'espace de Chat</h1> */}
      <head>
        <title></title>
      </head>
      {/* <Login /> */}
      <Signup/>
    </div>
  )
}

export default Home