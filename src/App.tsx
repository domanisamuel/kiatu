import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import HomePage from './pages/Home/Home';
import ErrorPage from './pages/404/ErrorPage';

//components
import Preloader from './components/preloader/preloader';
import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'
import ShoppingCart from './components/shopping-cart/shoping-cart'
import Clothing from './components/clothing/clothing'

//theme
import { ThemeContext } from './themes/themeContext'
import { themeChecker } from './themes/themeChecker'

function App() {
  const [ spinner, setSpinner ] = useState(true); // preloading
  //theme
  const [ theme, setTheme ] = useState('')
  themeChecker(theme)
  
  useEffect(()=> {
    setTimeout(()=> setSpinner(false), 1000); // preloading
    setTheme(`${localStorage.getItem('_theme')}`)
  },[]);

  if(spinner) {
    return <Preloader/>
  } 
  else {
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/cart' exact component={ShoppingCart}/>
            <Route path='/clothing' exact component={Clothing}/>
            <Route component={ErrorPage}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }
}

export default App;
