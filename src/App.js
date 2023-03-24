import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Dictionary from './pages/Dictionary';
import Home from "./pages/Home";
import Learn from './pages/Learn';
import Login from './pages/Login';
import Register from './pages/Register';
import { db_create } from './services/Database';
import { songs } from "./services/songs/songs";

function App() {

  db_create("songs", songs)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/learn' element={<Learn />} ></Route>
            <Route path='/dictionary' element={<Dictionary />} ></Route>
            <Route path='/dashboard' element={<Dashboard />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
