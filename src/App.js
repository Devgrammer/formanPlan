import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Routes from './Routes/Routes';
import {LoaderX} from './components/LoaderX/LoaderX';





function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
setTimeout(() => {
        setLoading(false);
      }, 10000)
  }, [ ]);
  return (
    <div className="app">
    {
      loading ? (<LoaderX />)
      :
 ( <Router>
    <>
      <NavBar />
      { Routes }
    </>
  </Router>)
      }
    </div>
  );
}

export default App;
