import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/signUp';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import CartPage from './components/cart';
import CheckoutPage from './components/CheckOut';
import ProductDetails from './components/ProductDetailsPage';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<CheckoutPage />} />
        <Route path="/[productName]" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
