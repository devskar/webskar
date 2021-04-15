import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Visuals from './pages/Visuals';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import GameOfLife from './pages/visuals/GameOfLife';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id="page-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/visuals" exact component={Visuals} />
          <Route path="/visuals/gameoflife" exact component={GameOfLife} />
          <Route path="/404Page" component={NotFound} />
          <Redirect to="/404Page" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
