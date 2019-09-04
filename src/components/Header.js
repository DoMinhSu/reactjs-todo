import React, { Component } from 'react';
import Category from './../pages/Category';
import Home from './../pages/Home';
import Product from './../pages/Product';
import {Switch,BrowserRouter as Router,Link,NavLink,Route} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <Link exact="true" to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/category" className="nav-link" >Category</Link>
                </li>
                <li className="nav-item">
                    <Link to="/product" className="nav-link" >Product</Link>
                </li>
            </ul>
        );
    }
}

export default Header;