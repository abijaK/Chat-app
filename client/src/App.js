import './App.css';
import { Route, Routes } from "react-router-dom";
import  Home  from "./views/Home.js";
import Chats from "./views/Chats.js";
// import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/chats" element={<Chats/>} />
      </Routes>
    </div>
  );
}

export default App;
