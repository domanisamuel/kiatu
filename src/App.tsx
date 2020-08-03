import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import HomePage from './pages/Home/Home';
import ErrorPage from './pages/404/ErrorPage';

//components
import Preloader from './components/preloader/preloader';

function App() {
  const [ spinner, setSpinner ] = useState(true); // preloading
  
  useEffect(()=> {
    setTimeout(()=> setSpinner(false), 1000); // preloading
  },[]);

  if(spinner) {
    return <Preloader/>
  } 
  else {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route component={ErrorPage}/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
