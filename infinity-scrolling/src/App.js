import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { MovieDetailsPage } from './components/MovieDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<MovieDetailsPage/>} />
  </Routes>
  );
}

export default App;
