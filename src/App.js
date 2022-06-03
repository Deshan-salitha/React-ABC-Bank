// import logo from './logo.svg';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import { Route, Router, Routes } from 'react-router-dom';
>>>>>>> 6e0a186f864a98d88588c2b5b161792de5c36e00
import './css/App.css';
import Home from './Dashboard';
import Login from './Login';

function App() {
  return (
<<<<<<< HEAD
    // <Login />
    <BrowserRouter>
      <div className="App">
        {/* <div className="content"> */}
        <Routes>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
        {/* </div> */}
      </div>
    </BrowserRouter>
=======
    <div className="App">
      <div><h1>hu</h1></div>
      <Login />
      {/* <Router>
        <Routes>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/private" element={<Private />} /> */} 
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        {/* </Routes> */}
      {/* // </Router> */}
    </div>
>>>>>>> 6e0a186f864a98d88588c2b5b161792de5c36e00
  );
}

export default App;
