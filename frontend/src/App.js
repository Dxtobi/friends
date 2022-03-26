
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import HomeFeed from './pages/Home/Home';
import Footer from './components/Footer';
import Message from './pages/Message/Messages';
import MessageChat from './pages/Message/Chatpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/feeds" element={<HomeFeed />} />
        <Route path="/message" element={<Message />} />
        <Route path="/message_chatid" element={<MessageChat />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />}/>
      </Routes>
      <Footer auth={true}/>
  </BrowserRouter>
  );
}

export default App;
