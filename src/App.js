import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddPlace from './Pages/AddPlace/AddPlace';
import Home from './Pages/Home/Home/Home';
import HotDeals from './Pages/Home/HotDeals/HotDeals';
import Places from './Pages/Home/Places/Places';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManagePlace from './Pages/ManagePlace/ManagePlace';
import PlaceDetail from './Pages/PlaceDetail/PlaceDetail';
import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/places' element={<Places />}></Route>
        <Route path='/place/:placeId' element={<RequireAuth>
          <PlaceDetail />
        </RequireAuth>}></Route>
        <Route path='/addplace' element={<RequireAuth>
          <AddPlace />
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <ManagePlace />
        </RequireAuth>}></Route>
        <Route path='/hot' element={<HotDeals />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
