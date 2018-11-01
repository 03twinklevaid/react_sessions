import React from 'react'

export default function productListItem(props) {
    return (
        <div className="product-list-item">
            <img
                className="product-card-image"
                alt={ props.product.name}
                height={100}
                title ={ props.product.name }
                src ={`${props.product.image}`}
            />
            <h3>{ props.product.name }</h3>
            {/*<div>Id: { props.product.id }</div>*/}
            <div><span className="info-title">Price: </span>{ props.product.price }</div>
            <div><span className="info-title">Quantity:  </span>{ props.product.quantity }</div>
            <div>
                <button onClick={() => props.addToCart(props.product)} className="button">Add to Cart</button>
            </div>
        </div>
    )
}