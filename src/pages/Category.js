import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Category extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.match);
        return (
            <div className="page home">
                <p>对于嵌套的路由我们尽量放在其父组件中</p>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/shoes`}>Shoes</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/Boots`}>Boots</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/footwear`}>footwear</Link>
                    </li>
                </ul>
                <Route 
                    path={`${this.props.match.path}/:name`} 
                    render= {({match}) =>( 
                                <div>
                                    <h3> {match.params.name} </h3>
                                </div>
                            )}>
                </Route>
            </div>
        )
    }
}

export default Category; 