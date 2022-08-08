import './App.css';
import Home from './Pages/HomePage';
import Movie from './Pages/BookingPage';
import { Routes, Route } from 'react-router-dom';
import { NoPageFound } from './Pages/NoPageFound';
import Navigator from './components/Navbar';
import { Footer } from './components/Footer';
// import ServiceCall from './components/ServiceCall'

function App() {
  return (
    <div>
      <Navigator></Navigator>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:movieName" element={<Movie />}></Route>
        <Route path="*" element={<NoPageFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
