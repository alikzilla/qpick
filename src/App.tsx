import './App.css';
import Footer from './components/footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router';
import Cartpage from './pages/Cartpage/Cartpage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div className='body'>
      <div className="container">
        <Header />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/cart"} element={<Cartpage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;