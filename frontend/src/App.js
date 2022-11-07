import './App.css';
import { Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { chats } from "./Components/Chats";

function App() {
  return (
    <div className="App">
      <Route Path="/" component={Home} exact />
      <Route Path="/chats" component={chats} />
    </div>
  );
}

export default App;
