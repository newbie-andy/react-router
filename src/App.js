import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import Home from './pages/Home';
import Category from './pages/Category';
import Products from './pages/Products';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <Switch> 
          {/* 只会有一个路由显示 */}
          <Route path="/products" component={Products}/>
          <Route path="/:id" render={()=> (<p>我都会显示的</p>) }></Route>
        </Switch>
  
       
      </div>
    );
  }
}

export default App;
