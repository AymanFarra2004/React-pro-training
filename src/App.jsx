import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/signUp';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
