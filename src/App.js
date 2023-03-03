import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Bookmark } from './pages/Bookmark';
import { Home } from './pages/Home';
import { Karaoke } from './pages/Karaoke';
import { Login } from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/karaoke" element={<Karaoke />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
