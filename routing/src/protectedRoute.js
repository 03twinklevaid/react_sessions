import React, { Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

class PrivateRoute extends  Component {
    render(){
        const {component : RouteComponent, ...rest} = this.props;
        const isAuthenticated = localStorage.isLoggedIn;

        return (
            <Route
                {...rest}
                render={(props) => (
                    isAuthenticated ? (
                        <RouteComponent {...props} />
                    ) : (
                        <Redirect to="/" />
                    )
                )
                }
            />
        )
    }
}
export default PrivateRoute;