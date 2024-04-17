import './App.css';
import Footer from './components/footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router';
import Cartpage from './pages/Cartpage/Cartpage';

function App() {
  return (
    <div className='body'>
      <div className="container">
        <Header />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/item"} element={<Cartpage />} />
        </Routes>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;