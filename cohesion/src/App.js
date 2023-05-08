// import Navbar from './Componants/Navbar';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Chatroom from './Pages/Chatroom';
import {Routes, Route} from 'react-router-dom';

import FirstYear from './Pages/FirstYear';
import SecondYear from './Pages/SecondYear';
import ThirdYear from './Pages/ThirdYear';
import FinalYear from './Pages/FinalYear';
import Introduction from './Pages/Introduction';


function App() {
  return (
    <div className="App">
        <div>
            <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/chatroom' element={<Chatroom/>}>
                    <Route path="introduction" element={<Introduction/>} />
                    <Route path="firstyear" element={<FirstYear/>} />
                    <Route path="secondyear" element={<SecondYear/>} />
                    <Route path="thirdyear" element={<ThirdYear/>} />
                    <Route path="finalyear" element={<FinalYear/>} />
              </Route>  
            </Routes>
        </div>
    </div>
  );
}

export default App;
