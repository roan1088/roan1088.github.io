import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // check user's default color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const setBackground = () => {
    document.body.className = (darkMode ? "bg-darkmode" : "bg-lightmode");
  }

  return (
    <div>
      {setBackground()}
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
