import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductDetail from './Product-Detail';


class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price, currency, image, isInCart } = this.props;

        return (
            <div className="card mt-2" style={{width: "15rem"}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price} {currency}</p>
                    <div className="row text-center mb-3">
                        <div className="col d-block">
                            <button
                                className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                                onClick={this.handleClick}
                            >
                                {isInCart ? 'Remove' : 'Add to cart'}
                            </button>
                            <ProductDetail {...this.props} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
