import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ItemDetailsPage from './components/ItemDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/item/:id' element={<ItemDetailsPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
