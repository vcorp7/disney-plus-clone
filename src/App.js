import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
          <Route path='/' index element={<Home/>} />
          <Route path='/detail:id' element={<Detail/>} />
          <Route path='/login' element={<Login/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
