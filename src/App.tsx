import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import HomePage from './pages/Home/Home';
import ErrorPage from './pages/404/ErrorPage';

//components
import Preloader from './components/preloader/preloader';
import Navigation from './components/navigation/navigation'

//theme
import { ThemeContext } from './themes/themeContext'

function App() {
  const [ spinner, setSpinner ] = useState(true); // preloading
  //theme
  const [ theme, setTheme ] = useState('')
  
  useEffect(()=> {
    setTimeout(()=> setSpinner(false), 1000); // preloading
  },[]);

  if(spinner) {
    return <Preloader/>
  } 
  else {
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {theme}
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }
}

export default App;
