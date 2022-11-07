import './App.css';
import { Route, Routes } from "react-router-dom";
import  Home  from "./Components/Home.js";
import Chats from "./Components/Chats.js";

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
