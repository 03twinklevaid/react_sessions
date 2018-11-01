import React from 'react';
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';

function productsListing(props) {
    return (
        <div className="product-listing">
            {
                props.products && props.products.map( product =>
                <ProductListItem
                    product={product} key={product.id}
                    addToCart={props.addToCart}
                />)
            }
        </div>
    )
}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapDispatchtoProps(dispatch) {
    return ({
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    })
}
export default  connect(mapStateToProps, mapDispatchtoProps)(productsListing)