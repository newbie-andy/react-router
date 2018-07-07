import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Products from '../pages/Products';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="navbar">
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/category">种类</Link>
                        </li>
                        <li>
                            <Link to="/products">产品</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default HeaderComponent;