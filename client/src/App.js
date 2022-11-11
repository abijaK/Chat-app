import './App.css';
import { Route, Routes } from "react-router-dom";
import Chats from "./views/Chats.js";
import Signup from './views/Signup';
// import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup/>} exact />
        <Route path="/chats" element={<Chats/>} />
      </Routes>
    </div>
  );
}

export default App;
