import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './LoginForm';
import NaveBar from './Navebar';
import SignUp from './SignUp';
import Browse from './Browse';
import ChatRoom from './ChatRoom';
// import Profile from './Profile';
// import Feedback from './Feedback';
function App() {
  return (
    <div >
        <Router>
   
      <NaveBar/>
      
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/browse" element={<Browse/>} />
          <Route path="/chat" element={<ChatRoom/>} />
          {/* <Route path="/feedback" element={<Feedback/>} /> */}
          {/* <Route path="/profile" element={<Profile/>} /> */}

          </Routes>
      
    
    </Router>
        
      
    </div>
  );
}

export default App;
