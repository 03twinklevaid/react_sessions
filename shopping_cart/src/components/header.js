import React, {Component} from 'react';
import ProductsListing from './products';
import products from '../data/products.json';

class Header extends Component {
    render(){
        return(
            <div>
                <h2><i>TTN Mart</i></h2>
                <hr />
                <ProductsListing
                    products={products}
                />
            </div>
        )
    }
}
export default Header;