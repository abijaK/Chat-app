import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Chats from './components/Chats';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} exact />
        <Route path="/register" element={<Signup/>} exact />
        <Route path="/chats" element={<Chats/>} />
      </Routes>
    </div>
  );
}

export default App;
