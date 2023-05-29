import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import Signin from "./pages/signIn/Signin";
import AccountVerification from "./pages/accountVerification/AccountVerification";

import './App.css';

const App = ()=> {
  return (
    <div className='App'>
      <Routes>
        <Route path="sign-in" element={<Signin />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-account" element={<AccountVerification />} />
      </Routes>
    </div>
  );
}

export default App;
