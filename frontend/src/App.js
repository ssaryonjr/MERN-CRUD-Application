import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import Header from './components/Header'

//Pages
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register';



function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;
