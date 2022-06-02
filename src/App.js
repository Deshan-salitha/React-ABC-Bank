// import logo from './logo.svg';
import { Route, Router, Routes } from 'react-router-dom';
import './css/App.css';
import Login from './Login';

function App() {
  return (
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
  );
}

export default App;
