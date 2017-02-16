import React, { PropTypes } from 'react';
import Product from '../../components/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
