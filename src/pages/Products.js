import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const productsData = [
            {
              id: 1,
              name: 'NIKE Liteforce Blue Sneakers',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
              status: 'Available'
            
            },
            {
              id: 2,
              name: 'Stylised Flip Flops and Slippers',
              description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
              status: 'Out of Stock'
            
            },
            {
              id: 3,
              name: 'ADIDAS Adispree Running Shoes',
              description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
              status: 'Available'
            },
            {
              id: 4,
              name: 'ADIDAS Mid Sneakers',
              description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
              status: 'Out of Stock'
            },
            
        ];
        let linkList = productsData.map((product, index)=> {
            return (
                    <li key={index}>
                        <Link to={`${this.props.match.url}/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
            )
        });
        return (
            <div className="page products">
                <p>产品</p>
                <div className="product-list">
                    {linkList}
                </div>
                <Route 
                    path={`${this.props.match.path}/:productId`} 
                    render={(props)=>(<Product data= {productsData}{...props}/>)}></Route>
                <Route exact path={this.props.match.url}
                    render={() => (
                    <div>Please select a product.</div>
                    )}
                />
            </div>
        )
    }
}

export default Products; 