import React, { PropTypes } from 'react';
import Product from '../../components/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Products</h3>
            <ul className="products-list clearfix">
              {products.map(product => (
                  <li key={product.id}>
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
