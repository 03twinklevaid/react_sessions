import React, {Component} from 'react';
import './App.css';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class List extends Component {
    render() {
        return (
            <div className="App">
                <div className="border">
                    <h2>Users List Details</h2>
                </div>
            </div>
        );
    }
}
export default List;