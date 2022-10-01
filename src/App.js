import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import HotDeals from './Pages/Home/HotDeals/HotDeals';
import Places from './Pages/Home/Places/Places';
import PlaceDetail from './Pages/PlaceDetail/PlaceDetail';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/places' element={<Places />}></Route>
        <Route path='/place/:placeId' element={<PlaceDetail />}></Route>
        <Route path='/hot' element={<HotDeals />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
