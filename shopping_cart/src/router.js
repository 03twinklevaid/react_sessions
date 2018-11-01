import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Routing = () => (
    <Router>
        <Route exact path='/' component={ Products } />
    </Router>
)
export default Routing;