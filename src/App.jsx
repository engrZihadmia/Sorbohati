import About from './pages/About/index.jsx';
import Home from './pages/Home/index.jsx';
import Navbar from './ui/navbar/navbar.jsx';
import Shop from './pages/Shop/index.jsx';
import Footer from './ui/footer/footer.jsx';
import ContactPage from './pages/Contact/index.jsx';
import { CartProvider } from './ui/CardContext/CartContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
