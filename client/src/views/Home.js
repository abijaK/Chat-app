import React from 'react';
// import Login from '../components/Authentication/Login'
import Signup from '../components/auth/Signup';

function Home() {
  return (
    // Construire ici l'espace d'interaction entre utilisateur
    <div className="bg-wave-img bg-cover h-full w-full">
      <Signup />
    </div>
  );
}

export default Home;
