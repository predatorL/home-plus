import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes
} from "react-router-dom";

import './App.css';

import Home from './pages/home';
import menuRoutes from './pages/menu/routes';


const PageRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    menuRoutes
  ])
}

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/menu/list">菜单列表</Link>
          <Link to="/menu/add">添加菜单</Link>
        </header>
        <PageRoutes />
      </div>
    </Router>
  );
}

export default App;
