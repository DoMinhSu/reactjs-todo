import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './pages/Category';
import Home from './pages/Home';
import Product from './pages/Product';
import Notfound from './pages/Notfound';
import {Switch,Route} from 'react-router-dom';

function App() {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/product" component={Product} />    
            <Route component={Notfound} /> 
        </Switch>
        <Footer/>
        </>
    );

}

export default App;
