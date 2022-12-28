import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { ChatRoom } from './components/chats/ChatRoom';

export function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} exact />
        <Route path="/register" element={<Signup/>} exact />
        <Route path="/chats" element={<ChatRoom/>} />
      </Routes>
    </div>
  );
}
