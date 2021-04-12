import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/404Page" component={NotFound} />
        <Redirect to="/404Page" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
